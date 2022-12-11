 
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
            <Link to="/inspect/78e731027d8fd50ed642340b7c91111111">Модерировать</Link>
          </li>
        </ul> 
     </div> 
  );
}

export default Menu;
