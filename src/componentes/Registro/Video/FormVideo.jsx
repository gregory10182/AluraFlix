import Input from "../../Input/Input";
import Boton from "../../Button/Boton";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../../../data/db.json";
import { v4 as uuidv4 } from "uuid";
import apiVideos from "../../../services/videoService";
import {
  FormContainer,
  FormTitle,
  Form,
  ButtonsContainer,
} from "../FormComponents.js";

function FormVideo() {
  const [titulo, setTitulo] = useState("");
  const [linkVideo, setlinkVideo] = useState("");
  const [linkImgVideo, setlinkImgVideo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [usuario, setUsuario] = useState("");
  const [activo, setActivo] = useState(false);

  const navigate = useNavigate();

  const guardar = () => {
    const videoData = {
      id: uuidv4(),
      nombre: titulo,
      URL: linkVideo,
      imgUrl: linkImgVideo,
      categoria,
      desc: descripcion,
      usuario,
    };

    apiVideos
      .createVideo(videoData)
      .then((response) => {
        if (response.status === 201) {
          navigate("/", { replace: true });
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (
      titulo === "" ||
      linkVideo === "" ||
      linkImgVideo === "" ||
      categoria === "" ||
      descripcion === "" ||
      usuario === ""
    ) {
      setActivo(false);
    } else {
      setActivo(true);
    }
  }, [titulo, linkVideo, linkImgVideo, categoria, descripcion, usuario]);

  const limpiar = () => {
    setTitulo("");
    setlinkVideo("");
    setlinkImgVideo("");
    setCategoria("");
    setDescripcion("");
    setUsuario("");
  };

  return (
    <FormContainer>
      <FormTitle>Nuevo Video</FormTitle>
      <Form>
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
      </Form>
      <ButtonsContainer>
        <Boton
          type={"guardar"}
          text={"Guardar"}
          onClick={guardar}
          activo={activo}
        />
        <Boton type={"limpiar"} text={"Limpiar"} onClick={limpiar} />
      </ButtonsContainer>

      <Link to={"/nuevaCat"}>
        <Boton type={"nuevaCategoria"} text={"Nueva Categoria"} />
      </Link>
    </FormContainer>
  );
}

export default FormVideo;
