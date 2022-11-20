
import './../App.css';
import ContentBox from '../component/ContentBox'; 

// https://reactrouter.com/en/main/hooks/use-params
//import {  useParams } from "react-router-dom";

import './stylePages.css';

function Events({ request}) {
 
 
 

  return (
      <ContentBox title="График изменения цен Биткоина"> 
        <div className='page-text'>  
            {/* <News /> */} 
        </div>
      </ContentBox>
  );
}

 // https://drive.google.com/drive/folders/102GkU_lXWxmWmonuF5kc2E5wS30Uw2VR
export default Events;
