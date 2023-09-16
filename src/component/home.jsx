import { Link } from "react-router-dom";
import Navigation from "./navigation";

import children from "../image/children.jpeg"
import Orphanages from "../image/Orphanages.jpg"

function Home() {
    return ( <>
    <center>
{/* style={{height:500 , width: 500}} */}
        <img src={Orphanages} style={{height:500 , width: 1200 }} ></img>
        <h1>Children without family<br/>are the most VULENRABLE<br/> People in the world</h1>
    </center>
    
    </> );
}

export default Home;