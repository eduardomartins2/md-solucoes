import "./Contact.css";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2>Vamos conversar?</h2>

        <p>
          Precisa de suporte técnico, manutenção ou um site profissional?
          Entre em contato e vamos encontrar a melhor solução para você.
        </p>

        <div className="contact-actions">
          <motion.a
            href="https://wa.me/+55999604654"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            WhatsApp
          </motion.a>

          <motion.a
            href="mailto:eduardomartins2dev2@gmail.com"
            className="contact-btn secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            E-mail
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
