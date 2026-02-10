import { motion } from "framer-motion";

export default function Section({ id, title, className = "", children }) {
  return (
    <section id={id} className={`scroll-mt-28 py-10 ${className}`}>
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-5 text-2xl font-bold tracking-tight"
        >
          {title}
        </motion.h2>
      )}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
