import { useState } from "react";

import {addChild as addChildApi } from "../services/addChild"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


function AddChild() {


    const navigation = useNavigate()
    var [child,setChild]=useState({
        name : "",
        age : "",
        gender : "",
        enjoys: "",
        birthdate: "",
        health : ""
        
    })

    var [childImage , setChildImage] = useState(null)

    function onTextChange(args){

        var copyofChild =  {...child};
        copyofChild[args.target.name] = args.target.value;
        console.log(copyofChild)
        setChild(copyofChild);
       
    }
    function addChild(){
        console.log(child)
        var data = new FormData();
        console.log(childImage)
        data.append("file", childImage);
        data.append("name", child.name);
        data.append("age", child.age);
        data.append("gender", child.gender);
        data.append("enjoys", "likes to read novels and play with her friend");
        data.append("birthdate", child.birthdate);
        data.append("health", child.health);

        var xhr = new XMLHttpRequest();
       // xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
            console.log(xhr.responseText);
            navigation("/children")
            
        }
        });

        xhr.open("POST", "http://localhost:8080/child/add");

        xhr.send(data);
    }

   





    return <>
    
    
        <center>
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
            <tr>
                
                <td>
                    

                    <div>
                    <input className="form-check-input" type="radio" name="gender" 
                      value="female" onChange={onTextChange}  />
                    <label className="form-check-label"  style={{marginRight : 20 }} >Female</label>
                
                    <input className="form-check-input" type="radio" name="gender" 
                      value="male" onChange={onTextChange}  />
                    <label className="form-check-label" >Male</label>
                    </div>
                    

                
                    
                
                    </td>
                    {/* <input className="form-control" placeholder="Password"  type="radio" name="password" value={child.gender} onChange={onTextChange}/> */}
                

            </tr>
            <tr>
               
            <td style={{padding: 10}}><input className="form-control" placeholder=""  type="file" name="file"  onChange={(e)=>{setChildImage(e.target.files[0])}}/></td>

            </tr>
            <tr>
                <td>< button type="button" style={{width: 400}} className="btn btn-primary btn-block mb-4" onClick={addChild} > Add Child Details </button></td>
                <td></td>

            </tr>


        </tbody>
    </table>
        </center>
    

    </>
}

export default AddChild;