import "./thirdBox.css";
import android from "../../../../sources/icons/android-logo.svg";
import windows from "../../../../sources/icons/windows.svg";
import apple from "../../../../sources/icons/apple.svg";

const ThirdBox = () => {
  return (
    <section className="main__contentBox__threeBox__box main__contentBox__threeBox__thirdBox">
      <h1 className="main__contentBox__threeBox__thirdBox__title">APLIKACJA</h1>
      <p className="main__contentBox__threeBox__thirdBox__text">
        Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor
        sit amet.
      </p>
      <section className="main__contentBox__threeBox__thirdBox__icons">
        <img
          src={android}
          alt="sysem icon"
          className="main__contentBox__threeBox__thirdBox__icon"
        />
        <img
          src={windows}
          alt="sysem icon"
          className="main__contentBox__threeBox__thirdBox__icon"
        />
        <img
          src={apple}
          alt="sysem icon"
          className="main__contentBox__threeBox__thirdBox__icon"
        />
      </section>
    </section>
  );
};

export default ThirdBox;
