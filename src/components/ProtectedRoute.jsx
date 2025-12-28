import {navigate} from "react-router-dom";
const ProtectedRoute =({children}) => {
    const isAuth = localStorage.getItem("auth");
    return isAuth ? children : <Navigate to ="/login"/>;
};
export default ProtectedRoute;