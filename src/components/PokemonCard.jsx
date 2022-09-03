import { useMovesTypes } from "../hooks/useMovesTypes"
import { useParams } from 'react-router-dom'
import { useContext } from "react"
import { PokeContext } from "../context/PokeContext"



export const PokemonCard = () => {

    const { types, moves, getEvolutionsById } = useMovesTypes()
    const { id } = useParams();
    const arrEvolutions = getEvolutionsById(id);

    const { handleComeBack } = useContext(PokeContext)


    return (
        <>
            <div className="pokemon-card animate__animated animate__backInLeft card-atributes">
                <img src={`/images/1 (${id}).png`} alt="pokemon name" />
                <div>
                    {
                        types?.map((type, i, arr) => {
                            if (type.pokemon_id == id && arr[i].pokemon_id != arr[i + 1]?.pokemon_id) {
                                return (
                                    <div key={id}>
                                        <h1>{type.pokemon_name}</h1>
                                        <p>Types: {type.type.map((item, i, arr) => { if (i == arr.length - 1) { return `${item}` } return `${item}, ` })}</p>
                                    </div>
                                );
                            }
                        })
                    }

                    {
                        moves.map((move, i, arr) => {
                            if (move.pokemon_id == id && arr[i].pokemon_id != arr[i + 1]?.pokemon_id) {
                                return (
                                    <div key={id}>
                                        <p className={(move.charged_moves.length === 0) ? "p-none" : ""}>Charged moves: {move.charged_moves.map((item, i, arr) => { if (i == arr.length - 1) { return `${item}` } return `${item}, ` })}</p>
                                        <p className={(move.elite_charged_moves.length === 0) ? "p-none" : ""}>Elite charged moves: {move.elite_charged_moves.map((item, i, arr) => { if (i == arr.length - 1) { return `${item}` } return `${item}, ` })}</p>
                                        <p className={(move.fast_moves.length === 0) ? "p-none" : ""}>Fast moves: {move.fast_moves.map((item, i, arr) => { if (i == arr.length - 1) { return `${item}` } return `${item}, ` })}</p>
                                        <p className={(move.elite_fast_moves.length === 0) ? "p-none" : ""}>Elite fast moves: {move.elite_fast_moves.map((item, i, arr) => { if (i == arr.length - 1) { return `${item}` } return `${item}, ` })}</p>
                                    </div>
                                );
                            }
                        })
                    }
                    <button onClick={handleComeBack}>Come back</button>
                </div>
            </div>

            <div className="evolution-card">
                <h1 className={`${(arrEvolutions.length > 0) ? "" : "h1-none"}`}>This is me and my evolutions</h1>
                {
                    <div className="div-evolutions animate__animated animate__fadeIn animate__delay-1s">
                        {
                            (arrEvolutions.length > 0) && (
                                arrEvolutions.map(item => (
                                    <div key={item} >
                                        <img src={`/images/1 (${item}).png`} alt="pokemon name" className="img-evolutions" />
                                    </div>
                                ))
                            )
                        }
                    </div>
                }
            </div>
        </>
    )
}
