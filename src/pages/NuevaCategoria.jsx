import FormCategoria from "../componentes/Registro/Categoria/FormCategoria";
import Table from "../componentes/Table/Table";
import Footer from "../componentes/Footer/Footer";

function NuevaCategoria() {
  return (
    <section className="nuevaCatPage">
      <FormCategoria />
      <Table />
      <Footer />
    </section>
  );
}

export default NuevaCategoria;
