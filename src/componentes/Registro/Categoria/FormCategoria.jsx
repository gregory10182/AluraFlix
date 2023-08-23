import Input from "../../Input/Input";
import Boton from "../../Button/Boton";
import { useState, useEffect } from "react";
import apiCategories from "../../../services/categoryService";
import { v4 as uuidv4 } from "uuid";
import {
  FormContainer,
  FormTitle,
  Form,
  ButtonsContainer,
} from "../FormComponents.js";

function FormCategoria() {
  const [titulo, setTitulo] = useState("");
  const [color, setColor] = useState("#000000");
  const [descripcion, setDescripcion] = useState("");
  const [usuario, setUsuario] = useState("");
  const [activo, setActivo] = useState(false);

  useEffect(() => {
    if (
      titulo === "" ||
      color === "#000000" ||
      descripcion === "" ||
      usuario === ""
    ) {
      setActivo(false);
    } else {
      setActivo(true);
    }
  }, [titulo, color, descripcion, usuario]);

  const guardar = () => {
    const categoryData = {
      id: uuidv4(),
      nombre: titulo,
      color,
      desc: descripcion,
      usuario,
    };

    apiCategories
      .createCategory(categoryData)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
    console.log(categoryData);
  };

  const limpiar = () => {
    setTitulo("");
    setColor("#000000");
    setDescripcion("");
    setUsuario("");
  };

  return (
    <FormContainer>
      <FormTitle>Nueva Categoria</FormTitle>
      <Form>
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
    </FormContainer>
  );
}

export default FormCategoria;
