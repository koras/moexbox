 
import {

  Link
} from "react-router-dom";
import { useSelector} from 'react-redux'; 
import './styleMenu.css';
 
function Menu() {

  const count = useSelector((state) => state.counter.value);

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
            <Link to="/chart">Chart {count}</Link>
          </li>
        </ul> 
     </div> 
  );
}

export default Menu;
