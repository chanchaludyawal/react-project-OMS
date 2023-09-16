import { useEffect, useState } from "react";

function GetAllDonation() {


    var [donations, setDonations] =  useState([])

    useEffect(()=>{
        getAllDonationApi()
    },[])



    function getAllDonationApi(){

        var helper = new XMLHttpRequest();
        helper.onreadystatechange=()=>{


            if(helper.readyState === 4 && helper.status ===200){

                console.log(JSON.parse(helper.responseText))
                var dataFromServer = JSON.parse(helper.responseText).data;
                console.log(dataFromServer)
                setDonations(dataFromServer)
              
                
                

               
            }

        }
        helper.open("GET","http://localhost:8080/donation");
      
        helper.send();




    }






    
    return (<>
    <>
          <h1 style={{ textAlign: 'center', margin: 10 }}> Get All Donation</h1>
          <div className='d-flex'>
          
          
          
          <div className='row' style={{ marginTop: 50 }}>
            {donations.map((donation) => {
              return (<div className='col-md-3' key={ donation.donationId }>
                  <div className='card'>
                    {/* <img
                      src={"http://localhost:8080/child/image/"+ child.childId}
                      style={{ height: 200 }}
                      alt=''
                    /> */}
                    <div className='card-body'>
                      <h5 className='card-title'>{}</h5>
                      
                        <div>Donation Type : {donation.donationType}</div>
                        <div>ammount : {donation.payment.ammount}</div>
                        <br/>




                        
                      </div>
                    </div>
                  </div>
                  
                
              )
            })}
          </div>
          </div>

         
        </>

   

    </>  );
}

export default GetAllDonation;