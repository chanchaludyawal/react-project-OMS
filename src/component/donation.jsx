import Navigation from "./navigation";

import foodDonation from "../image/foodDonation.png"

import fundDonation from "../image/fundDonation.png"

import stationaryDonation from "../image/stationaryDonation.png"
import { useNavigate } from "react-router-dom";

function Donation() {



    var navigation = useNavigate()

    function doDonation(args){
        console.log(args.target.value + " value")
        var value = args.target.value;
        navigation("/doDonation",{state : value});
    }













    return ( <>
   <div className='row' style={{ marginTop: 50 }}>


        <div className='col-md-3'>

        <div className="card" style={{width: 300}}>
    <img className="card-img-top" src={foodDonation} style = {{width:200 , height: 200}} alt="Card image cap"/>
    <div className="card-body">
        <h5 className="card-title">Food Donation </h5>
        <p className="card-text"></p>
    <button className="btn btn-primary" value={"Food Donation"} onClick={doDonation}> Food Donation</button>
    </div>
    </div>
        </div>
  
    


        <div className='col-md-3'>
   <div className="card" style={{width: 300}} >
    <img className="card-img-top" src={fundDonation} style = {{width:200 , height: 200}} alt="Card image cap"/>
    <div className="card-body">
        <h5 className="card-title">Fund Donation</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button className="btn btn-primary" value={"Fund Donation"} onClick={doDonation}> Fund Donation</button>
    </div>
    </div>
    </div>

    <div className='col-md-3'>
    <div className="card" style={{width: 300}} >
    <img className="card-img-top" src={stationaryDonation} style = {{width:200 , height: 200}} alt="Card image cap"/>
    <div className="card-body">
        <h5 className="card-title">Stationary Donation </h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button className="btn btn-primary" value={"Stationary Donation "} onClick={doDonation}>Stationary Donation</button>
    </div>
    </div>
    </div>
    
   </div>
    
    </> );
}

export default Donation;