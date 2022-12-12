 
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
            <Link to="/dashboard">Анализировать</Link>
          </li>
          <li>
            <Link to="/inspects">Модерировать</Link>
          </li>
        </ul> 
     </div> 
  );
}

export default Menu;
