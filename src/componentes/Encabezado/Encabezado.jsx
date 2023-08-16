import "./Encabezado.css";
import Boton from "../Button/Boton";

function Encabezado() {
  return (
    <section className="encabezado">
      <img src="src/assets/Logo.png" alt="" />
      <Boton text={"Nuevo Video"} type={"nuevoVideoHeader"} />
    </section>
  );
}

export default Encabezado;
