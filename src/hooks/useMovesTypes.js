import { getChargedMoves, getPokemonEvolutions, getPokemonTypes } from "../helpers";
import { useEffect, useState } from "react";

export const useMovesTypes = () => {
    const [types, setTypes] = useState([]);
    const [moves, setMoves] = useState([]);
    const [evolutions, setEvolutions] = useState([]);




    const getTypes = async () => {
        const pokemonTypes = await getPokemonTypes();
        console.log({ pokemonTypes });
        setTypes(pokemonTypes);
    }

    const getMoves = async () => {
        const pokemonMoves = await getChargedMoves();
        console.log({ pokemonMoves });
        setMoves(pokemonMoves);
    }

    const getEvolutions = async () => {
        const pokemonEvolutions = await getPokemonEvolutions();
        console.log({ pokemonEvolutions });
        setEvolutions(pokemonEvolutions);
    }

    useEffect(() => {
        getTypes();
        getMoves();
        getEvolutions();
    }, []);

    const getEvolutionsById = (id) => {
        if (evolutions !== undefined) {
            let arrEvolutions = [];
            for (let i = 0; i < evolutions.length; i++) {
                if (evolutions[i].pokemon_id == id) {
                    arrEvolutions.push(evolutions[i].pokemon_id);
                    arrEvolutions.push(evolutions[i].evolutions[0].pokemon_id);
                    i = evolutions.length + 1;
                }
            }

            if (arrEvolutions.length > 0) {
                for (let i = 1; i < arrEvolutions.length; i++) {
                    for (let j = 0; j < evolutions.length; j++) {
                        if (arrEvolutions[i] == evolutions[j].pokemon_id) {
                            arrEvolutions.push(evolutions[j].evolutions[0].pokemon_id);
                            j = evolutions.length + 1;
                        }
                    }
                }
            }
            return arrEvolutions;
        }
        return;
    }

    const getAllTypes = () => {
        if (types !== undefined) {
            const allTypes = [];
            for (let i = 0; i < types.length; i++) {
                for (let j = 0; j < types[i].type.length; j++) {
                    if (allTypes.includes(types[i].type[j]) === false) {
                        allTypes.push(types[i].type[j]);
                    }
                }
            }
            return allTypes.sort();
        }
    }

    const allTypes = getAllTypes();

    return { moves, types, evolutions, getEvolutionsById, allTypes };
}