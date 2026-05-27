import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import BarraDeNavegacion from './components/BarraDeNavegacion'
import "./styles.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BarraDeNavegacion></BarraDeNavegacion>
    
    
    </>
  )
}

export default App
