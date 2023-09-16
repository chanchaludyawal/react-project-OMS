import { Route, Routes } from "react-router-dom";
import LoginUser from './component/loginUser';
import Registration from "./component/registration";
import Home from "./component/home";
import AllChildren from "./component/allChildren";
import Donation from "./component/donation";
import Profile from "./component/profile";
import { ToastContainer, toast } from 'react-toastify'
import ContactUs from './component/contactUs';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import Navigation from "./component/navigation";
import ProtectedRoute from "./services/protectedRoute";
import { login } from "./slices/userSlice";
import { useEffect } from "react";
import RequestForAdoption from "./component/requestForAdoption";
import AddChild from "./component/addChild";
import DoDonation from "./component/doDonation";
import GetAllDonation from "./component/getAllDonation";
import UpdateChild from "./component/updateChild";


function App() {

    const loginStatus = useSelector((state)=> state.user.status)
    const dispatch = useDispatch();
    console.log(loginStatus)

    useEffect(()=>{
        if(sessionStorage.getItem("userId") > 0){
            dispatch(login())
        }
    },[])

    

    return (
        <>
        <Navigation/>

        <Routes  >
             
            <Route path="/" element = {<LoginUser/>} />
            <Route path="/registration" element = {<Registration />}/>
            <Route path="/home" element= {<Home/>}/>

            <Route path="/children" element= {(loginStatus && <AllChildren/>) || (loginStatus == false && <LoginUser path = "/children"  />)}/>
            <Route path="/donation" element= {<Donation/>}/>
            <Route path="/profile" element= {(loginStatus && <Profile/>) || (loginStatus == false && <LoginUser path = "/profile"  />)}/>
            <Route path="/contactUs" element= {<ContactUs/>}/>
            <Route path="/add-child" element= {<AddChild/>}/>
            <Route path="/request-for-adoption" element= {<RequestForAdoption/>}/>
            <Route path="/doDonation" element={<DoDonation/> } />
            <Route path="/allDonation" element={<GetAllDonation/>}/>

            <Route path="/update-child" element={<UpdateChild/>}/>
        
        </Routes>

        <ToastContainer />
        
        </>
      );
}



export default App;