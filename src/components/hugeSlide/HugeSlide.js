import { SplideSlide } from "@splidejs/react-splide";
import HugeSlideIcon from "../hugeSlideIcon.js/HugeSlideIcon";

const HugeSlide = ({ img, icons }) => {
  const iconsDisplay = icons.map((icon) => (
    <section
      key={icon.id}
      className="main__contentBox__hugeBoxSlider__slide__bottom__iconBox__icoContainer"
    >
      <HugeSlideIcon src={icon.src} />
      {icons.indexOf(icon) < icons.length - 1 && <span>+</span>}
    </section>
  ));
  return (
    <SplideSlide>
      <section
        className="main__contentBox__hugeBoxSlider__slide"
        style={{ backgroundImage: `url(${img})` }}
      >
        <h1 className="main__contentBox__hugeBoxSlider__slide__header1">
          ZYSKAJ WIĘCEJ
        </h1>
        <section className="main__contentBox__hugeBoxSlider__slide__bottom">
          <section className="main__contentBox__hugeBoxSlider__slide__bottom__iconBox">
            {iconsDisplay.length > 0 && iconsDisplay}
          </section>
          <h1 className="main__contentBox__hugeBoxSlider__slide__bottom__header1">
            KUP INTERNET,
          </h1>
          <section className="main__contentBox__hugeBoxSlider__slide__bottom__halfText">
            <h6 className="main__contentBox__hugeBoxSlider__slide__bottom__halfText__paragraph">
              A{" "}
              <span className="main__contentBox__hugeBoxSlider__slide__bottom__halfText__paragraph__span">
                HBO
                <span className="main__contentBox__hugeBoxSlider__slide__bottom__halfText__paragraph__span--smallText">
                  GO
                </span>
              </span>
              <p className="main__contentBox__hugeBoxSlider__slide__bottom__halfText__paragraph--bigger">
                DOSTANIESZ ZA
              </p>
            </h6>
            <h1 className="main__contentBox__hugeBoxSlider__slide__bottom__halfText__priceHeader">
              1
              <span className="main__contentBox__hugeBoxSlider__slide__bottom__halfText__priceHeader__currency">
                zł
              </span>
            </h1>
          </section>
        </section>
      </section>
    </SplideSlide>
  );
};

export default HugeSlide;
