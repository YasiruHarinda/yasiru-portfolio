import { useEffect, useRef } from "react";
import * as THREE from "three";
import { prefersReducedMotion } from "../lib/scroll";

const NODE_COUNT = 420;
const RADIUS = 2.2;
const LINK_DISTANCE = 0.45;
const SIGNAL = 0xc6f24e;

// Nodes spread evenly over a sphere (Fibonacci lattice) and linked to their
// near neighbours: a slowly turning "network" that suits distributed systems.
function buildNetwork() {
  const golden = Math.PI * (3 - Math.sqrt(5));
  const nodes = [];
  for (let i = 0; i < NODE_COUNT; i++) {
    const y = 1 - (i / (NODE_COUNT - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    const jitter = 1 + (Math.random() - 0.5) * 0.08;
    nodes.push(new THREE.Vector3(Math.cos(theta) * r, y, Math.sin(theta) * r).multiplyScalar(RADIUS * jitter));
  }

  const links = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (nodes[i].distanceTo(nodes[j]) < LINK_DISTANCE) links.push(nodes[i], nodes[j]);
    }
  }

  const hubs = nodes.filter((_, i) => i % 13 === 0);
  return { nodes, links, hubs };
}

export default function HeroScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
    } catch {
      return; // No WebGL: the hero still works, just without the scene.
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 6.5;

    const group = new THREE.Group();
    scene.add(group);

    const { nodes, links, hubs } = buildNetwork();
    const disposables = [];
    const add = (object) => {
      disposables.push(object.geometry, object.material);
      group.add(object);
    };

    add(
      new THREE.Points(
        new THREE.BufferGeometry().setFromPoints(nodes),
        new THREE.PointsMaterial({ color: 0xffffff, size: 0.03, transparent: true, opacity: 0.55 })
      )
    );
    add(
      new THREE.LineSegments(
        new THREE.BufferGeometry().setFromPoints(links),
        new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.07 })
      )
    );
    add(
      new THREE.Points(
        new THREE.BufferGeometry().setFromPoints(hubs),
        new THREE.PointsMaterial({ color: SIGNAL, size: 0.075, transparent: true, opacity: 0.95 })
      )
    );

    const dust = Array.from({ length: 260 }, () =>
      new THREE.Vector3().randomDirection().multiplyScalar(3 + Math.random() * 3)
    );
    add(
      new THREE.Points(
        new THREE.BufferGeometry().setFromPoints(dust),
        new THREE.PointsMaterial({ color: 0xffffff, size: 0.015, transparent: true, opacity: 0.35 })
      )
    );

    group.rotation.x = 0.35;

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = mount;
      if (!w || !h) return;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      // Sit to the right of the headline on wide screens, centred behind it on narrow ones.
      const wide = w >= 1024;
      group.position.x = wide ? 2.1 : 0;
      group.scale.setScalar(wide ? 1 : 0.85);
      camera.updateProjectionMatrix();
      renderer.render(scene, camera);
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);
    resize();

    const reduce = prefersReducedMotion();
    if (reduce) {
      renderer.render(scene, camera);
    }

    const pointer = { x: 0, y: 0 };
    const onPointerMove = (e) => {
      pointer.x = e.clientX / window.innerWidth - 0.5;
      pointer.y = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("pointermove", onPointerMove);

    let visible = true;
    const visibility = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    visibility.observe(mount);

    let raf = 0;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      if (!visible || reduce) return;
      group.rotation.y += 0.0016;
      group.rotation.x += (0.35 + pointer.y * 0.4 - group.rotation.x) * 0.04;
      group.rotation.z += (pointer.x * 0.25 - group.rotation.z) * 0.04;
      renderer.render(scene, camera);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointerMove);
      resizeObserver.disconnect();
      visibility.disconnect();
      disposables.forEach((d) => d.dispose());
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={mountRef} aria-hidden="true" className="absolute inset-0" />;
}
