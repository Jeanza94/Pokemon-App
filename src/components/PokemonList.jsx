import { Link } from "react-router-dom"


export const PokemonList = ({ pokemon_id, pokemon_name }) => {

    return (
        <li className="pokemon-list-li animate__animated animate__backInUp">
            <h1>{pokemon_name}</h1>
            <img src={`/images/1 (${pokemon_id}).png`} alt={`${pokemon_name}`} />
            <Link to={`/pokemon/${pokemon_id}`}>More about</Link>
        </li>
    )
}
