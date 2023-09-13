import Encabezado from "./componentes/Encabezado/Encabezado";
import Principal from "./pages/Principal";
import Video from "./pages/Video";
import NuevoVideo from "./pages/NuevoVideo";
import NuevaCategoria from "./pages/NuevaCategoria";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Encabezado />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/nuevoVid" element={<NuevoVideo />} />
        <Route path="/nuevaCat" element={<NuevaCategoria />} />
        <Route path="/video/:id/:color" element={<Video />} />
      </Routes>
    </>
  );
}

export default App;
