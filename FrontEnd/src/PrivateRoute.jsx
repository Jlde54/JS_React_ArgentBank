import { useSelector } from "react-redux"
import {Navigate} from "react-router-dom"

function PrivateRoute({children}) {
    const token = useSelector((state) => state.user.token)

    return token ? children : <Navigate to="/Sign-In" />
}

export default PrivateRoute