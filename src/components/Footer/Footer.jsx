import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3 className="footer-logo">MD Soluções</h3>

        <p className="footer-text">
          Suporte técnico, desenvolvimento web e consultoria especializada.
        </p>

        <p className="footer-copy">
          © {new Date().getFullYear()} MD Soluções — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
