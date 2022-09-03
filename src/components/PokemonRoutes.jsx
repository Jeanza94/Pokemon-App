import { Navigate, Route, Routes } from "react-router-dom"
import { PokemonPage, SearchPage, PokemonCard } from "."


export const PokemonRoutes = () => {
    return (
        <Routes>
            <Route path="pokemon" element={<PokemonPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="/" element={<Navigate to="/pokemon" />} />
            <Route path="pokemon/:id" element={<PokemonCard />} />
        </Routes>

    )
}
