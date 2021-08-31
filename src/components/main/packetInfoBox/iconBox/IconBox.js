import "./iconBox.css";

const IconBox = ({ icon, title }) => {
  return (
    <section className="main__contentBox__packetBox__iconBox__box">
      <img
        src={icon}
        alt="siema"
        className="main__contentBox__packetBox__iconBox__icon"
      />
      <p className="main__contentBox__packetBox__iconBox__choose">Wybierz</p>
      <h2 className="main__contentBox__packetBox__iconBox__title">{title}</h2>
    </section>
  );
};
export default IconBox;
