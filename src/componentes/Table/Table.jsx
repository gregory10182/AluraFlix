import apiCategories from "../../services/categoryService";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

const OutlineTable = styled.div`
  display: none;

  @media only screen and (min-width: 1024px) {
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    width: 95%;
    border: 0.25rem solid var(--color-primary-medium);
  }
`;

const StyledTable = styled.table`
  width: 100%;
  padding: 3rem;
  color: var(--color-gray-light);
  font-family: "Roboto", sans-serif;
`;

const TR = styled.tr`
  border-bottom: 0.25rem solid var(--color-black-dark);

  &:last-child {
    border-bottom: none;
  }
`;

const TH = styled.th`
  border-left: 0.25rem solid var(--color-primary-medium);
  border-right: 0.25rem solid var(--color-primary-medium);
  border-bottom: 0.25rem solid var(--color-primary-medium);
  padding: 0.62rem;
  font-size: 1.7rem;
  font-weight: 400;

  &:first-child {
    border-left: none;
  }

  &:last-child {
    border-right: none;
  }

  @media only screen and (min-width: 1440px) {
    font-size: 2.1875rem;
  }
`;

const TD = styled.td`
  border-right: 0.25rem solid var(--color-black-dark);
  padding: 0.62rem;
  font-size: 1.3rem;
  font-weight: 300;

  &:first-child {
    border-left: none;
  }

  &:last-child {
    border-right: none;
  }

  @media only screen and (min-width: 1440px) {
    font-size: 1.6875rem;
  }
`;

const TableButtons = styled.button`
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 300;
  background-color: transparent;
  outline: none;
  border: none;
  color: var(--color-gray-light);

  @media only screen and (min-width: 1440px) {
    font-size: 1.6875rem;
  }
`;

function Table() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    apiCategories.getAll().then((res) => {
      setCategories(res);
    });
  }, []);

  useEffect(() => {
    console.log(categories);
  }, [categories]);

  return (
    <OutlineTable>
      <StyledTable>
        <thead>
          <TR>
            <TH>Nombre</TH>
            <TH>Descripción</TH>
            <TH>Editar</TH>
            <TH>Remover</TH>
          </TR>
        </thead>
        <tbody>
          {categories.length > 0 &&
            categories.map((category, i) => (
              <TR key={i}>
                <TD>{category.nombre}</TD>
                <TD>{category.desc}</TD>
                <TD>
                  <TableButtons onClick={() => console.log(category.id)}>
                    Editar
                  </TableButtons>
                </TD>
                <TD>
                  <TableButtons onClick={() => console.log(category.id)}>
                    Remover
                  </TableButtons>
                </TD>
              </TR>
            ))}
        </tbody>
      </StyledTable>
    </OutlineTable>
  );
}

export default Table;
