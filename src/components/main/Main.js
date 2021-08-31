import HugeBoxSlider from "../hugeBoxSlider/hugeBoxSlider";
import SmallSlider from "../smallSlider/SmallSlider";

import "./main.css";
import PacketInfoBox from "./packetInfoBox/PacketInfoBox";
import VideoSlider from "./videSlider/videSlider";

const Main = () => {
  return (
    <main className="main">
      <section className="main__contentBox">
        <HugeBoxSlider />
        <SmallSlider />
      </section>
      <section className="main__contentBox">
        <PacketInfoBox />
        <VideoSlider />
      </section>
      <section className="main__contentBox">
        <section className="main__contentBox__box"></section>
        <section className="main__contentBox__box"></section>
      </section>
    </main>
  );
};

export default Main;
