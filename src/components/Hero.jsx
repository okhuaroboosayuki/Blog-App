import "../assets/scss/hero.scss";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";

function Hero() {
  return (
    <Swiper modules={[Pagination, A11y]} slidesPerView={1} className="hero">
      <SwiperSlide className="hero_wrapper">
        <div
          className="hero_left"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dg0sck16v/image/upload/v1682984264/Article%20Images/alina-karpenko-03RUtFXdu1w-unsplash_ntvjo3.jpg')",
          }}
        ></div>

        <div className="hero_right">
          <article className="hero_article">
            <div className="hero_article_container">
              <div className="hero_article_category">
                <span className="hero_article_category_name">
                  <a href="#">Category 1</a>
                </span>
              </div>

              <h2 className="hero_article_title">
                <a href="#">
                  Refreshing Green Smoothie Recipe with Citrus Twist
                </a>
              </h2>

              <p className="hero_article_text">
                Looking for a tasty and nutritious way to start your day? Our
                green smoothie recipe with a refreshing citrus twist has got you
                covered! This drink is packed with vitamins, minerals, and
                antioxidants that can help boost your immune system, support
                digestion, and improve your overall health.
              </p>

              <a href="#" className="read_more">
                read more
              </a>
            </div>
          </article>
        </div>
      </SwiperSlide>

      <div className="scroll_pagination">
        <div className="scroll_pagination_top">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>

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
  );
}

export default Hero;
