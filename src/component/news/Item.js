import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./styleNews.css";

function Menu() {
  const ObjectRow = (props) => {
    return (
      <div  className="news-item">
        <div className="news-item-head">
          <div  className="news-item-head__date">{props.item.date}</div>
          <div className={"news-item-head__divid news-item-head__event_"+props.item.type}></div>
          <div className="news-item-head__event">{props.item.event}</div>
          <div className="news-item-head__title">{props.item.title}</div>
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

export default Menu;
