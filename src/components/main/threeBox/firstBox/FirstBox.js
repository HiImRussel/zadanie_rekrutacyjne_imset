import "./firstBox.css";

const FirstBox = () => {
  return (
    <section className="main__contentBox__threeBox__box main__contentBox__threeBox__firstBox">
      <h1 className="main__contentBox__threeBox__firstBox__title">
        PAKIET 20GB LTE
      </h1>
      <p className="main__contentBox__threeBox__firstBox__promo">PROMOCJA</p>
      <p className="main__contentBox__threeBox__firstBox__text">
        Dla tych, którzy nie wyobrażają sobie życia bez internetu:
      </p>
      <ul className="main__contentBox__threeBox__firstBox__list">
        <li className="main__contentBox__threeBox__firstBox__listElement">
          oglądaj filmy umieszczone w sieci
        </li>
        <li className="main__contentBox__threeBox__firstBox__listElement">
          ściągaj duże pliki
        </li>
        <li className="main__contentBox__threeBox__firstBox__listElement">
          skorzystaj z poczty, komunikatora
        </li>
        <li className="main__contentBox__threeBox__firstBox__listElement">
          surfuj swobodnie
        </li>
      </ul>
      <section className="main__contentBox__threeBox__firstBox__bottom">
        <h2 className="main__contentBox__threeBox__firstBox__priceHeading">
          SWOBODA <br />I MOBILNOŚĆ ZA
        </h2>
        <p className="main__contentBox__threeBox__firstBox__price">50zł</p>
      </section>
    </section>
  );
};

export default FirstBox;
