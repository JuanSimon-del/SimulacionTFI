import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./styles.css"
import BarraDeNavegacion from './components/BarraDeNavegacion'
import Simulacion from './components/Simulacion'
import ResumenGeneral from './components/ResumenGeneral'
import Informe from './components/Informe';
import SideBar from './components/SideBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BarraDeNavegacion></BarraDeNavegacion>
    {/* <Simulacion></Simulacion> */}
    {/* <Informe></Informe> */}
    <SideBar></SideBar>
    </>
  )
}

export default App
