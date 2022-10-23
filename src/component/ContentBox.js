 
import {

  Link
} from "react-router-dom";
import Menu from './../component/menu/Menu';
import Header from './../component/Header';

const headerClass = {  
  width: '100%',
  background: '#eeeeee',
  borderBottom: '#C5C5C5 1px solid',
  margin: '0px auto 10px  auto',
}
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
  width: '250px', 
};


const bodyClass = {   
  background: '#38767A', 
  flexGrow: 1,
};


function ContentBox({content, children}) {
  return (
    <div  >
      
      <div style={headerClass}> 
       <Header/>
    
      </div>

      <div style={contentClass}> 
            <div style={mainClass}>
              <div  style={menuClass}>
                <Menu/> 
              </div>
            <div  style={bodyClass}>
                  {children}
            </div>
          </div>
      </div>
    </div>
  );
}

export default ContentBox;
