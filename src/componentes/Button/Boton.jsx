import "./Boton.css";
import { Link } from "react-router-dom";

function Boton({ text, type }) {
  const types = [
    "ver",
    "guardar",
    "limpiar",
    "nuevaCategoria",
    "nuevoVideo",
    "nuevoVideoHeader",
  ];

  return (
    <>
      <Link to={"/nuevoVid"}>
        <button className={`boton ${types.indexOf(type) !== -1 ? type : ""}`}>
          {text}
        </button>
      </Link>
    </>
  );
}

export default Boton;
