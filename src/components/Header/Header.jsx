import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">MD Soluções</h1>

        <nav className="nav">
          <a href="#hero">Home</a>
          <a href="#services">Serviços</a>
          <a href="#contact">Contato</a>
        </nav>
      </div>
    </header>
  );
}
