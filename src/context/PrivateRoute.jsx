import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { PokeContext } from "./PokeContext";

export const PrivateRoute = ({ children }) => {

    const { logged } = useContext(PokeContext);

    return logged ? children : <Navigate to='login' />
}
