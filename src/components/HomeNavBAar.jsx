import "../assets/scss/navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';

function HomeNavBar() {
  return (
    <nav className="nav_bar">
      <h1 className="logo">
        <a href="#">Blog</a>
      </h1>

      <div className="nav_list">
        <ul>
          <li>
            <a href="#" className="nav_item">
              Home
            </a>
          </li>
          <li className="has_children">
            <a href="#" className="nav_item">
              Categories
            </a>
            <KeyboardArrowDownIcon className="arrow_down" />
          </li>
          <li className="has_children">
            <a href="#" className="nav_item">
              Blog
            </a>
            <KeyboardArrowDownIcon className="arrow_down" />
          </li>
          <li>
            <a href="#" className="nav_item">
              About
            </a>
          </li>
          <li>
            <a href="#" className="nav_item">
              Contact
            </a>
          </li>
        </ul>

        {/* <>{searchState.search}</> */}
        {/* Search input placed above the search icon */}
      </div>

      <div className="nav_extras">
        <SearchIcon className="search_icon" />
        <MenuIcon className="mobile_menu_bar" />
      </div>

      <div className="mobile_menu">
        <CloseIcon className="close_icon" />
        <ul>
          <li>
            <a href="#" className="nav_item">
              Home
            </a>
          </li>
          <li className="mobile_menu_has_children">
            <a href="#" className="nav_item">
              Categories
            </a>
            <KeyboardArrowDownIcon className="arrow_down" />
          </li>
          <li className="mobile_menu_has_children">
            <a href="#" className="nav_item">
              Blog
            </a>
            <KeyboardArrowDownIcon className="arrow_down" />
          </li>
          <li>
            <a href="#" className="nav_item">
              About
            </a>
          </li>
          <li>
            <a href="#" className="nav_item">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default HomeNavBar;
