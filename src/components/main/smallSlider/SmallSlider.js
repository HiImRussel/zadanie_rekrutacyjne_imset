import { Splide } from "@splidejs/react-splide";
import "./smallSlider.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { useState } from "react";
import SmallSlide from "./smallSlide/smallSlide";
import hero1 from "../../../sources/imgs/hero2.jpg";
import hero2 from "../../../sources/imgs/batman.jpg";

const SmallSlider = () => {
  const [slidesData, setSlidesData] = useState([
    {
      id: 0,
      title: "Kapitan Ameryka: Zimowy żołnierz",
      tags: [
        { id: 0, tag: "NOWŚĆ" },
        { id: 1, tag: "AKCJA" },
      ],
      price: "14.00 zł",
      views: 125,
      bgImg: hero1,
    },
    {
      id: 1,
      title: "Kapitan Ameryka: Zimowy żołnierz",
      tags: [
        { id: 0, tag: "NOWŚĆ" },
        { id: 1, tag: "AKCJA" },
      ],
      price: "14.00 zł",
      views: 125,
      bgImg: hero2,
    },
  ]);
  const slides = slidesData.map((slideData) => (
    <SmallSlide
      key={slideData.id}
      title={slideData.title}
      tags={slideData.tags}
      price={slideData.price}
      views={slideData.views}
      img={slideData.bgImg}
    />
  ));
  return (
    <section className="main__contentBox__smallSlider">
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          interval: 10000,
          width: "20vw",
          height: "40vh",
          pagination: false,
          arrows: true,
        }}
      >
        {slides.length > 0 && slides}
      </Splide>
    </section>
  );
};

export default SmallSlider;
