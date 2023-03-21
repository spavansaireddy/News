import React from "react";
import {Link} from 'react-router-dom';
import './navbar.css';
function Navbar(){
    return(
        <><br/>
          <h1><i>The Simple </i> NEWS</h1><br/>
          <div className="nav_header">
             <ul id="ul1">
                <li><Link to='/'>TOP NEWS</Link></li>
                <li><Link to='/politics'>POLITICS</Link></li>
                <li><Link to='/business'>BUSINESS</Link></li>
                <li><Link to='/entertainment'>ENTERTAINMENT</Link></li>
                <li><Link to='/sports'>SPORTS</Link></li>
             </ul>
             <ul id="ul2">
                <li><Link to='/'><img src="https://cdn-icons-png.flaticon.com/128/10043/10043701.png" alt="topnews"/></Link></li>
                <li><Link to='/politics'><img src="https://cdn-icons-png.flaticon.com/128/4742/4742256.png" alt="politics"/></Link></li>
                <li><Link to='/business'><img src="https://cdn-icons-png.flaticon.com/128/554/554724.png" alt="business"/></Link></li>
                <li><Link to='/entertainment'><img src="https://cdn-icons-png.flaticon.com/128/4730/4730361.png" alt="entertain"/></Link></li>
                <li><Link to='/sports'><img src="https://cdn-icons-png.flaticon.com/128/3104/3104509.png" alt="sports"/></Link></li>
             </ul><br/>
             <div className="search">
               <input type="text" list="browser" placeholder="search"/>
               <datalist id="browser">
                  <option value="Top News"/>
                  <option value="Politics"/>
                  <option value="Business"/>
                  <option value="Sports"/>
               </datalist>
             </div>
          </div>
        </>
    )
}
export default Navbar;