import { useEffect, useState } from "react";
import "./Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
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
