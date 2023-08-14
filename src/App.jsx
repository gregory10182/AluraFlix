// import { useState } from 'react'
// import Boton from "./componentes/Button/Boton";
import Encabezado from "./componentes/Encabezado/Encabezado";
import Principal from "./pages/principal";
import Footer from "./componentes/Footer/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Encabezado />
      <Routes>
        <Route path="/" element={<Principal />} />
      </Routes>
      <Footer />
      {/* <Boton text="Nuevo video" type="nuevoVideo" /> */}
    </>
  );
}

export default App;
