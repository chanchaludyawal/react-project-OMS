import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import Navigation from "./navigation";
import { validation } from "../services/validation";

function Registration() {

    var [ user ,setUser]=useState({
        email : "",
        password : "",
        conformPassword : "",
        firstName : "",
        lastName : "",
        address : "",
        state: "INDIA",
        city : "",
        pincode : "",
        country: "",
        mobile: ""
        
    })

    const navigation =  useNavigate();
    function registration(){



        if(!validation(user.firstName ,"Fisrt name") && !validation(user.lastName, "Last Name")  ){

        }
        else{


        var helper = new XMLHttpRequest();
        helper.onreadystatechange=()=>{
            if(helper.readyState === 4 && helper.status ===200){
                console.log(JSON.parse(helper.responseText));
                navigation("/");
            }

        }
        helper.open("POST","http://localhost:8080/user/registration");
      
        var datatoServer = JSON.stringify(user);
        helper.setRequestHeader("Content-Type","application/json");

        helper.send(datatoServer);

        }
    }

    function onTextChange(args){

  
      var copyofUser =  {...user};
      copyofUser[args.target.name] = args.target.value;
      console.log(copyofUser)
      setUser(copyofUser);
     
    

    }


    return ( <>
    <center>

        <h1>Register </h1>
       
       <form>
       <table>
        <tbody>
            <tr >
              
            
            
                <td style={{padding: 10}}><input className="form-control" placeholder="First Name"  type="text" name="firstName" value={user.firstName} onChange={onTextChange}/> </td>
                </tr>
                
                <tr>
              
                <td style={{padding: 10}}><input className="form-control" placeholder="Last Name"  type="text" name="lastName" value={user.lastName} onChange={onTextChange}/></td>
                </tr>
            <tr>
                
                <td style={{padding: 10}}><input className="form-control" placeholder="Email"  type="email" name="email" value={user.email}
                onChange={onTextChange}/></td>

            </tr>
            <tr>
              
            
            
                <td style={{padding: 10}}><input className="form-control" placeholder=" House NO / landmark  "  type="text" name="address" value={user.address} onChange={onTextChange}/> </td>
                </tr>
            
            <tr>
                <td style={{padding: 10}} >
                <label className="form-check-label" >City</label>
                <select className="form-select form-select-sm" aria-label=".form-select-sm example" name="city" value={user.city} onChange={onTextChange}>
                    <option defaultValue >choose one agency</option>
                    <option key="1">Bhopal</option>
                    <option key="2"> Pune</option>
                    <option key="3">Banglore</option>
                </select>
                </td>
            </tr>



            <tr>
                <td style={{padding: 10}} >
                <label className="form-check-label" >State</label>
                <select className="form-select form-select-sm" aria-label=".form-select-sm example" name="state" value={user.state} onChange={onTextChange}>
                    <option defaultValue >choose one agency</option>
                    <option key="1">MP</option>
                    <option key="2"> MH</option>
                    <option key="3">Karnatk</option>
                </select>
                </td>
            </tr>
           
            <tr>
                
                <td style={{padding: 10}}><input className="form-control" placeholder="Password"  type="password" name="password" value={user.password} onChange={onTextChange}/></td>

            </tr>
            <tr>
               
                <td style={{padding: 10}} ><input className="form-control" placeholder="conform Password"  type="password" name="conformPassword" value={user.conformPassword} onChange={onTextChange}/></td>

            </tr>
            <tr>
                <td style={{padding: 10}} >< button type="button" style={{width: 400}} class="btn btn-primary btn-block mb-4"   onClick={registration}>Register </button></td>
                <td style={{padding: 10}} ></td>

            </tr>


        </tbody>
    </table>
       </form>
    


    have an account? <Link to='/'>Login here </Link>

    </center>
    
    </> );
}

export default Registration;