import { toast } from "react-toastify";

export function validation(value1 , value ) {

    if(value1 === ""){
        toast.error(`please enter ${value}`)
        return false;
    }
    
    return true;

    
    
}




export function isValid_CVV_Number(CVV_Number) {
    // Regex to check valid
    // CVV_Number 
    let regex = new RegExp(/^[0-9]{3,4}$/);
 
    // if CVV_Number
    // is empty return false
    if (CVV_Number == null) {
        return false;
    }
 
    // Return true if the CVV_Number
    // matched the ReGex
    if (regex.test(CVV_Number) == true) {
        return true;
    }
    else {
        return false;
    }
}

 
export function isCardNoValid(carNo){
    let regex = new RegExp(/^[0-9]{11,12}$/);
 
    // if CVV_Number
    // is empty return false
    if (carNo == null) {
        return false;
    }
 
    // Return true if the CVV_Number
    // matched the ReGex
    if (regex.test(carNo) == true) {
        return true;
    }
    else {
        return false;
    }


}



