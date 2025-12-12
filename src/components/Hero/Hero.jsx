import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Serviços de TI, Suporte Técnico e Desenvolvimento Web</h1>
        <p>
          Oferecemos soluções rápidas e profissionais para pequenas empresas e
          empreendedores: manutenção de computadores, configuração de redes,
          criação e manutenção de sites modernos e consultoria em TI.
        </p>

        <a href="#contact" className="hero-btn">
          Fale Conosco
        </a>
      </div>
    </section>
  );
}
