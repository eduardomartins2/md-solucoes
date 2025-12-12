import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">MD Soluções</h1>

        <nav className="nav">
          <a href="#">Início</a>
          <a href="#">Serviços</a>
          <a href="#">Contato</a>
        </nav>
      </div>
    </header>
  );
}
