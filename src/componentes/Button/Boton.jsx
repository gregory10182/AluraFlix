import "./Boton.css";

function Boton({ text, type, onClick }) {
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
      <button
        onClick={onClick || null}
        className={`boton ${types.indexOf(type) !== -1 ? type : ""}`}
      >
        {text}
      </button>
    </>
  );
}

export default Boton;
