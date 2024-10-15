import { useState, useEffect } from "react";
import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import projects from "../../database/projects/projects.js";

const Header = () => {
  // States
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(
    window.innerWidth >= 768
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

  // Functions
  const handleResize = () => {
    setIsMediumScreen(window.innerWidth >= 768);
  };

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    const target = document.getElementById(id);
    const offset = target.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  };

  const handleScrollY = () => {
    if (window.scrollY > 120) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Effects

  useEffect(() => {
    window.addEventListener("scroll", handleScrollY);
    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className={isScrolled ? "header-scrolled" : ""}>
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
          {isHamburgerOpen && !isMediumScreen && (
            <div id="sidebar">
              <div id="close-btn" onClick={() => setIsHamburgerOpen(false)}>
                <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
              </div>
              <div className="line-divisor"></div>
              <ul className="nav-links pl-3">
                {/* su di me  */}
                <li className="mb-3">
                  <a href="#about" onClick={(e) => handleScrollTo(e, "about")}>
                    Su di me
                  </a>
                </li>
                {/* abilità  */}
                <li className="mb-3">
                  <a
                    href="#skills"
                    onClick={(e) => handleScrollTo(e, "skills")}
                  >
                    Abilità
                  </a>
                </li>
                {/* progetti  */}
                <li className="mb-3">
                  <a
                    href="#projects"
                    onClick={(e) => handleScrollTo(e, "projects")}
                    onMouseOver={() => setIsNavVisible(true)}
                    onMouseLeave={() => setIsNavVisible(false)}
                  >
                    Progetti
                    {!isNavVisible ? (
                      <FontAwesomeIcon
                        icon={faCaretDown}
                        className="ml-2"
                      ></FontAwesomeIcon>
                    ) : (
                      <FontAwesomeIcon
                        icon={faCaretUp}
                        className="ml-2"
                      ></FontAwesomeIcon>
                    )}
                    {isNavVisible && (
                      <div
                        className="common-dropdown dropdown-navbar-side"
                        onMouseOver={() => setIsNavVisible(true)}
                        onMouseLeave={() => setIsNavVisible(false)}
                      >
                        {/* sottolista  */}
                        <ul>
                          {projects.map((project, i) => (
                            <li key={`navProject${i}`}>
                              <a
                                href={`#${project.image_key}`}
                                onClick={(e) =>
                                  handleScrollTo(e, project.image_key)
                                }
                              >
                                {project.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </a>
                </li>
                {/* contattami  */}
                <li className="mb-3">
                  <a
                    href="#contact"
                    onClick={(e) => handleScrollTo(e, "contact")}
                  >
                    Contattami
                  </a>
                </li>
              </ul>
            </div>
          )}

          {/* lista normale  */}
          {isMediumScreen && (
            <div>
              <ul className="hidden md:flex gap-7 nav-links">
                {/* su di me  */}
                <li>
                  <a href="#about" onClick={(e) => handleScrollTo(e, "about")}>
                    Su di me
                  </a>
                </li>
                {/* Abilità */}
                <li>
                  <a
                    href="#skills"
                    onClick={(e) => handleScrollTo(e, "skills")}
                  >
                    Abilità
                  </a>
                </li>
                {/* progetti  */}
                <li className="relative">
                  <a
                    href="#projects"
                    onClick={(e) => handleScrollTo(e, "projects")}
                    onMouseOver={() => setIsNavVisible(true)}
                    onMouseLeave={() => setIsNavVisible(false)}
                  >
                    Progetti
                    {!isNavVisible ? (
                      <FontAwesomeIcon
                        icon={faCaretDown}
                        className="ml-2"
                      ></FontAwesomeIcon>
                    ) : (
                      <FontAwesomeIcon
                        icon={faCaretUp}
                        className="ml-2"
                      ></FontAwesomeIcon>
                    )}
                    {isNavVisible && (
                      <div
                        className="common-dropdown dropdown-navbar"
                        onMouseOver={() => setIsNavVisible(true)}
                        onMouseLeave={() => setIsNavVisible(false)}
                      >
                        {/* sottolista  */}
                        <ul>
                          {projects.map((project, i) => (
                            <li key={`navProject${i}`}>
                              <a
                                href={`#${project.image_key}`}
                                onClick={(e) =>
                                  handleScrollTo(e, project.image_key)
                                }
                              >
                                {project.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </a>
                </li>
                {/* contattami  */}
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => handleScrollTo(e, "contact")}
                  >
                    Contattami
                  </a>
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
