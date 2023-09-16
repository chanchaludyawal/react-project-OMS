import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "./navigation";

function UpdateChild() {


    

    var [child,setChild]=useState({
        name : "",
        age : "",
        birthdate: "",
        health : ""
        
    })

    var location = useLocation();
    console.log(location.state)


    function updateChild(){
        var helper = new XMLHttpRequest();
        helper.onreadystatechange=()=>{
            if(helper.readyState === 4 && helper.status ===200){
                console.log(JSON.parse(helper.responseText));
                //Navigation("/");
            }

        }
        helper.open("PUT","http://localhost:8080/child/"+ location.state);
      
        var datatoServer = JSON.stringify(child);
        helper.setRequestHeader("Content-Type","application/json");

        helper.send(datatoServer);
    }

    function onTextChange(args){

  
        var copyofChild =  {...child};
        copyofChild[args.target.name] = args.target.value;
        
       
        setChild(copyofChild);
       
    }
    return ( <>
    



    <center>
    <h1>Update Child</h1>

        <table>
        <tbody>
            <tr>
              
            
            
                <td><input className="form-control" placeholder="Name"  type="text" name="name" value={child.name} onChange={onTextChange}/> </td>
                </tr>
                
                <tr>
              
                <td><input className="form-control" placeholder="Age"  type="number" name="age" value={child.age} onChange={onTextChange}/></td>
                </tr>
            <tr>
                
                <td>
                <label className="form-check-label" >Birth Date</label>
                    <input className="form-control" 
                 type="date" name="birthdate" value={child.birthdate}
                onChange={onTextChange}/></td>

            </tr>
            
            <tr>
               
                <td>
                
                    <input className="form-control" placeholder="health"  type="text" name="health" value={child.health} onChange={onTextChange}/></td>

            </tr>
            
                
               
                    {/* <input className="form-control" placeholder="Password"  type="radio" name="password" value={child.gender} onChange={onTextChange}/> */}
                

          
            
            <tr>
                <td>< button type="button" style={{width: 400}} className="btn btn-primary btn-block mb-4" onClick={updateChild} > update Child  </button></td>
                <td></td>

            </tr>


        </tbody>
    </table>
        </center>

    
    
    
    
    </> );
}

export default UpdateChild;