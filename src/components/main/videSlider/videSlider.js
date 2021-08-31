import { Splide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import "./videSlider.css";
import users from "../../../sources/icons/customer.svg";
import thumbnail from "../../../sources/imgs/magic.jpg";
import { useState } from "react";
import Slide from "./slide/Slide";

const VideoSlider = () => {
  const [sliderData, setSliderData] = useState([
    {
      id: 0,
      img: thumbnail,
      title: "Anatomia magii",
      channel: "DISCOVERY CHANNEL",
    },
    {
      id: 1,
      img: thumbnail,
      title: "Anatomia magii",
      channel: "DISCOVERY CHANNEL",
    },
    {
      id: 2,
      img: thumbnail,
      title: "Anatomia magii",
      channel: "DISCOVERY CHANNEL",
    },
  ]);

  const slides = sliderData.map((slideData) => (
    <Slide
      key={slideData.id}
      img={slideData.img}
      title={slideData.title}
      channel={slideData.channel}
    />
  ));
  return (
    <section className="main__contentBox__videoSlider">
      <section className="main__contentBox__videoSlider__top">
        <h1 className="main__contentBox__videoSlider__heading">
          TERAZ <br />W TV ONLINE
        </h1>
        <section className="main__contentBox__videoSlider__viewers">
          <p className="main__contentBox__videoSlider__viewersText">
            TERAZ <br />
            OGLĄDA
          </p>
          <h5 className="main__contentBox__videoSlider__number">258</h5>
          <img
            src={users}
            alt="users icon"
            className="main__contentBox__videoSlider__icon"
          />
        </section>
      </section>
      <section className="main__contentBox__videoSlider__slider">
        <Splide
          options={{
            type: "loop",
            autoplay: true,
            interval: 10000,
            width: "40vw",
            height: "15vw",
            gap: "1rem",
            arrows: true,
            pagination: false,
            breakpoints: {
              1360: {
                height: "40vh",
              },
              1100: {
                width: "95vw",
                height: "40vh",
              },
            },
          }}
        >
          {slides.length > 0 && slides}
        </Splide>
      </section>
    </section>
  );
};

export default VideoSlider;
