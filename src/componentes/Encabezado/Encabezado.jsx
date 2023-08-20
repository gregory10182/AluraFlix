import "./Encabezado.css";
import Boton from "../Button/Boton";
import { Link, useLocation } from "react-router-dom";

function Encabezado() {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <section className="encabezado">
      <Link to={"/"}>
        <img src="/Logo.png" alt="" />
      </Link>

      {location.pathname === "/" && (
        <Link to={"/nuevoVid"}>
          <Boton text={"Nuevo Video"} type={"nuevoVideoHeader"} />
        </Link>
      )}
    </section>
  );
}

export default Encabezado;
