import "./../App.css";
import ContentBox from "../component/ContentBox";

import Price from "../component/price/price";

import { news } from "./../stories/storeNews";
import parse from "html-react-parser";
// https://reactrouter.com/en/main/hooks/use-params
import { useParams, Link } from "react-router-dom";

import "./stylePages.css";

function Events({ request }) {
  let { ticker, url } = useParams();

  const event = news.getNew(ticker, url);
  // const  cost = price(event.instrument);


  return (
    <ContentBox title={event.title} ticker={event.instrument.name}>
      <div className="event-head">
        <div className="event-head__name">
          <div className="event-head__name-ticker">
            <Link
              to={"/" + event.instrument.type + "/" + event.instrument.ticker}
            >
              {event.instrument.name}
            </Link>
          </div>

          <Price cost={event.instrument} />
        </div>

        <div className="event-head__event">{event.event}</div>
      </div>
      <div className="page-text">{parse(event.fulltext)}</div>
      <div className="event-date">{event.date}</div>
    </ContentBox>
  );
}

// https://drive.google.com/drive/folders/102GkU_lXWxmWmonuF5kc2E5wS30Uw2VR
export default Events;
