import { Link, useLocation } from "react-router-dom";


function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <nav>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link
            to="/"
            style={currentPage === "/" ? styles.activeLink : styles.link}
          >
            ABOUT ME
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link
            to="/Portfolio"
            style={
              currentPage === "/Portfolio" ? styles.activeLink : styles.link
            }
          >
            PORTFOLIO
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link
            to="/Contact"
            style={currentPage === "/Contact" ? styles.activeLink : styles.link}
          >
            CONTACT
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link
            to="/Resume"
            style={currentPage === "/Resume" ? styles.activeLink : styles.link}
          >
            RESUME
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  navList: {

    display: "flex", // Display the items inline
    listStyleType: "none", // Remove default bullet points from ul
    padding: 0, // Remove default padding
    margin: 0, // Remove default margin

    
  },
  navItem: {
    marginRight: "20px",// Add space between items
    color: "white"
  },
  link: {
    textDecoration: "none", // No underline when inactive
    color: "#041323", // Link color
    fontWeight: "bold", // Bold text
  },
  activeLink: {
    textDecoration: "underline", // Underline when active
    color: "#041323", // Same color
    fontWeight: "bold", // Bold text
  },
};




export default Navigation;
