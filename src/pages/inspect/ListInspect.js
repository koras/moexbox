import "./../../App.css";
import ContentBox from "./../../component/ContentBox";

import { useNavigate} from "react-router-dom"; 

import { newsInspect } from "./../../stories/storeNewsInspect";
//import parse from "html-react-parser";
// https://reactrouter.com/en/main/hooks/use-params
import {
  // useParams,
  Link,
} from "react-router-dom";

import "./../stylePages.css";


function ListInspect() {
  const navigate = useNavigate();


  const instruments = newsInspect.getAll();



  const goInspect = (item) =>{
      console.log(item.hash)
      navigate("/inspect/" + item.hash);

  }



  const ObjectRow = (props) => {
    const instrument = props.item.instrument;
    const logo = instrument.images.logo;
    const name = instrument.name;

    return (
      <div className="list-inspect">
        <div className="list-inspect-image">
          <img alt="" src={`${logo}`} /> 
          
        </div>
        <div className="list-inspect-description">
          <div className="list-inspect-description-head">
            <div className="list-inspect-description-head__name">
            <Link to={"/"+instrument.type+"/"+instrument.ticker}>{name}</Link>
            <span> : {props.item.title}</span></div>

          <div className=""> 
            <div className="list-inspect-description-head__price">
              {instrument.price}
              {instrument.currency}
              {/* <span> ({props.item.date})</span> */}
            </div>
            </div>


          </div>

          <div className="list-inspect-description-text">
            {props.item.text}
          </div>
          <div className="list-inspect-button button-right inspect-buttons">
            <Link to={"/inspect/" + props.item.hash}>Проверить</Link>
          </div>
        </div>
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
export default ListInspect;
