import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate();

    const handledEnter = () => {
        localStorage.setItem('User', 'Santiago')
        localStorage.setItem('password', 'Sant123')
        navigate('/one',{
            replace: true
        })
    }

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handledEnter}>Enter</button>
        </div>
    )
}

export default Login