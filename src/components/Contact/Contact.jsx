import "./Contact.css";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Vamos conversar?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
        >
          Precisa de suporte técnico, manutenção ou um site profissional?
          Entre em contato e vamos encontrar a melhor solução para você.
        </motion.p>

        <motion.div
          className="contact-actions"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.6 }}
        >
          <motion.a
            href="https://wa.me/55999604654"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn primary"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
          >
            WhatsApp
          </motion.a>

          <motion.a
            href="mailto:eduardomartins2dev2@gmail.com"
            className="contact-btn secondary"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
          >
            E-mail
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
