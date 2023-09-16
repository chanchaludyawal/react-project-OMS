import { useState } from "react";

import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import Navigation from './navigation';



function RequestForAdoption() {


    const navigation = useNavigate();

    const location = useLocation();

    const [datatoServer,setDataToServer] = useState({
        
            income: "",
            occupation: "",
            health: "",
            agency: "",
    }) 


    const [proofOfMarrige,setProofOfMarrige] = useState({})
    const [proofOfResidance,setProofOfResidance] = useState({})
    const [famliyPhoto,setFamliyPhoto] = useState({})



    function onTextChange(args){

  
        var copyofdatatoServer =  {...datatoServer};
        copyofdatatoServer[args.target.name] = args.target.value;
        
       
        setDataToServer(copyofdatatoServer);
       
    }

    
    var data = new FormData();
    data.append("proofOfMarrige",proofOfMarrige );
    data.append("famliyPhoto", famliyPhoto);
    data.append("proofOfResidance", proofOfResidance);
    data.append("income", datatoServer.income);
    data.append("occupation", datatoServer.occupation);
    data.append("health", datatoServer.health);
    data.append("agency", datatoServer.agency);
    

  


    //add requestForAdoption
    function requestForAdoption(){

        

        var helper = new XMLHttpRequest();
   
        helper.onreadystatechange=()=>{
            if(helper.readyState === 4 && helper.status ===200){

                var response =JSON.parse(helper.responseText);
                if(response.status === "success"){
                    if(response.data == "requested"){
                       
                        console.log(JSON.parse(helper.responseText) );

                        console.log("response")
                        toast.error("Already requested for adoption")
                       
                        
                    }
                    else{
                        addRequestForAdoption();
                    }
                }

        }
    }

        


        helper.open("POST", "http://localhost:8080/request-for-adoption");
        
       
        var datatoServer = JSON.stringify({child_id : location.state.childId,user_id : sessionStorage.getItem("userId")});
        helper.setRequestHeader("Content-Type","application/json");
       
        helper.send(datatoServer)   

        

    }


    function addRequestForAdoption(){

            var helper = new XMLHttpRequest();
   
            helper.onreadystatechange=()=>{
                debugger;
                if(helper.readyState === 4 && helper.status ===200){
                    
                    console.log(JSON.parse(helper.responseText) );
                    console.log("response")

                    toast.success("request is sended...")
                

                    navigation("/children") 

                }

            }
            helper.open("POST","http://localhost:8080/adoption-request/"+sessionStorage.getItem("userId"));
            
            console.log(data)
            helper.send(data)    

        
        

        
        
    }





    return (<>
    <center>

    <h1>Adoption Request</h1>

        <form>
        <table >
        <tbody>
            <tr>
              
            
            
                <td style={{padding: 10}}><input className="form-control" placeholder="Income"  type="text" name="income" value={datatoServer.income} onChange={onTextChange}/> </td>
                </tr>
                
                <tr>
              
                <td style={{padding: 10}}><input className="form-control" placeholder="Occupation"  type="text" name="occupation" value={datatoServer.occupation} onChange={onTextChange}/></td>
                </tr>
            <tr>
                
                <td style={{padding: 10}}><input className="form-control" placeholder="health"  type="text" name="health" value={datatoServer.health}
                onChange={onTextChange}/></td>

            </tr>

            <tr>
                <td style={{padding: 10}} >
                <select className="form-select form-select-sm" aria-label=".form-select-sm example" name="agency" value={datatoServer.agency} onChange={onTextChange}>
                    <option defaultValue >choose one agency</option>
                    <option key="1">agency one</option>
                    <option key="2">agency Two</option>
                    <option key="3">agency Three</option>
                </select>
                </td>
            </tr>
            
            <tr>
            famliyPhoto
                <td style={{padding: 10}}><input className="form-control" placeholder=""  type="file" name="proofOfResidance"  onChange={(e) => setProofOfResidance(e.target.files[0])}/></td>

            </tr>
            <tr>
            
            proofOfMarrige<td style={{padding: 10}}><input className="form-control"   type="file" name="proofOfMarrige"  onChange={(e) => setProofOfMarrige(e.target.files[0])}/></td>

            </tr>
            <tr>
            famliyPhoto
                <td style={{padding: 10}}><input className="form-control" required ={true}  type="file" name="famliyPhoto"   onChange={(e) => setFamliyPhoto(e.target.files[0])}/></td>

            </tr>
          

               
            <tr>
                <td style={{padding: 10}}>< button type="button" style={{width: 400}} className="btn btn-primary btn-block mb-4" onClick={requestForAdoption}  >Register </button></td>
                <td></td>

            </tr>


        </tbody>
    </table>
        </form>
   

    </center>
    
    
    

    </>  );
}



export default RequestForAdoption