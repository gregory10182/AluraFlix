import Boton from "../Button/Boton";
import "./Banner.css";

function Banner() {
  return (
    <section className="banner">
      <h1 className="smallScreenTitle">Challenge React</h1>
      <Boton text={"Ver"} type={"ver"} />

      <div className="bigScreenData">
        <div className="left">
          <div className="courseName">Front End</div>
          <h1 className="videoTitle">Challenge React</h1>
          <p className="videoDesc">
            Este challenge es una forma de aprendizaje. Es un mecanismo donde
            podrás comprometerte en la resolución de un problema para poder
            aplicar todos los conocimientos adquiridos en la formación React.
          </p>
        </div>
        <img className="videoImage" src="/video Banner.jpeg" alt="" />
      </div>
    </section>
  );
}

export default Banner;
