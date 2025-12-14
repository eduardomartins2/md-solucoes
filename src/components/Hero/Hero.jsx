import "./Hero.css";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <motion.div
        className="hero-content"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.25,
            },
          },
        }}
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.9, ease: "easeOut" },
            },
          }}
        >
          Serviços de TI, Suporte Técnico e Desenvolvimento Web
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.9, ease: "easeOut" },
            },
          }}
        >
          Soluções rápidas e profissionais para manutenção de computadores,
          configuração de redes, criação de sites modernos e consultoria em TI.
        </motion.p>

        <motion.a
          href="#contact"
          className="hero-btn"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
        >
          Fale Conosco
        </motion.a>
      </motion.div>
    </section>
  );
}
