import React from 'react';
import './App.css'
import {Link} from 'react-router-dom'
function Nav(){
    const navStyle={
        color:'white'
    };
    return(
        <nav>
         <h3>logo</h3>
         <ul className="nav-links">
             <Link style={navStyle} to="/farklı">
                <li>Farklı</li>
             </Link>
             <Link style={navStyle} to ="/başka">
                <li>Başka</li>
             </Link>
            
         </ul>
     </nav>
    )
}
export default Nav;