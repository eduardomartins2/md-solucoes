import "./Services.css";

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2 className="services-title">Nossos Serviços</h2>

        <div className="services-grid">
          <div className="service-card">
            <h3>Desenvolvimento de Sites</h3>
            <p>
              Criação de sites modernos, rápidos e responsivos,
              com foco em performance e experiência do usuário.
            </p>
          </div>

          <div className="service-card">
            <h3>Suporte Técnico</h3>
            <p>
              Manutenção de computadores, redes, impressoras e
              assistência técnica para empresas e usuários domésticos.
            </p>
          </div>

          <div className="service-card">
            <h3>Consultoria & Otimização</h3>
            <p>
              Análise, ajustes e melhorias em sistemas, infraestrutura
              e fluxos de trabalho para aumentar produtividade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
