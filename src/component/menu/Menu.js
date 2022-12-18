 
import {
  useLocation, Link,Routes, matchPath
} from "react-router-dom"; 
import './styleMenu.css';


 


function Menu() {
  const location = useLocation();

  console.log(location);
  console.log(location.pathname);
    //const  routeF = matchPath(this.props.location, 'inspect')
 // console.log(routeF );
   console.log(matchPath(location.pathname,'inspects'))
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
          <li>
            <Link to="/inspects">Отслеживать</Link>
          </li>
        </ul> 
     </div> 
  );
}

export default Menu;
