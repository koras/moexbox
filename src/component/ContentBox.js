 
import {

  Link
} from "react-router-dom";
import Menu from './../component/menu/Menu';
import Header from './header/Header';

import './styleContent.css';

 
const contentClass = { 
  alignItems: 'center', 
  width: '1200px', 
  margin: 'auto',
}

const mainClass = {
  width: '1200px', 
  display: 'flex',
  flexDirection: 'row',
};

const menuClass = {
  width: '245px',   
  padding: '0px 5px 0px 0px'
};



function ContentBox({content, children}) {
  return (
    <div  >
      <div className="headerClass"> 
       <Header/>
      </div>
      <div style={contentClass}> 
            <div style={mainClass}>
              <div  style={menuClass}>
                <Menu/> 
              </div>
            <div  className="mainContent" >
                  {children}
            </div>
          </div>
      </div>
    </div>
  );
}

export default ContentBox;
