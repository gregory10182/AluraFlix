import Banner from "../componentes/Banner/Banner";
import Carrusel from "../componentes/Carrusel/Carrusel";
import Boton from "../componentes/Button/Boton";
import { Link } from "react-router-dom";
import apiCategories from "../services/categoryService";
import { useEffect, useState } from "react";

function Principal() {
  const [categories, setCategories] = useState([]);

  const [bannerData, setbannerData] = useState({
    category: {},
    color: "",
  });

  const [found, setFound] = useState(false);

  const firstCategoryDisplayed = (bannerData) => {
    if (!found) {
      setFound(true);
      setbannerData(bannerData);
    }
  };

  useEffect(() => {
    apiCategories.getAll().then((res) => {
      setCategories(res);
    });
  }, []);

  return (
    <section className="principal">
      <Banner bannerData={bannerData} />
      {categories.map((categoria) => {
        return (
          <Carrusel
            key={categoria.nombre}
            sectionTitle={categoria.nombre}
            sectionDesc={categoria.desc}
            sectionColor={categoria.color}
            setFCategory={firstCategoryDisplayed}
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
