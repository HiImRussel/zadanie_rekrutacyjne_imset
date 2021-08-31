import "./menu.css";
import { gsap } from "gsap";
import { useState } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    if (isOpen === false) {
      gsap.fromTo(
        "#mobileMenu",
        { opacity: 0 },
        { opacity: 1, visibility: "inherit" }
      );
      gsap.fromTo(
        ".mobileMenu__nav",
        { width: "0px" },
        { width: window.innerWidth > 700 ? "30%" : "92vw" }
      );
      setIsOpen((prevValue) => !prevValue);
    } else {
      gsap.fromTo(
        "#mobileMenu",
        { opacity: 1 },
        {
          opacity: 0,
          onComplete: () => {
            gsap.to("#mobileMenu", { visibility: "hidden" });
          },
        }
      );
      gsap.fromTo(
        ".mobileMenu__nav",
        { width: window.innerWidth > 700 ? "30%" : "100%" },
        { width: "0px" }
      );
      setIsOpen((prevValue) => !prevValue);
    }
  };
  return (
    <>
      <section className="header__hamburgerMenu" onClick={handleClick}>
        <section className="header__hamburgerMenu__line"></section>
        <section className="header__hamburgerMenu__line">
          <section className="header__hamburgerMenu__line__inside"></section>
        </section>
        <section className="header__hamburgerMenu__line"></section>
      </section>
      <aside id="mobileMenu">
        <nav className="mobileMenu__nav">
          <button className="mobileMenu__nav__btn" onClick={handleClick}>
            X
          </button>
          <ul className="mobileMenu__nav__list">
            <li className="mobileMenu__nav__list__element">
              <a href="...." className="mobileMenu__nav__link">
                O NAS
              </a>
            </li>
            <li className="mobileMenu__nav__list__element">
              <a href="...." className="mobileMenu__nav__link">
                KONTAKT
              </a>
            </li>
            <li className="mobileMenu__nav__list__element">
              <a href="...." className="mobileMenu__nav__link">
                KARIERA
              </a>
            </li>
            <li className="mobileMenu__nav__list__element">
              <a href="...." className="mobileMenu__nav__link">
                DLA MEDIÓW
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Menu;
