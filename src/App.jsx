import Encabezado from "./componentes/Encabezado/Encabezado";
import Principal from "./pages/principal";
import NuevoVideo from "./pages/NuevoVideo";
import NuevaCategoria from "./pages/NuevaCategoria";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Encabezado />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/nuevoVid" element={<NuevoVideo />} />
        <Route path="/nuevoVid" element={<NuevoVideo />} />
        <Route path="/nuevaCat" element={<NuevaCategoria />} />
      </Routes>
    </>
  );
}

export default App;
