 
// https://react-bootstrap-v4.netlify.app/getting-started/introduction/
import React, { useRef,useState } from "react";
import { observer } from "mobx-react-lite";
// https://reactrouter.com/en/main/hooks/use-params
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

import "./../../App.css";
import ContentBox from "../../component/ContentBox"; 

import "./../stylePages.css";
import { useNavigate,useParams  } from "react-router-dom";
import { news } from "../../stories/storeNews";  



export const  EventEditComplete = observer( (  request ) => {


  let { ticker,hash } = useParams(); 
  
  const navigate = useNavigate();
 
  const textButton = ()=>{
    return 'Предложить изменение'; 
  }
  const goTicker= ()=>{
    navigate("/crypto/"+ticker);
  }


  const goTickerEdit= ()=>{
    navigate("/checkevent/edit/"+ticker+'/'+hash);
  }



  const options = [
    { value: "blues", label: "Blues" },
    { value: "rock", label: "Rock" },
    { value: "jazz", label: "Jazz" },
    { value: "orchestra", label: "Orchestra" },
  ];


  let title = "Создание, редактирование событий/новостей";

 
  return (
    <ContentBox title={title}>
      <Form className="form-content">
      <div className="row-form">
          <div className="row-line-block">
            
          <p> Событие отправлено на расмотрение другими пользователями.</p>
          <p> Его можно посмотреть здесь или сравнить с текущим событием здесь</p>
          <p> Только после одобрением события сообществом, событие будет опубликовано или отредактировано</p>
             
          </div>
        </div>

        <div className="row-form">
          <div className="form-block-100 button-right">
            <button type="button"  onClick={goTicker} className="btn btn-primary">Перейти к инструменту</button>
            <button type="button"  onClick={goTickerEdit} className="btn btn-primary">Вернуться к редактированию</button>
          </div>
        </div>
      </Form>
    </ContentBox>
  );
}
);
// https://drive.google.com/drive/folders/102GkU_lXWxmWmonuF5kc2E5wS30Uw2VR
export default EventEditComplete;

 