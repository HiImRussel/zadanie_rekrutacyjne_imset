import { SplideSlide } from "@splidejs/react-splide";
import "./smallSlide.css";
import users from "../../../../sources/icons/customer.svg";

const SmallSlide = ({ title, tags, price, views, img }) => {
  const displayTags = tags.map((tag) => (
    <p
      key={tags.id}
      className="main__contentBox__smallSlider__slide__bottom__left__tag"
    >
      {tag.tag}
    </p>
  ));
  return (
    <SplideSlide>
      <section
        className="main__contentBox__smallSlider__slide"
        style={{ backgroundImage: `url(${img})` }}
      >
        <section className="main__contentBox__smallSlider__slide__top">
          <h1 className="main__contentBox__smallSlider__slide__top__header">
            VOD
          </h1>
          <p className="main__contentBox__smallSlider__slide__top__paragraph">
            VIDEO NA ŻĄDANIE
          </p>
        </section>
        <section className="main__contentBox__smallSlider__slide__bottom">
          <section className="main__contentBox__smallSlider__slide__bottom__left">
            <h4 className="main__contentBox__smallSlider__slide__bottom__left__header">
              {title}
            </h4>
            {displayTags.length > 0 && displayTags}
            <p className="main__contentBox__smallSlider__slide__bottom__left__price">
              {price}
            </p>
          </section>
          <section className="main__contentBox__smallSlider__slide__bottom__right">
            <p className="main__contentBox__smallSlider__slide__bottom__right__paragraph">
              FILM OBEJRZY
            </p>
            <h4 className="main__contentBox__smallSlider__slide__bottom__right__header">
              {views}
            </h4>
            <img
              src={users}
              alt="users icon"
              className="main__contentBox__smallSlider__slide__bottom__right__icon"
            />
          </section>
        </section>
      </section>
    </SplideSlide>
  );
};

export default SmallSlide;
