import { styled } from "styled-components";

const Btn = styled.button`
  outline: none;
  border: none;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
`;

const BtnVer = styled(Btn)`
  width: 6.25rem;
  height: 1.74rem;
  background-color: var(--color-gray-light);
  color: var(--color-black-dark);
  border-radius: 0.3rem;

  @media only screen and (min-width: 1440px) {
    display: none;
  }
`;

const BtnGuardar = styled(Btn)`
  width: 8.75rem;
  height: 2.85rem;
  font-size: 1.2rem;
  font-weight: 500;
  background-color: var(--color-primary-medium);
  color: var(--color-gray-light);
  border-radius: 0.4rem;
`;

const BtnLimpiar = styled(Btn)`
  width: 8.75rem;
  height: 2.85rem;
  font-size: 1.2rem;
  font-weight: 500;
  background-color: var(--color-black-lighter);
  color: var(--color-black-dark);
  border-radius: 0.4rem;
`;

const BtnNuevaCategoria = styled(Btn)`
  width: 15.875rem;
  height: 3.375rem;
  font-size: 1.25rem;
  font-weight: 500;
  background-color: var(--color-primary-medium);
  color: var(--color-gray-light);
  border-radius: 0.3rem;
`;

const BtnNuevoVideo = styled(Btn)`
  margin-top: 5rem;
  width: 100vw;
  height: 3.375rem;
  font-size: 1.3125rem;
  font-weight: 500;
  background-color: var(--color-primary-medium);
  color: var(--color-gray-light);

  @media only screen and (min-width: 1440px) {
    display: none;
  }
`;

const BtnNuevoVideoHeader = styled(Btn)`
  display: none;

  @media only screen and (min-width: 1440px) {
    display: block;
    width: 11.25781rem;
    height: 3.375rem;
    font-size: 1.2rem;
    font-weight: 500;
    background-color: var(--color-black-dark);
    color: var(--color-gray-light);
    border-radius: 0.3rem;
    border: 0.1rem solid var(--color-gray-light);
  }
`;

function Boton({ text, type, onClick, activo = true }) {
  const types = {
    ver: (
      <BtnVer onClick={onClick || null} disabled={!activo}>
        {text}
      </BtnVer>
    ),
    guardar: (
      <BtnGuardar onClick={onClick || null} disabled={!activo}>
        {text}
      </BtnGuardar>
    ),
    limpiar: (
      <BtnLimpiar onClick={onClick || null} disabled={!activo}>
        {text}
      </BtnLimpiar>
    ),
    nuevaCategoria: (
      <BtnNuevaCategoria onClick={onClick || null} disabled={!activo}>
        {text}
      </BtnNuevaCategoria>
    ),
    nuevoVideo: (
      <BtnNuevoVideo onClick={onClick || null} disabled={!activo}>
        {text}
      </BtnNuevoVideo>
    ),
    nuevoVideoHeader: (
      <BtnNuevoVideoHeader onClick={onClick || null} disabled={!activo}>
        {text}
      </BtnNuevoVideoHeader>
    ),
  };

  return types[type];
}

export default Boton;
