import "./Encabezado.css";
import Boton from "../Button/Boton";
import { Link } from "react-router-dom";

function Encabezado() {
  return (
    <section className="encabezado">
      <Link to={"/"}>
        <img src="/Logo.png" alt="" />
      </Link>
      <Boton text={"Nuevo Video"} type={"nuevoVideoHeader"} />
    </section>
  );
}

export default Encabezado;
