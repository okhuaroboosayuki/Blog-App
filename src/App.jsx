import "./assets/css/style.css";
import HomeNavBar from "./components/HomeNavBar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  return (
    <section className="home_page">
      <section className="nav">
        <HomeNavBar />
      </section>

      <section className="content">
        <Hero />
        content goes here
      </section>

      <section className="footer">
        <Footer />
      </section>
    </section>
  );
}

export default App;
