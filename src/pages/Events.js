
import './../App.css';
import ContentBox from '../component/ContentBox'; 
import {  useDispatch,useSelector } from 'react-redux'; 
import News from "../component/news/Item";
import {  getEvent } from '../slices/newsSlice';

// https://reactrouter.com/en/main/hooks/use-params
import {  useParams } from "react-router-dom";

import './stylePages.css';

function Events({ request}) {

  const params = useParams();

  const dispatch = useDispatch();

 // dispatch(getEvent(params.ticker,params.url))

  //const newsItem = useSelector((state) => state.newsItem.newsItem);

  //console.log(newsItem)
 
 //(params.ticker,params.url)
//ticker/:url

  // /events/btc/dividend-dividends-12.12.2022
 //  console.log(params);
  
  // const handleTimeChange = (params)=>{
  //   console.log('handleTimeChange',params);
  // }

 

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
