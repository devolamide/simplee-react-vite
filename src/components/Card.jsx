import "./Card.css";

// const initialData = {
//   name: "Frontend Development",
//   text: "Architecting the web with intention. Master the core principles of CSS and the Box Model.",
//   cta: "Enroll before Friday.",
//   title: "Build With Purpose",
//   price: "₦15,000",
// };

function Card({ cardData }) {
  // const {cardData} = props
  // console.log("The props is ", cardData);
  //   const { name, text, title, price, cta } = cardData;

  function clickHandler(url, e) {
    console.log("The url is ", url);
    console.log("The event is ", e);
  }

  return (
    <article className="card">
      <div className="card__badge">New</div>
      <div className="card__image-wrapper">
        <img
          className="card__image"
          src={cardData.url}
          alt="A laptop screen displaying clean web development code on a work table."
        />
      </div>
      <div className="card__body">
        <p className="card__category">{cardData.name}</p>
        <h2 className="card__title" id="main-card-title">
          {cardData.title}
        </h2>
        <p className="card__description">
          {cardData.text}
          <span className="card__highlight">{cardData.cta}</span>
        </p>
        <div className="card__footer">
          <span className="card__price">{cardData.price}</span>
          <button
            onClick={(buttonEvent) => clickHandler(cardData.link, buttonEvent)}
            className="card__btn"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </article>
  );
}
export default Card;
