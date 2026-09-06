import {Link} from 'react-router'

function ColorSchemesExample() {
  return (
    <div>
      <div>
        <div>
          <Link to="/">Navbar</Link>
          <div className="me-auto">
            <Link to="/">
              Home
            </Link>
            <Link to="/hero">
              Hero
            </Link>
            <Link to="/backend-data">
              Backend Data
            </Link>
            <Link to="/form">
              Form
            </Link>
            <Link to="/data-page">
              Data Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorSchemesExample;
