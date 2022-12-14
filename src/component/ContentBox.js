// import {

//   Link
// } from "react-router-dom";
import Menu from "./../component/menu/Menu";
import Header from "./header/Header";

import "./styleContent.css";

const contentClass = {
  alignItems: "center",
  width: "1200px",
  margin: "auto",
};

const mainClass = {
  width: "1200px",
  display: "flex",
  flexDirection: "row",
};

const menuClass = {
  width: "245px",
  padding: "0px 5px 0px 0px",
};

function ContentBox({ content, children, ...params }) {
  let className = "boxContent";
  if (params.hideBorder) {
    className += " boxContent-hide";
  }

  const getHead = () => {
    let result = "";
    if (params.ticker || params.title) {
      result = (
        <div className="titleClass">
          <h2>
            {" "}
            {params.ticker ? params.ticker + " : " : ""} {params.title}
          </h2>
        </div>
      );
    }
    return result;
  };

  return (
    <div>
      <div className="headerClass">
        <Header />
      </div>
      <div style={contentClass}>
        <div style={mainClass}>
          <div style={menuClass}>
            <Menu />
            <div className="blockHr"></div>
          </div>
          <div className="mainContent">
            {getHead()}
            <div className={className}>{children}</div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-content">

          
        </div>
      </div>
    </div>
  );
}

export default ContentBox;
