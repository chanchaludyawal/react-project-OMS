import { useEffect, useState } from "react";
import Navigation from "./navigation";
import { toast } from "react-toastify";


function Profile() {


    useEffect(()=>{
        getUserById()
        getAllDonationByUserId();
        getStatusOfAdoption();
    },[])

    var [ user ,setUser]=useState({
        email : "",
        password : "",
        conformPassword : "",
        firstName : "",
        lastName : "",
        address : "",
        state: "",
        city : "",
        country: "",
        mobile: "",
        income: "",
        occupation: "",
        health: "",
        agency: "" 
    })

    var [status, setStatus] = useState([])

    var [donations, setDonation] = useState("")

    

    




    function getUserById(){
        var helper = new XMLHttpRequest();
        helper.onreadystatechange=()=>{


            if(helper.readyState === 4 && helper.status ===200){

                let dataFromServer = JSON.parse(helper.responseText);

                setUser(dataFromServer.data);
                
                console.log(JSON.parse(helper.responseText))
            }

        }
        helper.open("GET","http://localhost:8080/user/" + sessionStorage.getItem("userId"));
      
        helper.send();

    }

    function getAllDonationByUserId(){
        var helper = new XMLHttpRequest();
        helper.onreadystatechange=()=>{


            if(helper.readyState === 4 && helper.status ===200){

                let dataFromServer = JSON.parse(helper.responseText);

                
                if(dataFromServer.data.length == 0){
                  setDonation("No Donation");
                }
                else{
                  setDonation(dataFromServer.data.length);
                }
                
                console.log(JSON.parse(helper.responseText))
            }

        }
        helper.open("GET","http://localhost:8080/donation/" + sessionStorage.getItem("userId"));
      
        helper.send();
    }

    function getStatusOfAdoption(){

      var helper = new XMLHttpRequest();
     

     debugger

     helper.onreadystatechange=()=>{
      
      if(helper.readyState == 4 && helper.status == 200){
        var dataFromServer = JSON.parse( helper.responseText)
        console.log(dataFromServer)
        if(dataFromServer.status == "success" && dataFromServer.data != null){
          {
              setStatus(dataFromServer.data.status);
          }
        }

        else if(dataFromServer.data == null){
          setStatus("not apply for adoption");
        }
       
        
      }
     }

      

      helper.open("GET", "http://localhost:8080/adoption-status/"+ sessionStorage.getItem("userId"));

      helper.send();
    }


    return ( <>
 

    <section className="vh-100" style={{backgroundColor: "#f4f5f7"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-700">
      <div className="col col-lg-9 mb-4 mb-lg-0">
        <div className="card mb-3" style={{borderRadius: ".5rem"}}>
          <div className="row g-0">
            <div className="col-md-4 gradient-custom text-center text-white"
              >
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="Avatar" className="img-fluid my-5" style={{width: "500px"}} />
              <h5>Marie Horwitz</h5>
              <p>Web Designer</p>
              <i className="far fa-edit mb-5"></i>
            </div>
            <div className="col-md-8">
              <div className="card-body p-4">
                <h6>Information</h6>
                <hr className="mt-0 mb-4"/>
                <div className="row pt-1">
                  <div className="col-6 mb-3">
                    <h6>Email</h6>
                    <p className="text-muted">{user.email}</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h6>Phone</h6>
                    <p className="text-muted">{user.mobile}</p>
                  </div>
                </div>
                <div>
                <h6>Adoption status</h6>
                <hr className="mt-0 mb-4"/>
                <div className="row pt-1">
                  <div className="col-6 mb-3">
                    <h6>Recent</h6>
                    <p className="text-muted">{}</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h6>Adoption status</h6>
                    <p className="text-muted">{status}</p>
                  </div>
                </div>
                </div>
                <h6>Donations</h6>
                <hr className="mt-0 mb-4"/>
                <div className="row pt-1">
                  <div className="col-6 mb-3">
                    <h6></h6>
                    <p className="text-muted">{donations}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</section>
        
   

   
    
    
    </> );
}

export default Profile;