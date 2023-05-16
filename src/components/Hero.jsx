import "../assets/scss/hero.scss";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { A11y, Navigation, Pagination, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useFetch from "../hooks/useFetch";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/effect-fade";
import "animate.css";
import { Link } from "react-router-dom";

function Hero() {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/blogs?populate=media&sort=createdAt:desc&pagination[page]=1&pagination[pageSize]=3"
  );

  const pagination = {
    el: ".scroll_pagination_top",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, A11y, EffectFade]}
        pagination={pagination}
        speed={1000}
        allowTouchMove={false}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        className="hero"
      >
        {loading ? (
          <div>loading...</div>
        ) : !loading && error ? (
          <div>error!!!</div>
        ) : (
          <>
            {data.data.map((blog) => (
              <SwiperSlide key={blog.id} className="hero_wrapper">
                <div
                  className="hero_left"
                  style={{
                    backgroundImage: `url(http://localhost:1337${blog.attributes.media.data.attributes.url})`,
                  }}
                ></div>

                <div className="hero_right">
                  <article className="hero_article">
                    <div className="hero_article_container">
                      <div className="hero_article_category">
                        <span className="hero_article_category_name">
                          <Link to={`/categories/${blog.attributes.category}`}>
                            {blog.attributes.category}
                          </Link>
                        </span>
                      </div>

                      <h2 className="hero_article_title">
                        <Link to={`/blogs/${blog.attributes.title}`}>
                          {blog.attributes.title}
                        </Link>
                      </h2>

                      <p className="hero_article_text">
                        {blog.attributes.description}
                      </p>

                      <Link
                        to={`/blogs/${blog.attributes.title}`}
                        className="read_more"
                      >
                        read more
                      </Link>
                    </div>
                  </article>
                </div>
              </SwiperSlide>
            ))}
          </>
        )}

        <div className="scroll_pagination">
          <div className="scroll_pagination_top"></div>

          <div className="scroll_pagination_bottom">
            <a href="#">
              <div>
                <span>Scroll</span>
              </div>
              <ArrowDownwardIcon className="arrow_down" />
            </a>
          </div>
        </div>
      </Swiper>
    </>
  );
}

export default Hero;
