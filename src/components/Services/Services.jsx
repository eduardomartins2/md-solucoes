import { motion } from "framer-motion";
import "./Services.css";

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2 className="services-title">Serviços</h2>

        <div className="services-grid">
          <motion.div
            className="service-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <h3>Suporte Técnico</h3>
            <p>
              Manutenção de computadores, instalação de softwares, redes e
              impressoras.
            </p>
          </motion.div>

          <motion.div
            className="service-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <h3>Desenvolvimento Web</h3>
            <p>
              Criação de sites modernos, rápidos e responsivos para seu negócio.
            </p>
          </motion.div>

          <motion.div
            className="service-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <h3>Consultoria em TI</h3>
            <p>
              Apoio técnico e orientação para pequenas empresas e profissionais.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
