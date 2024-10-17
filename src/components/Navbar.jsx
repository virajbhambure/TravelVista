import React,{useState} from "react";
import "./Navbar.css";  
import { menuitems } from "./menuitems";
import { Link } from "react-router-dom";


   

function Navbar()
{
    const[clicked,setClicked]=useState(false);

    const handleClick=()=>{
        setClicked(!clicked);
    }
    return(
    <>
    <nav className="nav-items">
        {/* <div className="nav-menu">
          

        </div> */}
        <h1 className="navbar-logo">
              TravelVista
           </h1>
           <div className="menu-icons" onClick={handleClick}>
               <i className={clicked?"fas fa-times":"fas fa-bars"}></i>
               {/* <i className="fas fa-times"></i> */}
            </div>
    
        <ul className={clicked ? "nav-menu active":"nav-menu"}>
            {menuitems.map((item,index)=>{
                return(
                    <li key={index}>
                     <Link className={item.cName} to={item.url}>
                     <i className={item.icon}></i>
                     {item.title}
                     </Link>
            </li>

                )
            })}
            <button>Sign Up</button>
            
        </ul>

    </nav>
     
    </>
        
    )

}

export default Navbar;