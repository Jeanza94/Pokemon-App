import { Route, Routes } from "react-router-dom"
import { LoginPage } from "."
import { PrivateRoute } from "../context/PrivateRoute"
import { PublicRoute } from "../context/PublicRoute"
import { PokemonRoutes } from "./PokemonRoutes"

export const AppRouter = () => {
    return (
        <Routes>
            {/* <Route path="pokemon" element={<PokemonPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="login" element={<LoginPage />} /> */}

            <Route path="/*" element={
                <PrivateRoute>
                    <PokemonRoutes />
                </PrivateRoute>
            }
            />

            <Route path="login" element={
                <PublicRoute>
                    <LoginPage />
                </PublicRoute>
            }
            />

        </Routes>
    )
}
