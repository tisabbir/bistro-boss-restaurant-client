
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {user, loading} = useAuth();
    const location = useLocation();
    if(loading){
        return 'Loading.....'
    }
    if(user){
        return children;
    }

   return <Navigate to={'/login'} state={{from : location}} ></Navigate>
    
};

export default PrivateRoute;