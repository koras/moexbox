 
import {
  Link
} from "react-router-dom";

const header = { 
  display: 'flex',
  width: '1200px',
  margin: 'auto',
  flexDirection: 'row',
  height: '50px', 
  background: '#395C32',
}

const logo = {
  color: 'blue',
  width: '250px',
  background: '#F1ACAC',
};
const search = {
  
  display: 'flex',
  color: 'blue',
  flexGrow: 1,
  background: '#395C32',
};

const lk = {
  color: 'blue',
  width: '250px',
  background: '#B0BE2A9A',
};

function Menu() {
  return ( 
      <header style={header}>
        <div style={logo} >
         logo
        </div>
        <div style={search} >
          search
        </div>
        <div  style={lk} >
          profile
        </div>
      </header> 
  );
}

export default Menu;
