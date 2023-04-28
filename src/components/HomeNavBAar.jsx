import '../assets/css/navbar.css';
import SearchIcon from '@mui/icons-material/Search';

function HomeNavBar() {
  return (
    <nav className="nav-bar">
      <h1 className="logo">
        <a href="#">Blog</a>
      </h1>
      <ul className="nav-list">
        <a href="#" className="nav-item">
          Home
        </a>
        <a href="#" className="has-children nav-item">
          Category
        </a>
        <a href="#" className="has-children nav-item">
          Blog
        </a>
        <a href="#" className="nav-item">
          About
        </a>
        <a href="#" className="nav-item">
          Contact
        </a>
      </ul>

      {/* <>{searchState.search}</> */}
      {/* Search input placed above the search icon */}

      <div className="nav-search">
        <SearchIcon className="search-icon" />
      </div>
    </nav>
  );
}

export default HomeNavBar;
