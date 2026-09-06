<<<<<<< HEAD
import {Link} from 'react-router'
=======
import { Link } from 'react-router'
>>>>>>> main

function ColorSchemesExample() {
  return (
    <div>
      <div>
        <div>
          <Link to="/">Navbar</Link>
          <div className="me-auto">
            <Link to="/">
<<<<<<< HEAD
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
=======
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
>>>>>>> main
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorSchemesExample;
