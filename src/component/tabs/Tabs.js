 
import {

  Link
} from "react-router-dom";

import './styleTabs.css';
import { useState } from "react";
 


const objects = [
  {name:'кликай',id:1,hint:''},
  {name:'Бабло',id:2,hint:''},
  {name:'даааааа',id:3,hint:''},
  {name:'Кнопка',id:4}, 
  {name:'Пустышка',id:5,hint:'asdasd'}, 
]
 

function Tabs() {
 
const [activeTab ,setActiveTab] = useState(1);



const onClickTab =(k) =>{ 
  console.log(k)
  setActiveTab(k);
}
const  activeNav = (id) => {
  if (id === activeTab) {
    return "active";
  } else {
    return "nav-link";
  }
}


const titleClass = (props) =>{
  return (props.hint  && props.hint  != "")?"tab-button__title":"tab-button__title_one "; 
}

function Hint(props) {
  return  <div className="tab-button__hint">{props.hint}</div>; 
}


function ObjectRow(props) {
  return  <li className={ activeNav(props.id) }
    onClick={() => onClickTab(props.id)}>
    <div className="tab-button">
      <div className={titleClass(props)}>{props.name}</div> 
      { props.hint  && props.hint != "" ? <Hint hint={props.hint} /> : null }
    </div> 
  </li>;
}



function Info(props) {
  return   <div className="tab-info-block">
              <div className="tab-info"> 
                <div className='tab-info_name'>Изменение цены</div> 
                <div className='tab-info_hint'>за последний год</div> 
              </div>
              <div className="tab-info-price"> 
                  <div className='tab-info-block_name'>-11,49%</div> 
                </div>
    </div> ;
}



  return ( 
    <div className="tabs"> 
         <Info  /> 
        <div className="tab-list"> 
          <ul>
            {objects.map((object, i) => <ObjectRow name={object.name} hint={object.hint} id={object.id} key={i} />)}
          </ul>
        </div>
     </div> 
  );
}

export default Tabs;
