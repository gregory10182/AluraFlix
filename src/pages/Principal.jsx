import Banner from "../componentes/Banner/Banner";
import Carrusel from "../componentes/Carrusel/Carrusel";
import Boton from "../componentes/Button/Boton";
import { Link } from "react-router-dom";
import apiCategories from "../services/categoryService";
import { useEffect, useState } from "react";

function Principal() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    apiCategories.getAll().then((res) => {
      setCategories(res);
    });
  }, []);

  return (
    <section className="principal">
      <Banner categories={categories} />
      {categories.map((categoria) => {
        return (
          <Carrusel
            key={categoria.nombre}
            sectionTitle={categoria.nombre}
            sectionDesc={categoria.desc}
            sectionColor={categoria.color}
          />
        );
      })}
      <Link to={"/nuevoVid"}>
        <Boton text="Nuevo video" type="nuevoVideo" />
      </Link>
    </section>
  );
}

export default Principal;
