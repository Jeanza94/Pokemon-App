import { useReducer } from "react";
import { useNavigate, useLocation } from "react-router-dom"
import { pokeReducer } from "../helpers";
import { PokeContext } from "./PokeContext"

const init = () => {

    const logged = JSON.parse(localStorage.getItem('logged'));

    return logged;

}

export const PokeProvider = ({ children }) => {

    const navigate = useNavigate();

    const [logged, dispatch] = useReducer(pokeReducer, [], init)
    const location = useLocation();
    console.log(location);

    const login = () => {
        navigate('/pokemon', {
            replace: true
        })

        dispatch({
            type: '[POKE] login',
            payload: true
        })
        console.log(logged);
        localStorage.setItem('logged', `true`);
    }

    const handleLogout = () => {
        localStorage.removeItem('logged');

        navigate('/login', {
            replace: true
        })

        dispatch({
            type: '[POKE] logout',
            payload: false
        })

    }

    const handleComeBack = () => {
        // navigate('/pokemon');
        window.history.back();
    }

    return (
        <PokeContext.Provider value={{ handleLogout, handleComeBack, login, logged }}>
            {children}
        </PokeContext.Provider>
    )
}
