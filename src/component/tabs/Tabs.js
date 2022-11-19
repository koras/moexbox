 


import './styleTabs.css';
import { useState } from "react";
 

//import {  increment } from '../../slices/counterSlice';

function Tabs(props) {
 
const [activeTab ,setActiveTab] = useState(1);
const [hintInfo ,setHintInfo] = useState('Время изменения');
const [changes ,setСhanges] = useState(-24);


 

const onClickTab =(k) =>{  
  setActiveTab(k); 
 let info =   props.objects.filter(item=>{
     return item.id ===k;
   })
   setСhanges(info[0].changes);
   setHintInfo(info[0].hintInfo);
   props.onTimeChange(info[0].time); 
}
const  activeNav = (id) => {
  if (id === activeTab) {
    return "active";
  } else {
    return "tab-link";
  }
}


const titleClass = (props) =>{
  return (props.hint  && props.hint  !== "")?"tab-button__title":"tab-button__title_one "; 
}

function Hint(props) {
  return  <div className="tab-button__hint">{props.hint}</div>; 
}


function ObjectRow(propsRows) {
  return  <li className={ activeNav(propsRows.id) }
    onClick={() => onClickTab(propsRows.id)}>
    <div className="tab-button">
      <div className={titleClass(propsRows)}>{propsRows.name}</div> 
      { propsRows.hint  && propsRows.hint !== "" ? <Hint hint={propsRows.hint} /> : null }
    </div> 
  </li>;
}


function Info() { 
  return   <div className="tab-info-block">
              <div className="tab-info"> 
                <div   className='tab-info_name'>{props.infoBox.title}</div> 
                <div className='tab-info_hint'>{hintInfo}</div> 
              </div>
              <div className="tab-info-price"> 
                  <div className='tab-info-block_name minus'>{changes}%</div> 
                </div>
    </div> ;
}



  return ( 
    <div className="tabs"> 
         <Info  /> 
        <div className="tab-list"> 
          <ul>
            {props.objects.map((object, i) => <ObjectRow name={object.name} hint={object.hint} id={object.id} key={i} />)}
          </ul>
        </div>
     </div> 
  );
}

export default Tabs;
