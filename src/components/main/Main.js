import HugeBoxSlider from "../hugeBoxSlider/hugeBoxSlider";
import SmallSlider from "../smallSlider/SmallSlider";

import "./main.css";
import PacketInfoBox from "./packetInfoBox/PacketInfoBox";
import ThreeBox from "./threeBox/ThreeBox";
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
        <ThreeBox />
      </section>
    </main>
  );
};

export default Main;
