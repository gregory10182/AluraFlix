import Banner from "../componentes/Banner/Banner";
import Carrusel from "../componentes/Carrusel/Carrusel";

function Principal() {
  return (
    <section>
      <Banner />
      <Carrusel
        sectionTitle={"Front End"}
        sectionDesc={"Formacion Front End de Alura Latam"}
        sectionColor={"--color-frontend"}
      />
      <Carrusel
        sectionTitle={"Back End"}
        sectionDesc={"Formacion Back End de Alura Latam"}
        sectionColor={"--color-backend"}
      />
    </section>
  );
}

export default Principal;
