
import { useContext } from "react";
import { PokemonList, NavBar } from ".";
import { PokeContext } from "../context/PokeContext";
import { useMovesTypes } from "../hooks/useMovesTypes";

export const PokemonPage = () => {

    const { types } = useMovesTypes();

    return (
        <div className="pokemon-div">
            <NavBar />
            <ul className="pokemon-ul">
                {
                    types.map((type, i, arr) => {

                        if (type?.pokemon_name === arr[i + 1]?.pokemon_name) {
                            return;
                        }

                        else {
                            return (
                                <PokemonList
                                    key={type.pokemon_id}
                                    {...type}

                                />
                            )
                        }

                    })
                }
            </ul>
        </div>
    )
}
