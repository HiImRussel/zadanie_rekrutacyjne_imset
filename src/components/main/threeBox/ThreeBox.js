import FirstBox from "./firstBox/FirstBox";
import SecBox from "./secBox/SecBox";
import ThirdBox from "./thirdBox/thirdBox";
import "./threeBox.css";

const ThreeBox = () => {
  return (
    <section className="main__contentBox__threeBox">
      <FirstBox />
      <SecBox />
      <ThirdBox />
    </section>
  );
};

export default ThreeBox;
