import Menu from "../menu/Menu";
import "./header.css";
import phone from "../../sources/icons/phone.svg";
import user from "../../sources/icons/user.svg";
import search from "../../sources/icons/search.svg";

const Header = () => {
  return (
    <header className="header">
      <Menu />
      <section className="header__right">
        <span className="header__right__text">CENTRUM OBSŁUGI KLIENTA</span>
        <a href="tel:800 080 800" className="header__right__link">
          <img
            src={phone}
            alt="phone icon"
            className="header__right__link__image"
          ></img>{" "}
          800 090 800
        </a>
        <span className="header__right__text">
          <img
            src={search}
            alt="phone icon"
            className="header__right__link__image"
          ></img>{" "}
          800 090 800
        </span>
        <span className="header__right__text">
          <img
            src={user}
            alt="phone icon"
            className="header__right__link__image"
          ></img>{" "}
          800 090 800
        </span>
      </section>
    </header>
  );
};

export default Header;
