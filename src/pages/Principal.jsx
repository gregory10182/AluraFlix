import Banner from "../componentes/Banner/Banner";
import Carrusel from "../componentes/Carrusel/Carrusel";
import Boton from "../componentes/Button/Boton";
import { Link } from "react-router-dom";
import datos from "../data/db.json";

function Principal() {
  return (
    <section className="principal">
      <Banner />
      {datos.Categorias.map((categoria) => {
        let categoryVideos = datos.Videos.filter(
          (video) => video.categoria === categoria.nombre
        );

        if (categoryVideos.length > 0) {
          return (
            <Carrusel
              key={categoria.nombre}
              sectionTitle={categoria.nombre}
              sectionDesc={categoria.desc}
              sectionColor={categoria.color}
            />
          );
        }
      })}
      <Link to={"/nuevoVid"}>
        <Boton text="Nuevo video" type="nuevoVideo" />
      </Link>
    </section>
  );
}

export default Principal;
