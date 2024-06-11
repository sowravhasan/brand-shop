import { useContext } from "react";
import { AuthContext } from './../AuthProvider/AuthProvider';
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()

    if(loading){
        return (
            <div className="flex justify-center h-screen items-center">
                <span className="loading text-red-500 loading-ring w-40 h-40"></span>
            </div>
        );
    }

    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to={"/signin"}></Navigate>;
};

export default PrivateRoute;