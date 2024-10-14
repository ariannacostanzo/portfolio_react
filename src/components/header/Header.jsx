import { useState, useEffect } from "react";
import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
// da fare diventa nero allo scorrere della pagina, fare scrollare in modo smooth

const Header = () => {

const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
const [isMediumScreen, setIsMediumScreen] = useState(window.innerWidth >= 768);

const handleResize = () => {
  setIsMediumScreen(window.innerWidth >= 768); 
};

useEffect(() => {
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);


  return (
    <>
      <header>
        <div className="container flex justify-between items-center">
          <div className="logo color-green">
            <a>&lt;/arianna &gt;</a>
          </div>
          {/* hamburger menu   */}
          {!isMediumScreen && (
            <div
              id="hamburger-menu"
              className="md:hidden"
              onClick={() => setIsHamburgerOpen(true)}
            >
              <div className="arrow"></div>
              <div className="arrow"></div>
              <div className="arrow"></div>
            </div>
          )}
          {/* <!-- menu a destra  --> */}
          {isHamburgerOpen && (
            <div id="sidebar">
              <div id="close-btn" onClick={() => setIsHamburgerOpen(false)}>
                <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
              </div>
              <div className="line-divisor"></div>
              <ul className="nav-links pl-3">
                <li className="mb-3">
                  <a href="#about">Su di me</a>
                </li>
                <li className="mb-3">
                  <a href="#skills">Abilità</a>
                </li>
                <li className="mb-3">
                  <a href="#projects">Progetti</a>
                </li>
                <li className="mb-3">
                  <a href="#contact">Contattami</a>
                </li>
              </ul>
            </div>
          )}

          {/* lista normale  */}
          {isMediumScreen && (
            <div>
              <ul className="hidden md:flex gap-7 nav-links">
                <li>
                  <a href="#about">Su di me</a>
                </li>
                <li>
                  <a href="#skills">Abilità</a>
                </li>
                <li>
                  <a href="#projects">Progetti</a>
                </li>
                <li>
                  <a href="#contact">Contattami</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
    </>
  );
};
export default Header;
