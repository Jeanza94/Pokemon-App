import { useContext, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { PokeContext } from '../context/PokeContext';
import { pokeReducer } from '../helpers/pokeReducer';

export const NavBar = () => {

    const { handleLogout } = useContext(PokeContext)

    return (
        <nav className="navbar-nav">
            <div>
                <h1>Pokemon Go</h1>
                <Link to="/pokemon">Pokemons</Link>
                <Link to="/search">Search</Link>
            </div>
            <div>
                <p>Usuario Activo</p>
                <button onClick={handleLogout}>Logout</button>
            </div>

        </nav>
    )
}
