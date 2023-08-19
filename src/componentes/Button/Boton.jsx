import "./Boton.css";

function Boton({ text, type, onClick, activo = true }) {
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
        disabled={!activo}
      >
        {text}
      </button>
    </>
  );
}

export default Boton;
