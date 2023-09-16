import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../slices/userSlice";
import Registration from "./registration";
import AddChild from "./addChild";



  
    
function Navigation() {



  const loginStatus = useSelector((state)=> state.user.status)
  

  console.log(loginStatus)
  const navigation =useNavigate();
  const dispatch=useDispatch();

  function login(){
    
    navigation("/")
     
  }
  function addChild(){
      
    navigation("/add-child")
  }
  


  function logoutUser(){
    sessionStorage.clear();

      dispatch(logOut())
      navigation("/")

    }
  function registration(){
      
    navigation("/registration")
  }

  

//className='navbar navbar-expand-lg bg-body-tertiary'
  return (  

    // {lass="navbar navbar-dark bg-primary"}
    //bg-body-tertiary
    <nav className='navbar  navbar-expand-lg bg-info '  >
      <div className='container-fluid bg-info'  >
            <a className='navbar-brand' >OMS</a>
            {/* <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button> */}
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>



              <li className='nav-item'>
                  <Link className='nav-link' to='/home'>
                    Home
                  </Link>
                </li>

                {sessionStorage.getItem("role")=="admin" ? 
                <li className='nav-item'>
                  <Link className='nav-link' to='/children'>
                    Children
                  </Link>
                </li>:
                <li className='nav-item'>
                <Link className='nav-link' to='/children'>
                  Adoption
                </Link>
              {/* </li><li className='nav-item'>
                <Link className='nav-link' to='/allAdopter'>
                  Requested For Adoption
                </Link>
              </li> */}
                </li>
                
                }
                

                {sessionStorage.getItem("role")=="admin" ? 
                <li className='nav-item'>
                  <Link className='nav-link' to='/allDonation'>
                    Donations
                  </Link> 
                  </li>:
                <li className='nav-item'>
                 <Link className='nav-link' to='/donation'>
                    Donation
                  </Link>
                </li>

          }
  

  
                <li className='nav-item'>
                  <Link className='nav-link' to='/profile'>
                    Profile
                  </Link>
                </li>

                
  
                {/* <li className='nav-item'>
                  <Link className='nav-link' to='/contactUs'>
                    Contact Us
                  </Link>
                </li> */}
              </ul>
            </div>
  
            <div className='d-flex'>


            {(loginStatus == false && <span>
              <button onClick={registration} className='btn'>
              Registration
            </button> 
            <button onClick={login} className='btn'>
              Login
            </button>
            </span> ) || (loginStatus && <button onClick={logoutUser} className='btn'>
              Logout
            </button>) 
            
            }
            

        { sessionStorage.getItem("role") == "admin" ? <button onClick={addChild} className='btn '>
              AddChild
            </button> : <></>} 
            

            
             
            </div>
      </div>
    </nav>
      );
}

export default Navigation;