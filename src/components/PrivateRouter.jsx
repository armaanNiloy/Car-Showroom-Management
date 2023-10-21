import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    console.log('pathname', location.pathname);

    if(loading){
        return <span className="loading loading-bars loading-lg"></span>;
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/signIn'></Navigate>
};

export default PrivateRoutes;