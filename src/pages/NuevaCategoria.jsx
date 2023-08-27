import FormCategoria from "../componentes/Registro/Categoria/FormCategoria";
import Table from "../componentes/Table/Table";
import Footer from "../componentes/Footer/Footer";
import { styled } from "styled-components";

const NuevaCat = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function NuevaCategoria() {
  return (
    <NuevaCat>
      <FormCategoria />
      <Table />
      <Footer />
    </NuevaCat>
  );
}

export default NuevaCategoria;
