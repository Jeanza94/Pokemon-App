
import { AppRouter } from "./components/AppRouter"
import { PokeProvider } from "./context/PokeProvider"



export const PokemonApp = () => {

    return (
        <PokeProvider>
            <AppRouter />
        </PokeProvider>

    )
}
