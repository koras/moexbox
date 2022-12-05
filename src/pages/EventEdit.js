 
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

import "./../App.css";
import ContentBox from "../component/ContentBox"; 
import Select from "react-select";
import "./stylePages.css";
import { Editor } from "@tinymce/tinymce-react";
import { eventsName } from "./../constants/general";
import { useParams } from "react-router-dom";
import { news } from "./../stories/storeNews"; 



export const  Events = observer( (  request ) => {
  const sendEvent = (element) => {
    console.log(element);
  };
  let { ticker,url } = useParams();
 
  const editorRef = useRef(null);
  // let { ticker, url } = useParams();

  //const event = news.getNew(ticker, url);
  // const  cost = price(event.instrument);
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      zIndex: 9999,
    }),
    control: (provided) => ({
      ...provided,
      //  marginTop: "5%",
      zIndex: 9999,
    }),
  };

  const callback = (value) => {
    console.log(value.value);
    //  return value
  };


  const textButton = ()=>{
    return 'Предложить изменение';
    return 'Предложить новость';
  }

 

  const options = [
    { value: "blues", label: "Blues" },
    { value: "rock", label: "Rock" },
    { value: "jazz", label: "Jazz" },
    { value: "orchestra", label: "Orchestra" },
  ];
  const [startDate, setStartDate] = useState(new Date());


  const storeNew = news.getNew(ticker,url);


  let event = Object.assign({}, storeNew);
 
 // setStartDate(storeNew.date)
  //onChangeDate(new Date(event.date))
   
const handleDateSelect = (info) =>
{
    console.log(info);
}



  //var a = moment(storeNew.date); 
  let onChangeDate = (date)=>{

    news.setDateEvent(event.id, date)
  //   setStartDate(date)
   // console.log( moment(storeNew.date).format("DD/MM/YYYY"),  event.date);
  //  console.log(el,new Date(el)); 
      //event.date= moment(el).format("DD/MM/YYYY");
     //   console.log( moment(event.date).format("DD-MM-YYYY"),  event.date);
    // setStartDate(el)
     //  (date:el) => setStartDate(date)}
   //  return true;
  }

 
//console.log(a);

  {/* 
      <div className="row-form">
        <div className="row-line-block">
          <div className="form-block-25">
          <label>Тикер:</label>
              <Select
                className="form-select"
                placeholder="Сбербанк(priv)"
                onChange={callback}
                options={options}
                styles={customStyles}
              />
          </div>

          
        </div>
      </div> */}

  let title = "Создание, редактирование событий/новостей";
 // var value = new Date().toISOString();
 
  return (
    <ContentBox title={title}>
      <Form className="form-content">
      <div className="row-form">
          <div className="row-line-block">
              <div className="form-block-25">
              <label>Событие:</label>
              <Select
                defaultValue={event.typeId}
                value={eventsName.filter(function(option) {
                  return option.value === +event.typeId;
                })}
                className="form-select"
                placeholder="Что произошло?"
                 onChange={callback}
                options={eventsName}
                styles={customStyles}
              />
            </div>   *

            <div className="form-block-25">
            <label>Дата события:</label>
              <DatePicker  
              dateFormat='dd/MM/yyyy'
              onChange={onChangeDate} 
              onSelect={handleDateSelect} //when day is clicked
              selected={moment(event.date, 'DD/MM/YYYY').toDate()  }  
              className="form-control" 
           
              />
            </div>
          </div>
        </div>
  
        {/* <div className="row-form">
          <div className="form-block-100">
            <label>Короткое название:</label>
            <Form.Control
              value={event.title}
               placeholder="Сплит акций, выход отчётности за квартал, выплата девидендов" />
          </div>
        </div> */}

        {/* <div className="row-form">
          <div className="form-block-100">
            <label>Источник:</label>
            <Form.Control  value={event.source} placeholder="http://" />
          </div>
        </div> */}
{/* 
        <div className="row-form">
          <div className="form-block-100">
            <label>Короткое описание:</label>
            <Form.Control
              value={event.text}
              as="textarea"
              rows={3}
              placeholder="Объявление девидендов в 135 рублей на акцию"
            />
          </div>
        </div> */}

        {/* <div className="row-form">
          <div className="form-block-100">
            <label>Полное описание:</label>

            <Editor
              apiKey="5kp3x2dadjoph5cgpy61s3ha1kl7h6fvl501s3qidoyb4k6u"
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue={storeNew.fulltext}
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
                  "advlist autolink linkcode paste wordcount",
                ],
                toolbar: "formatselect |  bold italic ",
                content_style:
                  "body {  font-size:17px }",
                paste_as_text: true,
              }}
            />
          </div>
        </div>   */}
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