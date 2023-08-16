import Encabezado from "./componentes/Encabezado/Encabezado";
import Principal from "./pages/principal";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Encabezado />
      <Routes>
        <Route path="/" element={<Principal />} />
      </Routes>
    </>
  );
}

export default App;
