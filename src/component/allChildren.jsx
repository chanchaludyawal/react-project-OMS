import { useEffect, useState } from "react";
import Navigation from "./navigation";
import { useSelector } from "react-redux";
import RequestForAdoption from "./requestForAdoption";
import { useNavigate } from "react-router-dom";
import store from '../store';
import { toast } from "react-toastify";





function AllChildren() {


    const navigation =useNavigate();
    const role = useSelector((state)=> state.role.role)
    console.log(role)
    
    var [children ,setChildren] =  useState([]);

    useEffect(()=>{
        getAllChildren();
      
    },[]);


   

    function getAllChildren(){
        var helper = new XMLHttpRequest();
        helper.onreadystatechange=()=>{


            if(helper.readyState === 4 && helper.status ===200){

                var dataFromServer = JSON.parse(helper.responseText);

                setChildren(dataFromServer.data);
                
                console.log(JSON.parse(helper.responseText))

               
            }

        }
        helper.open("GET","http://localhost:8080/child/");
      
        helper.send();

    }

    function requestForAdoption(args){
      
     navigation("/request-for-adoption",{state:{childId : args.target.value}})

    }

    function deleteChild(args){



      var helper = new XMLHttpRequest();

      helper.onreadystatechange=()=>{

       
        if(helper.readyState === 4 && helper.status ===200){

            var dataFromServer = JSON.parse(helper.responseText);

            if(dataFromServer.data == 1){
              toast.success("deleted .. ")
              getAllChildren();
            }
            // setChildren(dataFromServer.data);
            console.log(JSON.parse(helper.responseText))

           
        }

    }
    helper.open("DELETE","http://localhost:8080/child/"+args.target.value );
  
    helper.send();
          
      
      
    }
    // function getImageOfChild(){
    //   var helper = new XMLHttpRequest();
    //     helper.onreadystatechange=()=>{


    //         if(helper.readyState === 4 && helper.status ===200){

    //             var dataFromServer = JSON.parse(helper.responseText);

    //             setChildren(dataFromServer.data);
                
    //             console.log(JSON.parse(helper.response))
    //         }

    //     }
    //     helper.open("GET","http://localhost:8080/child/image/5");
      
    //     helper.send();

    // }


    function updateChild(args){

      console.log(args.target.value)
      navigation("/update-child",{state : args.target.value })

    }

    return (
        <>
          <h1 style={{ textAlign: 'center', margin: 10 }}> children List</h1>
          <div className='d-flex'>
          
          </div>
          
          <div className='row' style={{ marginTop: 50 }}>
            {children.map((child) => {
              return (<div className='col-md-3' key={ child.childId }>
                  <div className='card'>
                    <img
                      src={"http://localhost:8080/child/image/"+ child.childId}
                      style={{ height: 200 }}
                      alt=''
                    />
                    <div className='card-body'>
                      <h5 className='card-title'>{child.name}</h5>
                      
                        <div>Age : {child.age}</div>
                        <div>Gender : {child.gender}</div>
                        <br/>

              { sessionStorage.getItem("role") == "admin" ? <><button  value={child.childId} onClick={deleteChild} className='btn '>
              delete child
            </button> <button value={child.childId}   onClick={updateChild} className='btn '>
              Update child
            </button> 
              </> : <>
            <button class="btn btn-primary bg-info " style={{color:"black"}} value={child.childId} onClick={requestForAdoption}>Request For Adoption</button>
            </>}  
                      </div>
                    </div>
                  </div>
                  
                
              )
            })}
          </div>

         
        </>
      )
}

export default AllChildren;