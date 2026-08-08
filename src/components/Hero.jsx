import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__overlay"></div>
      <div className="hero__content">
        <p className="hero__label">Tech4Pride 2026</p>
        <h1 className="hero__title">Build With Purpose</h1>
        <p className="hero__subtitle">
          Learn frontend development from the ground up.
          <span className="hero__highlight">Applications close Friday.</span>
        </p>
        <div className="hero__actions">
          <a href="#" className="btn btn--primary">
            Apply Now{" "}
          </a>
          <a href="#" className="btn btn--outline">
            {" "}
            Learn More{" "}
          </a>
        </div>
      </div>
      <div className="hero--card">
        <p className="hero--card-label">Cohort starts</p>
        <p className="hero--card-date">January 2026</p>
        <ul className="hero__card-list">
          <li>HTML &amp; CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </div>
    </section>
  );
}

export default Hero;
