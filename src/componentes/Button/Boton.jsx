import "./Boton.css";

function Boton({ text, type }) {
  const types = ["ver", "guardar", "limpiar", "nuevaCategoria", "nuevoVideo"];

  return (
    <>
      <button className={`boton ${types.indexOf(type) !== -1 ? type : ""}`}>
        {text}
      </button>
    </>
  );
}

export default Boton;
