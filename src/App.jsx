import Encabezado from "./componentes/Encabezado/Encabezado";
import Principal from "./pages/principal";
import NuevoVideo from "./pages/NuevoVideo";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Encabezado />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/nuevoVid" element={<NuevoVideo />} />
      </Routes>
    </>
  );
}

export default App;
