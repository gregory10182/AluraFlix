import FormCategoria from "../componentes/Registro/Categoria/FormCategoria";
import Table from "../componentes/Table/Table";
import Login from "../componentes/Login/Login";
import DeleteModal from "../componentes/DeleteModal/DeleteModal";
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
  const [deleteModal, setDeleteModal] = useState(false);
  const [categoryId, setCategoryId] = useState();
  const [categoryName, setCategoryName] = useState("");

  const deleteModalHandler = (change) => {
    setDeleteModal(change);
  };

  const idHandler = (id) => {
    setCategoryId(id);
  };

  const nameHandler = (name) => {
    setCategoryName(name);
  };

  const resetId = () => {
    setCategoryId(null);
  };

  const resetName = () => {
    setCategoryName("");
  };

  const editModeFunc = (categoryData) => {
    setEditMode(true);
    setCategoryData(categoryData);
  };

  return (
    <NuevaCat>
      {localStorage.getItem("tkn") ? (
        <>
          <FormCategoria editMode={editMode} categoryData={categoryData} />
          <Table
            editFunc={editModeFunc}
            deleteModal={deleteModal}
            setDeleteModal={deleteModalHandler}
            setCategoryId={idHandler}
            setCategoryName={nameHandler}
          />
          {deleteModal && (
            <DeleteModal
              id={categoryId}
              name={categoryName}
              deleteModal={deleteModal}
              setDeleteModal={deleteModalHandler}
              resetId={resetId}
              resetName={resetName}
            />
          )}
        </>
      ) : (
        <Login />
      )}
      <Footer />
    </NuevaCat>
  );
}

export default NuevaCategoria;
