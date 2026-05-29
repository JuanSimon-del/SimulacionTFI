import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles.css";
import BarraDeNavegacion from "./components/BarraDeNavegacion";
import Simulacion from "./components/Simulacion";
import ResumenGeneral from "./components/ResumenGeneral";
import Informe from "./components/Informe";
import { Col, Row } from "react-bootstrap";
import SideBar from "./components/SideBar";
import ResumenCampañas from "./components/ResumenCampañas";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BarraDeNavegacion></BarraDeNavegacion>
      {/* <Simulacion></Simulacion> */}
      <div className="d-flex">
        <SideBar></SideBar>
        <main className="flex-grow-1 p-4">
          <ResumenGeneral></ResumenGeneral>
          <ResumenCampañas></ResumenCampañas>
        </main>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
