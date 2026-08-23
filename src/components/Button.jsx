import "./Button.css";

const Button = ({ type = "button", clickHandler, url }) => {
  if (type === "button")
    return (
      <button
        className="inline-block py-5 px-10 rounded-2xl font-bold text-2xl under bg-[var(--gradient-primary)] color-[var(--color-primary-900)] "
        onClick={clickHandler}
      >
        Button Component
      </button>
    );
  if (type === "link") {
    return <a href={url}>LinkComponent</a>;
  }
};

export default Button;
