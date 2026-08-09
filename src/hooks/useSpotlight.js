import { useCallback, useRef } from "react";

function handleSpotlightMove(ref, e) {
  const el = ref.current;
  if (!el) return;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--sx", `${e.clientX - rect.left}px`);
  el.style.setProperty("--sy", `${e.clientY - rect.top}px`);
}

export function useSpotlight() {
  const ref = useRef(null);
  const onMouseMove = useCallback((e) => handleSpotlightMove(ref, e), []);
  return { ref, onMouseMove };
}

// Non-hook variant, safe to create inside a map() when rendering a list —
// calling useSpotlight() itself inside a loop would break the rules of hooks.
export function createSpotlight() {
  const ref = { current: null };
  return { ref, onMouseMove: (e) => handleSpotlightMove(ref, e) };
}
