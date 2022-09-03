import { Link } from "react-router-dom";
import { useSearchPage } from "../hooks/useSearchPage";
import { NavBar } from "./NavBar"



export const SearchPage = () => {

    const { inputValue, handleInput, handleSubmit, handleSelect, allTypes, pokemons } = useSearchPage();

    return (
        <div>
            <NavBar />
            <div className="search-page">

                <form onSubmit={handleSubmit} className="form-search-page">

                    <div className="search-page-form-form">
                        <p>What are you looking for?</p>
                        <input onChange={handleInput} type="text" value={inputValue} />
                        <button type="submit">Search</button>
                    </div>

                    <div className="form-search-page-select">
                        <label htmlFor="types">Search by type</label>
                        <select id="types" name="types" onChange={handleSelect}>
                            <option></option>
                            {
                                allTypes.map(item => (
                                    <option key={`${item}`} value={`${item}`}>{item}</option>
                                ))
                            }
                        </select>
                    </div>
                </form>

                <div className="search-page-search">
                    <h1 className={`${(pokemons.length > 0) ? "" : "h1-none"}`}>!Congratulations! this is your result</h1>

                    <div className="search-page-search-poke">
                        {
                            (pokemons.length > 0) && (
                                pokemons.map(poke => {
                                    return (
                                        <div key={poke.pokemon_id} className='animate__animated animate__bounceInRight'>
                                            <p>{poke.pokemon_name}</p>
                                            <Link to={`/pokemon/${poke.pokemon_id}`}><img src={`/images/1 (${poke.pokemon_id}).png`} alt="poke.pokemon_name" /></Link>
                                        </div>
                                    )
                                })
                            )
                        }
                    </div>
                </div>

            </div >
        </div>
    )
}


