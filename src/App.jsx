import "./assets/css/style.css";
import HomeNavBar from "./components/HomeNavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="home_page">
      <div className="nav">
        <HomeNavBar />
      </div>

      <div className="content">
        content goes here
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
