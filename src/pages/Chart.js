
import './../App.css';
import ContentBox from '../component/ContentBox'; 
import {LineTest} from "../modules/charts/LineTest";
import Tabs from "../component/tabs/Tabs";
import News from "../component/news/Item";

import './stylePages.css';

function Chart() {

  const handleTimeChange = (params)=>{
    console.log('handleTimeChange',params);
  }


  const objects = [
 //   {name:'5 лет',id:1,hint:'',hintInfo:'За последние 5 лет',changes:'+212',time:157784630},
    {name:'Всё время',id:1,hint:'',hintInfo:'За всю историю',changes:'+212',time:0},
    {name:'Год',id:2,hint:'',hintInfo:'за последний год',changes:'+15',time:31556926},
    {name:'месяц',id:3,hint:'',hintInfo:'за последний месяц',changes:'+35',time:2629743},
    {name:'Неделя',id:4,hint:'',hintInfo:'за неделю',changes:'-15',time:86400}, 
    {name:'День',id:5,hint:'',hintInfo:'в течении суток',changes:'+25',time:86400}, 
  ]
  const infoBox =  {title:'Изменение цены',hintInfo:'в течении суток',changes:'+212'};

  return (
      <ContentBox title="График изменения цен Биткоина"> 
       <div className='graphic-tab'>
          <Tabs onTimeChange={handleTimeChange} objects={objects} infoBox={infoBox}/>
          <LineTest    />
        </div>

        <div className='page-text'> 
            <News />
        </div>
      </ContentBox>
  );
}

 // https://drive.google.com/drive/folders/102GkU_lXWxmWmonuF5kc2E5wS30Uw2VR
export default Chart;
