import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <nav>
      <ul className="navList">
        <li className="navItem">
          {/* Home page link */}
          <Link to="/" className={currentPage === "/" ? "activeLink" : "link"}>
            ABOUT ME
          </Link>
        </li>
        <li className="navItem">
          {/* Portfolio page link */}
          <Link
            to="/Portfolio"
            className={currentPage === "/Portfolio" ? "activeLink" : "link"}
          >
            PORTFOLIO
          </Link>
        </li>
        <li className="navItem">
          {/* Contact page link */}
          <Link
            to="/Contact"
            className={currentPage === "/Contact" ? "activeLink" : "link"}
          >
            CONTACT
          </Link>
        </li>
        <li className="navItem">
          {/* Resume page link */}
          <Link
            to="/Resume"
            className={currentPage === "/Resume" ? "activeLink" : "link"}
          >
            RESUME
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
