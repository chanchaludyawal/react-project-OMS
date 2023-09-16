import { useState } from "react";

function AllUsers() {



    var [users, setUsers]=useState([])

    function getAllUser(){

        function getAllChildren(){
            var helper = new XMLHttpRequest();
            helper.onreadystatechange=()=>{
    
    
                if(helper.readyState === 4 && helper.status ===200){

                    var dataFromServer = JSON.parse(helper.responseText);
                    setUsers(dataFromServer.data);
                    console.log(JSON.parse(helper.responseText));
                    
                }
    
            }
            helper.open("GET","http://localhost:8080/user/");
          
            helper.send();

    }
}

    return (<>
    
    
    <>
          <h1 style={{ textAlign: 'center', margin: 10 }}> User</h1>
          <div className='d-flex'>
          
          
          
          <div className='row' style={{ marginTop: 50 }}>
            {users.map((user) => {
              return (<div className='col-md-3' key={ user.firstName }>
                  <div className='card'>
                    {/* <img
                      src={"http://localhost:8080/child/image/"+ child.childId}
                      style={{ height: 200 }}
                      alt=''
                    /> */}
                    <div className='card-body'>
                      <h5 className='card-title'>{}</h5>
                      
                        <div>Donation Type : {user.firstName}</div>
                        <div>ammount :{}</div>
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

export default AllUsers;