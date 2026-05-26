import { useState } from 'react'
import Navbar from './components/BarraDeNavegacion'
import BarraDeNavegacion from './components/BarraDeNavegacion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BarraDeNavegacion></BarraDeNavegacion>
    </>
  )
}

export default App
