import "./Services.css";
import Reveal from "../Reveal/Reveal";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services-container">
        <Reveal>
          <h2 className="services-title">Serviços</h2>
        </Reveal>

        <div className="services-grid">
          <Reveal delay={0}>
            <motion.div whileHover={{ scale: 1.05 }} className="service-card">
              <h3>Suporte Técnico</h3>
              <p>
                Manutenção de computadores, instalação de softwares, redes e
                impressoras.
              </p>
            </motion.div>
          </Reveal>

          <Reveal delay={0.1}>
            <motion.div whileHover={{ scale: 1.05 }} className="service-card">
              <h3>Desenvolvimento Web</h3>
              <p>
                Criação de sites modernos, rápidos e responsivos para seu
                negócio.
              </p>
            </motion.div>
          </Reveal>

          <Reveal delay={0.2}>
            <motion.div whileHover={{ scale: 1.05 }} className="service-card">
              <h3>Consultoria em TI</h3>
              <p>
                Apoio técnico e orientação para pequenas empresas e
                profissionais.
              </p>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
