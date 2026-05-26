import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import BarraDeNavegacion from './components/BarraDeNavegacion'
import "./styles.css"
import Simulacion from './components/Simulacion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BarraDeNavegacion></BarraDeNavegacion>
    <Simulacion></Simulacion>
    </>
  )
}

export default App
