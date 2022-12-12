// https://react-bootstrap-v4.netlify.app/getting-started/introduction/
import React, { useState } from "react";
import { observer } from "mobx-react-lite";
// https://reactrouter.com/en/main/hooks/use-params
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
//https://www.npmjs.com/package/react-datepicker
import  { diffWordsWithSpace, diffChars, diffWords } from "diff";
// https://github.com/kpdecker/jsdiff

import "./../../App.css";
import ContentBox from "../../component/ContentBox";

import "./../stylePages.css";
import "./styleInspect.css";
 
import { useNavigate, useParams } from "react-router-dom"; 
import { news } from "../../stories/storeNews";
import { newsInspect } from "./../../stories/storeNewsInspect";
import parse from "html-react-parser";

export const Events = observer((request) => {
  let { hash } = useParams();
  const navigate = useNavigate();

  const changeTypeEvent = (value) => {
    news.changeTypeEvent(storeNew.id, value);
  };

  const textButton = () => {
    return "Предложить изменение";
  };

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

  // получаем редактируемую новость
  const storeNew = newsInspect.getEvent(hash);
  // получаем старое событие если оно есть
  let storeOld = news.getEventDateAndTicker(storeNew.ticker, storeNew.date) 
  console.log(storeNew, storeOld ); 
  if(storeOld === undefined){
    storeOld = {
      text:'',
      title:'',
      date:'',
      source:'',
      event:'',
      fulltext:'',
    }
  }


  const sendEvent = () => {

      const hash = news.saveEvent(news.eventNew);
      navigate("/checkevent/" + news.eventNew.ticker + "/" + hash);
    
  };

  const updateText = (diffTexts) => {
    let result = "";
      console.log(storeOld,diffTexts[0].value,diffTexts.length);
    if( diffTexts.length === 1  ){
      console.log(diffTexts[0].value);
      result = `<span class="diffDefault">${diffTexts[0].value}</span>`;
    }else{ 
      for (const item of diffTexts) {
   
        if (item.added) {
          result += `<span class="diffAdded">${item.value}</span>`;
        } else if (item.removed) {
          result += `<span class="diffRemove">${item.value}</span>`;
        } else {
          result += `<span class="diffDefault">${item.value}</span>`;
        }
      }
      result = result.replace(/\n/g, "<br/>");
    }
    return parse(result);
  };

  const getText = () => {
    const diffTexts = diffWordsWithSpace(storeNew.text, storeOld.text);
    return updateText(diffTexts);
  };

  const getFullText = () => {
    const textNew = storeNew.fulltext
      .replace(/<\/p>/g, "</p>\n")
      .replace(/<\/?[^>]+(>|$)/g, "");
    const textOld = storeOld.fulltext
      .replace(/<\/p>/g, "</p>\n")
      .replace(/<\/?[^>]+(>|$)/g, "");
    const diffTexts = diffWords(textNew, textOld);
    return updateText(diffTexts);
  };

  const getTitle = () => {
    const diffTexts = diffWords(storeNew.title, storeOld.title);
    return updateText(diffTexts);
  };

  const getSource = () => {
    const textOld = storeNew.source;
    const textNew = storeOld.source;
    const diffTexts = diffWords(textNew, textOld);
    let result = "";
    if (diffTexts.length > 1) {
      result += `<span class="diffAdded">${textOld}</span><br>`;
      result += `<span class="diffRemove">${textNew}</span>`;
    } else {
      result = `<span class="diffDefault">${textOld}</span>`;
    }
    return parse(result);
  };

  const getType = () => {
    const textNew = storeNew.event;
    const textOld = storeOld.event;
    const diffTexts = diffWords(textNew, textOld);
    let result = "";
    // console.log(diffTexts);
    if (diffTexts.length > 1) {
      result += `<span class="diffAdded">${textOld}</span>`;
      result += `<span class="diffRemove">${textNew}</span>`;
    } else {
      result = `<span class="diffDefault">${textNew}</span>`;
    }
    return parse(result);
  };

  const getDate = () => {
    const diffTexts = diffChars(storeNew.date, storeOld.date);
    return updateText(diffTexts);
  };

  let title = "Модерирование предложенных изменений";

  return (
    <ContentBox title={title}>
      <Form className="form-content">
        <div className="row-form">
          <div className="row-line-block">
            <div className="form-block-25 inspect-label">
              <label>Событие:</label>
              <div className="row-form_fulltext row-form_text">{getType()}</div>
            </div>

            <div className="form-block-25 inspect-label">
              <label>Дата события:</label>
              <div className="row-form_fulltext row-form_text">{getDate()}</div>
            </div>
          </div>
        </div>

        <div className="row-form">
          <div className="form-block-100">
            <label>Короткое название:</label>
            <div className="row-form_fulltext row-form_text">{getTitle()}</div>
          </div>
        </div>

        <div className="row-form">
          <div className="form-block-100">
            <label>Источник:</label>
            <div className="row-form_fulltext row-form_text">{getSource()}</div>
          </div>
        </div>

        <div className="row-form">
          <div className="form-block-100">
            <label>Короткое описание:</label>
            <div className="row-form_fulltext row-form_text">{getText()}</div>
          </div>
        </div>

        <div className="row-form">
          <div className="form-block-100">
            <label>Полное описание:</label>
            <div className="row-form_fulltext">{getFullText()}</div>
          </div>
        </div>
        <div className="row-form">
          <div className="form-block-100 button-right inspect-buttons">
            <label>Ваше решение:</label>
            <button
              title="После нескольких жалоб текст будет скрыт"
              type="button"
              onClick={sendEvent}
              className="btn btn-danger"
            >
              Пожаловаться
            </button>
            <button
              type="button"
              onClick={sendEvent}
              title="Предложить автору доработать текст"
              className="btn btn-warning"
            >
              На доработку
            </button>
            <button
              title="Текст полностью готов для публикации"
              type="button"
              onClick={sendEvent}
              className="btn btn-success"
            >
              Одобрить
            </button>
          </div>
        </div>
      </Form>
    </ContentBox>
  );
});
// https://drive.google.com/drive/folders/102GkU_lXWxmWmonuF5kc2E5wS30Uw2VR
export default Events;
