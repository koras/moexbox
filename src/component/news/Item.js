import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./styleNews.css";

// event: "Новости",
// type: "news",
// ticker: 'btc',
// title_url: 'kurs-ruble',
// instrumentId: 1111,
// date: "12.12.2022",

const getUrl = (props) => {
  return "/event/" + props.ticker + "/" + props.date + "/" + props.title_url;
};
const classNameEvent = (props) => {
  return "news-item-head__divid news-item-head__event_" + props.type;
};

const checkChart = (props) => {
  console.log(props);
  return props.id;
};


function News() {
  const ObjectRow = (props) => {
    return (
      <div className="news-item">
        <div className="news-item-head">
          <div className="news-item-head__date" onClick={()=>{checkChart(props.item.id)}}>{props.item.date}</div>
          <div
            className={classNameEvent(props?.item)}
          ></div>
          <div className="news-item-head__event">{props?.item?.event}</div>
          <div className="news-item-head__title">
            <Link to={()=>{getUrl(props.item)}}>{props.item.title}</Link>
          </div>
        </div>
        <div className="news-item-head__text">{props.item.text}</div>
      </div>
    );
  };

  const news = useSelector((state) => state.counter.news);
  //{count}
  return (
    <div>
      {news.map((item, i) => (
        <ObjectRow key={i} item={item} />
      ))}
    </div>
  );
}

export default News;
