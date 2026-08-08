import "./Button.css";
// import { useContext } from "react";
// import { AppDataContext } from "./AppDataContext";

const Button = ({ type = "button", clickHandler, url }) => {
  // const appData = useContext(AppDataContext);
  // console.log("values ", appData);

  if (type === "button")
    return <button className="btn" onClick={clickHandler}>Button Component</button>;
  if (type === "link") {
    return <a href={url}>LinkComponent</a>;
  }
};

export default Button;
