 
// https://react-bootstrap-v4.netlify.app/getting-started/introduction/
import React, { useRef,useState } from "react";
import { observer } from "mobx-react-lite";
// https://reactrouter.com/en/main/hooks/use-params
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
//https://www.npmjs.com/package/react-datepicker
import DatePicker from "react-datepicker"; 
import Moment from "react-moment"; 
import moment from 'moment';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./../../App.css";
import ContentBox from "./../../component/ContentBox"; 
import Select from "react-select";
import "./../stylePages.css";
import { Editor } from "@tinymce/tinymce-react";
import { eventsName } from "./../../constants/general";
import { useNavigate,useParams  } from "react-router-dom";
import { createBrowserHistory } from "history";
import { news } from "./../../stories/storeNews";  
import { instrument } from "./../../stories/storeInstrument";
import { getByTitle } from "@testing-library/react"; 



export const  Events = observer( (  request ) => {

  let  storeNew = {
    date: moment().format("DD/MM/YYYY")
  };
  let { ticker,url } = useParams(); 
  const navigate = useNavigate();
 
  const changeTypeEvent = (value) => {
    news.changeTypeEvent( storeNew.id, value)
  };

 

  const textButton = ()=>{
    return 'Предложить изменение'; 
  }

  const options = [
    { value: "blues", label: "Blues" },
    { value: "rock", label: "Rock" },
    { value: "jazz", label: "Jazz" },
    { value: "orchestra", label: "Orchestra" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [isInvalidTitle, setIsInvalidTitle] = useState(false);
  const [isInvalidSource, setIsInvalidSource] = useState(false);
  const [isInvalidText, setIsInvalidText] = useState(false);

 


  console.log(ticker,url);

  if(url === undefined){
    storeNew.instrument = instrument.getSingle(ticker);
    console.log( storeNew );
  }else{
    storeNew = news.getNew(ticker,url); 
  }
  let event = Object.assign({}, storeNew);

const handleDateSelect = (info) =>
{

    console.log(info);
}

// ПРоверяем условия
const validation = () => {
  setIsInvalidTitle(false);
  setIsInvalidSource(false); 
  setIsInvalidText(false);
  console.log(news.eventNew);
  if(news.eventNew.title  === undefined|| news.eventNew.title.length < 10){ 
   setIsInvalidTitle(true);
  }
  if(news.eventNew.source  === undefined || news.eventNew.source.length < 10){ 
    setIsInvalidSource(true);
  }
  if(news.eventNew.text === undefined || news.eventNew.text.length < 10){ 
    setIsInvalidText(true);
  }

  return !(isInvalidTitle && isInvalidSource && isInvalidText);

};


const getDate = () => {
 
  if(storeNew.id){ 
    return moment(storeNew.date, 'DD/MM/YYYY').toDate()  ;
    } 
    if(news.eventDate ===''){ 
      return moment().toDate()  ;
    }else{
      return moment(news.eventDate, 'DD/MM/YYYY').toDate()  ;
    }
}
 
const sendEvent = () => {
  
  if(news.eventNew.id === undefined){
    news.eventNew.date = news.eventDate
  }
  console.log(news.eventNew);
  setOpen(true)
  news.eventNew.ticker = ticker;
 
  if(validation()){
    const hash = news.saveEvent(news.eventNew);
 
    console.log('sendEvent',news.eventNew,hash)
    return;

    navigate("/checkevent/"+news.eventNew.ticker+'/'+hash);
  }
};
const getTitle = () => {
  console.log('sendEvent')
  if(storeNew.id){ 
    return storeNew.instrument.name + " : Редактирование событий/новостей";
  }
  return storeNew.instrument.name + " : Добавление события";
};
 
 
const getType = (item) => {
  if(storeNew.id){ 
    console.log('getType',item,storeNew.typeId)
      return   eventsName.filter(function(option) {
      return option.value === +storeNew.typeId;
    })
  }
};
 
const getValidateType= (item) => {
 return  +storeNew.typeId !==0;
}

const [open, setOpen] = useState(false);
const closeModal = () => setOpen(false);

  return (
    <ContentBox title={getTitle()}>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <a className="close" onClick={closeModal}>
            &times;
          </a>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni
          omnis delectus nemo, maxime molestiae dolorem numquam mollitia, voluptate
          ea, accusamus excepturi deleniti ratione sapiente! Laudantium, aperiam
          doloribus. Odit, aut.
        </div>
      </Popup>


      <Form className="form-content">
      <div className="row-form">
          <div className="row-line-block">
              <div className="form-block-25">
              <label>Событие:</label>{storeNew.value}

              <Select
               styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: getValidateType() ? 'grey' : 'red',
                }),
              }} 
                defaultValue={getType()}
                value={getType()}
                className="form-select react-select"
                placeholder="Что произошло?"
                onChange={(value)=>news.changeTypeEvent( storeNew.id, value)}
                options={eventsName} 
              />
            </div>  

            <div className="form-block-25">
            <label>Дата события:</label>
              <DatePicker  
              required={true}
              dateFormat='dd/MM/yyyy'
              onChange={date=>news.setDateEvent(storeNew.id, date)} 
              onSelect={handleDateSelect} //when day is clicked
              selected={getDate()}  
              className="form-control"  />
            </div>
          </div>
        </div>
        
         <div className="row-form">
          <div className="form-block-100">
            <label>Короткое название:</label>
 
            <Form.Control
                onChange={text => news.changeEventName(storeNew.id,text.target.value)} 
                value={storeNew.title}
                type="text" 
                label="sdasd"
                aria-errormessage="asdasd"
                maxLength={256}
                errormessage="sadasdsd"
                 isInvalid={isInvalidTitle}
               placeholder="Сплит акций, выход отчётности за квартал, выплата девидендов" />

  
          </div>
        </div> 

         <div className="row-form">
          <div className="form-block-100">
            <label>Источник:</label>
            <Form.Control  
              isInvalid={isInvalidSource}
             onChange={text => news.changeEventSource(storeNew.id,text.target.value)} 
             value={event.source} 
             placeholder="http://" />
          </div>
        </div> 
 
        <div className="row-form">
          <div className="form-block-100">
            <label>Короткое описание:</label>
            <Form.Control

              isInvalid={isInvalidText}

              onChange={text => news.changeEventText(storeNew.id,text.target.value)} 
              value={event.text}
              as="textarea"
              rows={3}
              placeholder="Объявление девидендов в 135 рублей на акцию"
            />
          </div>
        </div> 

         <div className="row-form">
          <div className="form-block-100">
            <label>Полное описание:</label>

            <Editor
              apiKey="5kp3x2dadjoph5cgpy61s3ha1kl7h6fvl501s3qidoyb4k6u"
              initialValue={storeNew.fulltext}
               onEditorChange={text => news.changeEventFulltext(text)} 
              placeholder="Подробная новость или событие"
              init={{
                extended_valid_elements: "br[*],p,b,",
                entity_encoding: "raw",
                selector: "textarea",
                height: 400,
                width: "100%",
                menubar: false,
                resize: false,
                branding: false,
                plugins: [
                  " wordcount",
                ],
                toolbar: "formatselect |  bold italic ",
                content_style:
                  "body {  font-size:17px }",
                paste_as_text: true,
              }}
            />
          </div>
        </div>   
        <div className="row-form">
          <div className="form-block-100 button-right">
            <button type="button"  onClick={sendEvent} className="btn btn-primary">{textButton()}</button>
          </div>
        </div>
      </Form>
         

    </ContentBox>
  );
}
);
// https://drive.google.com/drive/folders/102GkU_lXWxmWmonuF5kc2E5wS30Uw2VR
export default Events;

 