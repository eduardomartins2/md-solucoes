import "./Hero.css";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1>Serviços de TI, Suporte Técnico e Desenvolvimento Web</h1>

        <p>
          Soluções rápidas e profissionais para manutenção de computadores,
          configuração de redes, criação de sites modernos e consultoria em TI.
        </p>

        <motion.a
          href="#contact"
          className="hero-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Fale Conosco
        </motion.a>
      </motion.div>
    </section>
  );
}
