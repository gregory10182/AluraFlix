import FormVideo from "../componentes/Registro/Video/FormVideo";
import Login from "../componentes/Login/Login";
import Footer from "../componentes/Footer/Footer";

function NuevoVideo() {
  return (
    <section className="nuevoVideoPage">
      {localStorage.getItem("tkn") ? <FormVideo /> : <Login />}
      <Footer />
    </section>
  );
}

export default NuevoVideo;
