import Input from "../../Input/Input";
import Boton from "../../Button/Boton";
import "./FormCategoria.css";
import { useState } from "react";

function FormCategoria() {
  const [titulo, setTitulo] = useState("");
  const [color, setColor] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [usuario, setUsuario] = useState("");

  const guardar = () => {
    console.log("hola");
  };

  const limpiar = () => {
    setTitulo("");
    setColor("#000000");
    setDescripcion("");
    setUsuario("");
  };

  return (
    <div className="formContainer">
      <h2 className="formTitle">Nueva Categoria</h2>
      <form className="form">
        <Input
          type={"text"}
          placeholder={"Titulo"}
          data={titulo}
          dataOutput={setTitulo}
        />
        <Input
          type={"color"}
          placeholder={"color"}
          data={color}
          dataOutput={setColor}
        />
        <Input
          type={"textArea"}
          placeholder={"Descripción"}
          data={descripcion}
          dataOutput={setDescripcion}
        />
        <Input
          type={"text"}
          placeholder={"Usuario"}
          data={usuario}
          dataOutput={setUsuario}
        />
      </form>
      <div className="botones">
        <Boton type={"guardar"} text={"Guardar"} onClick={guardar} />
        <Boton type={"limpiar"} text={"Limpiar"} onClick={limpiar} />
      </div>
    </div>
  );
}

export default FormCategoria;
