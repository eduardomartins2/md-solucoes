import "./Footer.css";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="footer-container">
        <div className="footer-brand">
          <h3>MD Soluções</h3>
          <p>
            Tecnologia, suporte técnico e desenvolvimento web sob medida para
            pequenas empresas e profissionais.
          </p>
        </div>

        <div className="footer-links">
          <h4>Navegação</h4>
          <a href="#hero">Início</a>
          <a href="#services">Serviços</a>
          <a href="#contact">Contato</a>
        </div>

        <div className="footer-contact">
          <h4>Contato</h4>
          <p>Email: eduardomartinsdev2@gmail.com</p>
          <p>WhatsApp: (24) 99960-4654</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MD Soluções. Todos os direitos reservados.</p>
      </div>
    </motion.footer>
  );
}
