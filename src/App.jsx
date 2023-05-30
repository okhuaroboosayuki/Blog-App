import "./assets/css/style.css";
import "./assets/scss/app.scss";
import HomeNavBar from "./components/HomeNavBar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Masonry } from "@mui/lab";
import useFetch from "./hooks/useFetch";
import { Link } from "react-router-dom";

function App() {
  const { loading, error, data } = useFetch(
    "https://blog-app-k79o.onrender.com/api/blogs?populate=media&sort=createdAt:desc"
  );

  return (
    <section className="home_page">
      <section className="nav">
        <HomeNavBar />
      </section>

      <section className="content">
        <Hero />
        {loading ? (
          <div>loading...</div>
        ) : !loading && error ? (
          <div>error!!!</div>
        ) : (
          <div className="masonry_wrapper">
            <Masonry columns={4} spacing={4}>
              {data.data.map((blog) => (
                <div className="blog" key={blog.id}>
                  <div className="blog_image">
                    <Link to={`/blogs/${blog.attributes.title}`}>
                      <img
                        src={blog.attributes.media.data.attributes.formats.small.url}
                        alt={
                          blog.attributes.media.data.attributes.alternateText
                        }
                      />
                    </Link>
                  </div>

                  <div className="blog_category">
                    <span>{blog.attributes.category}</span> <span>BY:</span>{" "}
                    <span>Admin</span>
                  </div>

                  <div className="blog_content">
                    <Link to={`/blogs/${blog.attributes.title}`}>
                      <h1>{blog.attributes.title}</h1>
                    </Link>
                    <p>{blog.attributes.description}</p>
                  </div>

                  <Link
                    to={`/blogs/${blog.attributes.title}`}
                    className="read_more"
                  >
                    read more
                  </Link>
                </div>
              ))}
            </Masonry>
          </div>
        )}
      </section>

      <section className="footer">
        <Footer />
      </section>
    </section>
  );
}

export default App;
