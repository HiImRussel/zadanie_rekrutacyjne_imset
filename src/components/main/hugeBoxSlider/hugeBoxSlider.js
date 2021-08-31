import "./hugeBoxSlider.css";
import { Splide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { useState } from "react";
import bgImg from "../../../sources/imgs/network.jpg";
import HugeSlide from "./hugeSlide/HugeSlide";
import mouse from "../../../sources/icons/mouse.svg";
import gift from "../../../sources/icons/gift.svg";

const HugeBoxSlider = () => {
  const [sliderData, setSliderData] = useState([
    {
      id: 0,
      img: bgImg,
      icons: [
        { id: 0, src: mouse },
        { id: 1, src: gift },
      ],
    },
    {
      id: 1,
      img: bgImg,
      icons: [
        { id: 0, src: mouse },
        { id: 1, src: gift },
      ],
    },
    {
      id: 2,
      img: bgImg,
      icons: [
        { id: 0, src: mouse },
        { id: 1, src: gift },
      ],
    },
  ]);

  const slides = sliderData.map((slideData) => (
    <HugeSlide key={slideData.id} img={slideData.img} icons={slideData.icons} />
  ));
  return (
    <section className="main__contentBox__hugeBoxSlider">
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          interval: 10000,
          width: "40vw",
          height: "45vh",
          gap: "1rem",
          arrows: false,
          breakpoints: {
            1100: {
              width: "95vw",
            },
          },
        }}
      >
        {slides.length > 0 && slides}
      </Splide>
    </section>
  );
};

export default HugeBoxSlider;
