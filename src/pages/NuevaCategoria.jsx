import FormCategoria from "../componentes/Registro/Categoria/FormCategoria";
import Table from "../componentes/Table/Table";
import Footer from "../componentes/Footer/Footer";
import { styled } from "styled-components";
import { useState } from "react";

const NuevaCat = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function NuevaCategoria() {
  const [editMode, setEditMode] = useState(false);
  const [categoryData, setCategoryData] = useState({});

  const editModeFunc = (categoryData) => {
    setEditMode(true);
    setCategoryData(categoryData);
  };

  return (
    <NuevaCat>
      <FormCategoria editMode={editMode} categoryData={categoryData} />
      <Table editFunc={editModeFunc} />
      <Footer />
    </NuevaCat>
  );
}

export default NuevaCategoria;
