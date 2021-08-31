import "./secBox.css";
import user from "../../../../sources/imgs/userPic.png";
import arrow from "../../../../sources/icons/right-arrow.svg";
import chat from "../../../../sources/icons/chat.svg";

const SecBox = () => {
  return (
    <section className="main__contentBox__threeBox__box main__contentBox__threeBox__secBox">
      <section className="main__contentBox__threeBox__secBox__top">
        <h1 className="main__contentBox__threeBox__secBox__title">
          NASZ SUPPORT
        </h1>
        <p className="main__contentBox__threeBox__secBox__text">
          PROPOZYCJE NASZEGO TV-MANIAKA <br />
          NA WEEKEND
        </p>
      </section>
      <section className="main__contentBox__threeBox__secBox__userSection">
        <img
          src={user}
          alt="person face"
          className="main__contentBox__threeBox__secBox__userIMG"
        />
        <section className="main__contentBox__threeBox__secBox__description">
          <section className="main__contentBox__threeBox__secBox__description__box">
            <p className="main__contentBox__threeBox__secBox__description__box__text">
              ZOBACZ CO KUBA ZNALAZŁ CIEKAWEGO W TV NA WEEKEND
            </p>
            <img
              src={arrow}
              alt="arrow"
              className="main__contentBox__threeBox__secBox__description__box__icon"
            />
          </section>
          <section className="main__contentBox__threeBox__secBox__description__box">
            <p className="main__contentBox__threeBox__secBox__description__box__text">
              PODYSKUTUJ Z NIM O FILMACH JUŻ W PIĄTEK 15.09.2014
            </p>
            <img
              src={chat}
              alt="chat box"
              className="main__contentBox__threeBox__secBox__description__box__icon"
            />
          </section>
        </section>
      </section>
      <p className="main__contentBox__threeBox__secBox__expert">
        Zostań naszym ekspertem i poprowadź przedweekendowy chat z użytkownikami
      </p>
    </section>
  );
};

export default SecBox;
