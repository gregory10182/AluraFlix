import Encabezado from "./componentes/Encabezado/Encabezado";
import Principal from "./pages/Principal";
import Video from "./pages/Video";
import NuevoVideo from "./pages/NuevoVideo";
import NuevaCategoria from "./pages/NuevaCategoria";
import { Routes, Route, useLocation } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import { tknContext } from "./contexts/tknContext";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import apiCategories from "./services/categoryService";
import apiVideos from "./services/videoService";

function App() {
  const [tkn, setTkn] = useState(null);

  const page = useLocation();

  useEffect(() => {
    const tkn = localStorage.getItem("tkn");

    if (tkn) {
      let currentDate = new Date();
      let decodedTkn = jwtDecode(tkn);
      if (decodedTkn.exp * 1000 < currentDate.getTime()) {
        setTkn(null);
        localStorage.removeItem("tkn");
        apiCategories.setTkn("");
        apiVideos.setTkn("");
        setTimeout(() => {
          location.reload();
        }, 1000);
      } else {
        setTkn(tkn);
        apiCategories.setTkn(tkn);
        apiVideos.setTkn(tkn);
      }
    }
  }, [page]);

  return (
    <>
      <GlobalStyle />
      <tknContext.Provider value={{ tkn, setTkn }}>
        <Encabezado />
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/nuevoVid" element={<NuevoVideo />} />
          <Route path="/nuevaCat" element={<NuevaCategoria />} />
          <Route path="/video/:id/:color" element={<Video />} />
        </Routes>
      </tknContext.Provider>
    </>
  );
}

export default App;
