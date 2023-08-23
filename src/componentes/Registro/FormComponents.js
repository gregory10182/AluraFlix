import { styled } from "styled-components";

const FormContainer = styled.div`
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 2rem;
  padding: 1.25rem 1rem;

  @media only screen and (min-width: 768px) {
    justify-content: space-between;
  }

  @media only screen and (min-width: 1024px) {
    padding: 4rem 2rem;
  }
`;

const FormTitle = styled.h2`
  width: 100%;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 2.1875rem;
  font-weight: 400;
  color: var(--color-gray-light);

  @media only screen and (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 3rem;
  }

  @media only screen and (min-width: 1440px) {
    font-size: 3.5rem;
  }
`;

const Form = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 2rem;

  @media only screen and (min-width: 1024px) {
    row-gap: 3rem;
  }

  @media only screen and (min-width: 1440px) {
    row-gap: 4rem;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  column-gap: 1.1rem;
`;

export { FormContainer, FormTitle, Form, ButtonsContainer };
