import HugeBoxSlider from "../hugeBoxSlider/hugeBoxSlider";
import SmallSlider from "../smallSlider/SmallSlider";

import "./main.css";

const Main = () => {
  return (
    <main className="main">
      <section className="main__contentBox">
        <HugeBoxSlider />
        <SmallSlider />
      </section>
      <section className="main__contentBox">
        <section className="main__contentBox__hugeBox"></section>
        <section className="main__contentBox__slider"></section>
      </section>
      <section className="main__contentBox">
        <section className="main__contentBox__box"></section>
        <section className="main__contentBox__box"></section>
      </section>
    </main>
  );
};

export default Main;
