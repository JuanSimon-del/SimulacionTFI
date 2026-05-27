import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ResumenGeneral from './ResumenGeneral'

function Informe() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ResumenGeneral></ResumenGeneral>
    </>
  )
}

export default Informe
