import '../styles/header.css'

function Header() {
  return (
    <div className="Header">
      <header>
        <div class='logo'>
          <img src='henrique-rotsen-high-resolution-logo-transparent.png' alt="Henrique Rotsen" class='logo-header'></img>
        </div>
        <div class='nav-header'>
          <a>Sobre</a>
          <a>Trabalhos</a>
          <a>Currículo</a>
          <a>Contato</a>
        </div>
      </header>
    </div>
  );
}

export default Header;