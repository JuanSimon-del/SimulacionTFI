import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./styles.css"
import BarraDeNavegacion from './components/BarraDeNavegacion'
import Simulacion from './components/Simulacion'
import ResumenGeneral from './components/ResumenGeneral'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BarraDeNavegacion></BarraDeNavegacion>
    {/* <Simulacion></Simulacion> */}
    <ResumenGeneral></ResumenGeneral>
    </>
  )
}

export default App
