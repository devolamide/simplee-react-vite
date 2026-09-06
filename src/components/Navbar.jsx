import { Link } from 'react-router'

function ColorSchemesExample() {
  return (
    <div>
      <div>
        <div>
          <Link to="/">Navbar</Link>
          <div className="me-auto">
            <Link to="/">
              <span>Home</span>
            </Link>
            <Link to="/hero">
              <span>Hero</span>
            </Link>
            <Link to="/backend-data">
              <span>Backend Data</span>
            </Link>
            <Link to="/form">
              <span>Form</span>
            </Link>
            <Link to="/data-page">
              <span>Data Page</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorSchemesExample;
