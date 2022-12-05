import "./../App.css";
import ContentBox from "../component/ContentBox";

import { LineMiniTicker } from "../modules/charts/LineMiniTicker";
import { instrument } from "../stories/storeInstrument";
//import parse from "html-react-parser";
// https://reactrouter.com/en/main/hooks/use-params
import {
  // useParams,
  Link,
} from "react-router-dom";

import "./stylePages.css";

function Dashboard() {
  const instruments = instrument.getAll();

  const ObjectRow = (props) => {
    const logo = props.item.images.logo;
    const name = props.item.name;
    //   console.log(props.item.images.logo);

    const getPriceChange = (item) => {
      const price = +item.change;
      if (price >= 0) {
        return "+" + price;
      } else {
        return price;
      }
    };
    const getChangeColor = (item) => {
      const price = +item.change;
      if (price >= 0) {
        return "dashboard-cost-plus";
      } else {
        return "dashboard-cost-minus";
      }
    };

    //  const logo = require(props.item.images.logo).default;
    return (
      <div className="dashboard-item">
        <div className="dashboard-item-image">
          <img alt="" src={`${logo}`} />
        </div>
        <div className="dashboard-item-description">
          <div className="dashboard-item-description-head">
            <div className="dashboard-item-description-head__name">
          <Link to={"/"+props.item.type+"/"+props.item.ticker}>{name}</Link></div>

            <div className="dashboard-item-description-head__price">
              {props.item.price}
              {props.item.currency}
            </div>
          </div>

          <div className="dashboard-item-description-text">
            {props.item.description}
          </div>

          <div className="dashboard-item-description-controll">
            <Link>Следить за тикером</Link>
          </div>
        </div>


        <Link to={"/"+props.item.type+"/"+props.item.ticker}>

        <div className="dashboard-item-change">
          <div className="dashboard-item-chang__chart-info">
            <div className="dashboard-item-chang__chart-info__title">
              Изменение цены
            </div>

            <div className="dashboard-item-chang__chart-info__price">
              <div
                className={
                  "dashboard-chart-info__cost " + getChangeColor(props.item)
                }
              >
                {getPriceChange(props.item)}%
              </div>
              <div className="dashboard-chart-info__cost-time">за год</div>
            </div>
          </div>
          <div className="dashboard-item-chang__chart">
            <LineMiniTicker />
          </div>
        </div>
        </Link>

      </div>
    );
  };
  //const news = useSelector((state) => state.counter.news);

  return (
    <ContentBox hideBorder="true">
      <div>
        {instruments.map((item, i) => (
          <ObjectRow key={i} item={item} />
        ))}
      </div>
    </ContentBox>
  );
}

// https://drive.google.com/drive/folders/102GkU_lXWxmWmonuF5kc2E5wS30Uw2VR
export default Dashboard;
