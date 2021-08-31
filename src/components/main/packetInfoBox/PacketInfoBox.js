import { useState } from "react";
import "./packetInfoBox.css";
import phone from "../../../sources/icons/phone_offert.svg";
import mouse from "../../../sources/icons/mouse__offert.svg";
import mobile from "../../../sources/icons/mobile.svg";
import tv from "../../../sources/icons/TV.svg";
import IconBox from "./iconBox/IconBox";

const PacketInfoBox = () => {
  const [iconBoxesData, setIconBoxData] = useState([
    { id: 0, icon: tv, title: "ULUBIONE KANAŁY TV" },
    { id: 1, icon: mouse, title: "PRĘDKOŚĆ INTERNETU" },
    { id: 2, icon: phone, title: "ILOŚĆ MINUT NA ROZMOWY" },
    { id: 3, icon: mobile, title: "INTERNET MOBILNY" },
  ]);

  const iconBox = iconBoxesData.map((iconBoxData) => (
    <IconBox
      key={iconBoxData.id}
      icon={iconBoxData.icon}
      title={iconBoxData.title}
    />
  ));
  return (
    <section className="main__contentBox__packetBox">
      <section className="main__contentBox__packetBox__top">
        <h1 className="main__contentBox__packetBox__title">
          STWÓRZ SWÓJ WŁASNY PAKIET
        </h1>
        <p className="main__contentBox__packetBox__offert">
          TELEWIZJA - INTERNET - TELEFON
        </p>
      </section>
      <section className="main__contentBox__packetBox__iconBox">
        {iconBox.length > 0 && iconBox}
      </section>
      <section className="main__contentBox__packetBox__bottom">
        <button className="main__contentBox__packetBox__btn">
          STWÓRZ PAKIET
        </button>
        <p className="main__contentBox__packetBox__other">
          lub wybierz pakiet, przygotowany przez nas
        </p>
      </section>
    </section>
  );
};

export default PacketInfoBox;
