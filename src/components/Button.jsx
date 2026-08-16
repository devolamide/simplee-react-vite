import "./Button.css";

const Button = ({ type = "button", clickHandler, url }) => {

  if (type === "button")
    return <button className="btn" onClick={clickHandler}>Button Component</button>;
  if (type === "link") {
    return <a href={url}>LinkComponent</a>;
  }
};

export default Button;
