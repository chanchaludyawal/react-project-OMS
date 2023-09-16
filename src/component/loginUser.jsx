import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import { toast } from "react-toastify";

import authSlice, { login } from "../slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { setRole } from "../slices/roleSlice";
import { validation } from "../services/validation";



function LoginUser({path}) {

    const [credentials, setCredentials] = useState({
    email : "",
    password : ""
    
    
    })
    

    const navigation =  useNavigate();
    const dispatcher = useDispatch();
    // const role  = useSelector((state)=>state.role.role);

    // useEffect(()=>{
    //     dispatcher(setRole(role))
    // },[])

    useEffect(()=>{

    })
    

  




    function loginUser(){



        debugger;
    if(!validation(credentials.email,"email") && !validation(credentials.password , "password")  ){

        
    }
    else{
        var helper = new XMLHttpRequest();
        
        helper.onreadystatechange=()=>{
            if(helper.readyState === 4 && helper.status ===200){

                const dataFromServer = JSON.parse(helper.responseText)
                if(dataFromServer.status === "success"){

                    sessionStorage["firstName"] = dataFromServer.data.firstName
                    sessionStorage["lastName"] = dataFromServer.data.lastName
                    sessionStorage["userId"] = dataFromServer.data.userId
                    sessionStorage["role"] = dataFromServer.data.role
                    sessionStorage.setItem("user",dataFromServer.data)
                    // dispatcher(setRole(dataFromServer.data.role))

                    console.log(sessionStorage.getItem("user"))
                    dispatcher(login())
                    toast.success("login" + path)
                    
                    if(path == undefined){
                    navigation("/home")
                    }
                    else if(path != undefined) {
                        navigation(path)
                    }
                    


                }
                else{

                    toast.error("Not valid User")
                }
                
               
            }
            

        }
        helper.open("POST","http://localhost:8080/user/login");
      
        var datatoServer = JSON.stringify(credentials);
        helper.setRequestHeader("Content-Type","application/json");

        helper.send(datatoServer);
        
    }



        
    }

    var onTextChange =(args)=> {
      var copyofcredentials =  {...credentials};
      copyofcredentials[args.target.name] = args.target.value;
      console.log(copyofcredentials)
      setCredentials(copyofcredentials);
    } 
    
    return(<>




    
         <center>

            

            <h1>Login User</h1>
         <table>
        <tbody>
        <tr>
                <td>email:</td>
                <td><input className="form-control" placeholder="name@example.com" 
                type="email" name="email" value={credentials.email}
                onChange={onTextChange}/></td>

            </tr>
            <tr>
                <td>Password:</td>
                <td><input className="form-control" placeholder="password" 
                type="password" name="password" value={credentials.password} 
                onChange={onTextChange}/></td>

            </tr>

          
                   
              
            

        </tbody>
    </table>

   <br/>
    <button type="button" style={{width: 400}} className="btn btn-primary btn-block mb-4" 
                onClick={loginUser} > login</button><br/>

   

    Don't have an account? <Link to='/registration'>Register here</Link>

       
         </center>


     
    
    
    </>);


}


export default LoginUser;