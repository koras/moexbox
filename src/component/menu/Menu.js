 
import {

  Link
} from "react-router-dom";

import './styleMenu.css';
 
function Menu() {
  return ( 
    <div className="menu"> 
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/chart">Chart</Link>
          </li>

           
        </ul> 
     </div> 
  );
}

export default Menu;
