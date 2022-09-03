import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { PokemonRoutes } from "../components/PokemonRoutes";
import { PokeContext } from "./PokeContext";


export const PublicRoute = ({ children }) => {

    const { logged } = useContext(PokeContext);

    return logged ? <PokemonRoutes /> : children
}
