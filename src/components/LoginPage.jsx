import { useContext } from 'react'
import { PokeContext } from '../context/PokeContext'

export const LoginPage = () => {

    const { login, logged } = useContext(PokeContext);


    return (
        <div className="login-page animate__animated animate__heartBeat">
            <h1>Hey!! come and visit my page</h1>
            <p>This is the biggest pokemon adventure </p>
            <button onClick={login}>Let's do it</button>
        </div>

    )
}
