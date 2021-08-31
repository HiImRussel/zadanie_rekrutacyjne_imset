import { SplideSlide } from "@splidejs/react-splide";
import "./slide.css";

const Slide = ({ img, title, channel }) => {
  return (
    <SplideSlide>
      <section
        className="main__contentBox__videoSlider__slide"
        style={{ backgroundImage: `url(${img})` }}
      >
        <section className="main__contentBox__videoSlider__description">
          <h3 className="main__contentBox__videoSlider__title">{title}</h3>
          <p className="main__contentBox__videoSlider__channel">{channel}</p>
        </section>
      </section>
    </SplideSlide>
  );
};

export default Slide;
