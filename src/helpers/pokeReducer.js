
export const pokeReducer = (state, action) => {
    switch (action.type) {
        case '[POKE] search poke':
            return action.payload;

        case '[POKE] login':
            return action.payload;

        case '[POKE] logout':
            return action.payload;


        default:
            return state
    }
}