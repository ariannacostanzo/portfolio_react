import './header.scss'
// da fare diventa nero allo scorrere della pagina, fare scrollare in modo smooth

const Header = () => {
     return (
     <>
       <header>
    <div className="container flex justify-between">
      <div className="logo color-green">
        <a >&lt;/arianna &gt;</a>
      </div>
      <div>
        <ul className="hidden md:flex gap-7 nav-links">
          <li><a href="#about" >Su di me</a></li>
          <li><a href="#skills" >Abilità</a></li>
          <li><a href="#projects" >Progetti</a></li>
          <li><a href="#contact-me" >Contattami</a></li>
        </ul>
      </div>
    </div>
  </header>
     </>
     )
}
export default Header;