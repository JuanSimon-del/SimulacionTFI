import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./SideBar";
import ResumenGeneral from "./ResumenGeneral";
import ResumenCampañas from "./ResumenCampañas";
import Footer from "./Footer";

function Informe() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="d-flex informe-container">
        <SideBar></SideBar>
        <div className="flex-grow-1 d-flex flex-column informe-content">
          <main className="flex-grow-1 p-4 informe-main">
            <ResumenGeneral></ResumenGeneral>
            <ResumenCampañas></ResumenCampañas>
          </main>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default Informe;
