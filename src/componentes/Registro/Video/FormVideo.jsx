import "./FormVideo.css";
import Input from "../../Input/Input";
import Boton from "../../Button/Boton";
import { useState } from "react";
import data from "../../../data/db.json";

function FormVideo() {
  const [titulo, setTitulo] = useState("");
  const [linkVideo, setlinkVideo] = useState("");
  const [linkImgVideo, setlinkImgVideo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [usuario, setUsuario] = useState("");

  const guardar = () => {
    console.log("hola");
  };

  const limpiar = () => {
    setTitulo("");
    setlinkVideo("");
    setlinkImgVideo("");
    setCategoria("");
    setDescripcion("");
    setUsuario("");
  };
  return (
    <div className="formContainer">
      <h2 className="formTitle">Nuevo Video</h2>
      <form className="formVideo">
        <Input
          type={"text"}
          placeholder={"Titulo"}
          data={titulo}
          dataOutput={setTitulo}
        />
        <Input
          type={"url"}
          placeholder={"Link del video"}
          data={linkVideo}
          dataOutput={setlinkVideo}
        />
        <Input
          type={"url"}
          data={linkImgVideo}
          placeholder={"Link de la imagen del video"}
          dataOutput={setlinkImgVideo}
        />
        <Input
          type={"select"}
          data={categoria}
          placeholder={"Escoja una categoria"}
          dataOutput={setCategoria}
          options={data.Categorias.map((Categoria) => {
            return Categoria.nombre;
          })}
        />
        <Input
          type={"textArea"}
          data={descripcion}
          placeholder={"Descripción"}
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
      <Boton type={"nuevaCategoria"} text={"Nueva Categoria"} />
    </div>
  );
}

export default FormVideo;
