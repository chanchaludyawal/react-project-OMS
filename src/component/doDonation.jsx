import { useEffect, useState } from "react";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import { isCardNoValid, isValid_CVV_Number } from "../services/validation";
import { toast } from "react-toastify";
import { isValidDateValue } from "@testing-library/user-event/dist/utils";

function DoDonation() {
    const location = useLocation();
    console.log(location.state)

    const navigation = useNavigate()
    
    const [donationDetails ,setDonationDetails] = useState({
        donationType : location.state,
        payment :{
            ammount : "",
            cvcNo : "",
            cardNo :"",
            expireDate : ""
        }
    })
    
    function onTextChange(args){
  
        var copydonationDetails =  {...donationDetails};
        copydonationDetails.payment[args.target.name] = args.target.value;
        console.log(copydonationDetails)
        setDonationDetails(copydonationDetails);
       
      }



    
     


      function doDonation(){

        if(!isValid_CVV_Number(donationDetails.payment.cvcNo)){
            toast.error("cvc No please enter 3 number .")
        }
        else if(!isCardNoValid(donationDetails.payment.cardNo)){
            toast.error("Enter Valid Card No")
        }
        
        else{

            var helper = new XMLHttpRequest();
            helper.onreadystatechange=()=>{
                if(helper.readyState === 4 && helper.status ===200){
                    console.log(JSON.parse(helper.responseText));
                    navigation("/Donation");
                }
    
            }
            helper.open("POST","http://localhost:8080/donation/"+ sessionStorage.getItem("userId"));
          
            var datatoServer = JSON.stringify(donationDetails);
            helper.setRequestHeader("Content-Type","application/json");
    
            helper.send(datatoServer);
        }
        

        



       
      

      }


      
    
    return ( <>
    
    
    <center>

    <h1>{location.state} </h1>

    <form>

        
    <table>
    <tbody>

    <tr >
      
    
    
     
      </tr>
    <tr >
        <td style={{padding: 10}}><input className="form-control" placeholder="amount"  type="number" name="ammount" value={donationDetails.payment.ammount} onChange={onTextChange}/> </td>
        </tr>
        
        <tr>
      
        <td style={{padding: 10}}><input className="form-control" placeholder="cvcNo"  type="number" name="cvcNo" value={donationDetails.payment.cvcNo} onChange={onTextChange}/></td>
        </tr>
    <tr>
        
        <td style={{padding: 10}}><input className="form-control" placeholder="cardNo"  type="number" name="cardNo" value={donationDetails.payment.cardNo}
        onChange={onTextChange}/></td>

    </tr>
    <tr>
    
        <td style={{padding: 10}}>Expiry Date<input className="form-control"  type="date" name="expireDate" value={donationDetails.payment.expireDate} 
        onChange={onTextChange}/> </td>
        </tr>


        
    
    <tr>
        <td style={{padding: 10}} >< button type="button" style={{width: 400}} class="btn btn-primary btn-block mb-4"   onClick={doDonation}>Register </button></td>
        <td style={{padding: 10}} ></td>

    </tr>


    </tbody>
    </table>
    </form>



    </center>
    
    
    
    
    
    
    
    </> );
}

export default DoDonation;