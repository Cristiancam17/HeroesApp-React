import React from 'react'
import { useNavigate } from 'react-router-dom'

function ScreenTwo() {

    const navigate = useNavigate()

    const handledBack = () => {
        navigate(-1);
    }

  return (
    <div>
        <h1>ScreenTwo</h1>
        <button onClick={handledBack}>Atras</button>
    </div>
  )
}

export default ScreenTwo