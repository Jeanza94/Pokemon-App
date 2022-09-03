
export const getChargedMoves = async () => {

    const optionsMoves = {

        method: 'GET',
        headers: {

            'X-RapidAPI-Key': 'c0f0bd245emshc8f656d6686f685p191b92jsn39b1b2357f1f',
            'X-RapidAPI-Host': 'pokemon-go1.p.rapidapi.com',


        }
    };

    const resp = await fetch('https://pokemon-go1.p.rapidapi.com/current_pokemon_moves.json', optionsMoves);
    const data = await resp.json();

    return data;
}



