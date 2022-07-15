import React from 'react'
import { useNavigate } from 'react-router-dom';

function ScreenOne() {
    const user = localStorage.getItem('user');
    const password = localStorage.getItem('password');

    const navigate = useNavigate();
    const handledGoTwo = () => {
        navigate('two')
    } 

  return (
    <div>
        <h1>{user}</h1>
        <h1>{password}</h1>
        <button onClick={handledGoTwo}>Go Screen two</button>
    </div>
  )
}

export default ScreenOne