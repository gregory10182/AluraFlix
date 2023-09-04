import { styled } from "styled-components";
import Boton from "../Button/Boton";
import apiCategories from "../../services/categoryService";

const StyledDeleteModal = styled.div`
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
  position: fixed;
  top: 50%;
  margin-top: -6rem;
  left: 50%;
  margin-left: -15rem;
  width: 30rem;
  height: 12rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: var(--color-black-dark);
  border: 0.2rem solid var(--color-primary-medium);
  border-radius: 0.5rem;
  padding: 1rem;
`;

const QuestionText = styled.p`
  width: 100%;
  font-size: 1.2rem;
  text-align: center;
  color: var(--color-gray-light);
`;

const Buttons = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

function DeleteModal({
  id,
  name,
  deleteModal,
  setDeleteModal,
  resetId,
  resetName,
}) {
  return (
    <StyledDeleteModal>
      <QuestionText>Estas seguro que quieres eliminar {name}?</QuestionText>
      <Buttons>
        <Boton
          text={"Si"}
          type={"guardar"}
          onClick={() => {
            apiCategories.deleteCategory(id).then(() => {
              location.reload();
            });
          }}
        />
        <Boton
          text={"No"}
          type={"limpiar"}
          onClick={() => {
            resetId();
            resetName();
            setDeleteModal(!deleteModal);
          }}
        />
      </Buttons>
    </StyledDeleteModal>
  );
}

export default DeleteModal;
