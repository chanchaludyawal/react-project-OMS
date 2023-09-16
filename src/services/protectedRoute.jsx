import { useSelector } from "react-redux";


import Adoption from "../component/allChildren";
import LoginUser from "../component/loginUser";
import { toast } from "react-toastify";
import { Route, Router, Routes, useNavigate } from "react-router-dom";

function ProtectedRoute(props) {

    const navigation = useNavigate();

    const loginStatus = useSelector((state)=> state.user.status)

    if(loginStatus){


        return <Route exact path={props.path}
        component={props.component} />
        
    }
    else{
        navigation("/")
    }

}


 

export default ProtectedRoute