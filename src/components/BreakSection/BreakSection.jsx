import "./BreakSection.css";
import { motion } from "framer-motion";

export default function BreakSection() {
  return (
    <section className="break-section">
      <motion.div
        className="break-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="break-text">
          Tecnologia bem feita é aquela que resolve problemas
          <span> de forma simples.</span>
        </p>
      </motion.div>
    </section>
  );
}
