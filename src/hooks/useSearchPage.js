import { useReducer, useState } from "react";
import { pokeReducer } from "../helpers";
import { useMovesTypes } from "./useMovesTypes";

export const useSearchPage = () => {

    const [inputValue, setInputValue] = useState("");

    const { types, allTypes } = useMovesTypes();
    const initialState = [];

    const [pokemons, dispatch] = useReducer(pokeReducer, initialState)

    const handleInput = ({ target }) => {
        setInputValue(target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const re = new RegExp(inputValue, 'i')
        const pokemonsFilter = types.filter((poke, i, arr) => {

            if (re.test(poke.pokemon_name) && (poke.pokemon_name !== arr[i + 1]?.pokemon_name)) {
                return poke;
            } else {
                return;
            }
        })

        dispatch({
            type: '[POKE] search poke',
            payload: pokemonsFilter
        })
        setInputValue("");
    }

    const handleSelect = () => {
        const selected = document.getElementById('types');

        const re = new RegExp(selected.value, 'i')
        const pokemonsFilter = types.filter((poke, i, arr) => {

            if (re.test(poke.type) && (poke.pokemon_name !== arr[i + 1]?.pokemon_name)) {
                return poke;
            } else {
                return;
            }
        })

        dispatch({
            type: '[POKE] search poke',
            payload: pokemonsFilter
        })
        selected.selectedIndex = 0;
    }

    return { inputValue, handleInput, handleSubmit, handleSelect, allTypes, pokemons };
}