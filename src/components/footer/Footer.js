import "./footer.css";
import tablet from "../../sources/icons/tablet.svg";
import phone from "../../sources/icons/phone.svg";
import smartPhone from "../../sources/icons/cell-phone.svg";
import fb from "../../sources/icons/facebook.svg";
import tw from "../../sources/icons/twitter.svg";
import yt from "../../sources/icons/youtube-logotype.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__left">
        <section className="footer__left__top">
          <section className="footer__left__top__left">
            <p className="footer__uppText">APLIKACJA VECTRA</p>
            <section className="footer__app">
              <img src={tablet} alt="tablet icon" className="footer__bigIcon" />
              <h3 className="footer__bigHeader">
                <span className="footer__smallheaderTitle">Pobierz</span> <br />
                APLIKACJĘ
              </h3>
            </section>
          </section>
          <section className="footer__left__top__right">
            <p className="footer__uppText footer__uppText--right">
              INFOLINIA SPRZEDAŻOWA
            </p>
            <p className="footer__callOr">ZADZWOŃ LUB WYŚLIJ SMS</p>
            <section className="footer__phoneSection">
              <img src={phone} alt="phone icon" className="footer__smallIcon" />
              <img
                src={smartPhone}
                alt="phone icon"
                className="footer__smallIcon"
              />
              <a href="tel:601601601" className="footer__phoneNumber">
                601 601 601
              </a>
            </section>
            <p className="footer__pay">(wg taryfy operatora)</p>
          </section>
        </section>
        <section className="footer__left__bottom">
          <nav className="footer__nav">
            <ul className="footer__list">
              <li className="footer__list__element">
                <a href=".." className="footer__navLink">
                  O NAS
                </a>
              </li>
              <li className="footer__list__element">
                <a href=".." className="footer__navLink">
                  KONTAKT
                </a>
              </li>
              <li className="footer__list__element">
                <a href=".." className="footer__navLink">
                  KARIERA
                </a>
              </li>
              <li className="footer__list__element">
                <a href=".." className="footer__navLink">
                  DLA MEDIÓW
                </a>
              </li>
            </ul>
          </nav>
          <section className="footer__socials">
            <img
              src={fb}
              alt="social icons"
              className="footer__socials__icon"
            />
            <img
              src={tw}
              alt="social icons"
              className="footer__socials__icon"
            />
            <img
              src={yt}
              alt="social icons"
              className="footer__socials__icon"
            />
          </section>
        </section>
      </section>
      <section className="footer__right">
        <p className="footer__uppText footer__uppText--right">
          CENTRUM OBSŁUGI KLIENTA
        </p>
        <p className="footer__callOr">ZADZWOŃ</p>
        <section className="footer__phoneSection">
          <img src={phone} alt="phone icons" className="footer__smallIcon" />
          <a href="tel:800080800" className="footer__phoneNumber">
            800 080 800
          </a>
        </section>
        <p className="footer__uppText footer__uppText--padding">
          Z TELEFONU KOMURKOWEGO
        </p>
        <a
          href="tel:585006500"
          className="footer__phoneNumber footer__phoneNumber--smaller"
        >
          58 500 65 00
        </a>
        <p className="footer__pay">(wg taryfy operatora)</p>
      </section>
    </footer>
  );
};

export default Footer;
