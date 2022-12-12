import "./../App.css";
import ContentBox from "../component/ContentBox";
import { LineTicker } from "../modules/charts/LineTicker";
import Tabs from "../component/tabs/Tabs";
import { News } from "../component/news/Item";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";


import "./stylePages.css";

function ChartTicker() {
  const navigate = useNavigate();
  let { ticker } = useParams();

  const handleTimeChange = (params) => {
    console.log("handleTimeChange", params);
  };


  const getUrlEdit = (ticker) => { 
    navigate("/events/new/" + ticker + "/");
  };

  const objects = [
    {
      name: "Всё время",
      id: 1,
      hint: "",
      hintInfo: "За всю историю",
      changes: "+212",
      time: 0,
    },
    {
      name: "Год",
      id: 2,
      hint: "",
      hintInfo: "за последний год",
      changes: "+15",
      time: 31556926,
    },
    {
      name: "месяц",
      id: 3,
      hint: "",
      hintInfo: "за последний месяц",
      changes: "+35",
      time: 2629743,
    },
    {
      name: "Неделя",
      id: 4,
      hint: "",
      hintInfo: "за неделю",
      changes: "-15",
      time: 86400,
    },
    {
      name: "День",
      id: 5,
      hint: "",
      hintInfo: "в течении суток",
      changes: "+25",
      time: 86400,
    },
  ];
  const infoBox = {
    title: "Изменение цены",
    hintInfo: "в течении суток",
    changes: "+212",
  };
  const addEvent = () => {};

  return (
    <ContentBox title="" hideBorder={true}>
      <div className="graphic-head">
        <div className="graphic-head__title">Биткоин:График событий</div>
        <div className="graphic-head__button">
          {/* <button
            title="Текст полностью готов для публикации"
            type="button"
            onClick={addEvent}
            className="btn btn-success btn-sm"
          >
            Добавить событие
          </button> */}

          
          <Button   size="small" onClick={() => getUrlEdit(ticker)} variant="outlined">Добавить событие</Button>


        </div>
      </div>
      <div className="boxContent">
        <div className="graphic-tab">
          <Tabs
            onTimeChange={handleTimeChange}
            objects={objects}
            infoBox={infoBox}
          />
          <LineTicker ticker={ticker} />
        </div>
        <div className="page-text">
          <News />
        </div>
      </div>
    </ContentBox>
  );
}

// https://drive.google.com/drive/folders/102GkU_lXWxmWmonuF5kc2E5wS30Uw2VR
export default ChartTicker;
