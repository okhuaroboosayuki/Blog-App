import "../assets/scss/hero.scss";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { A11y, Navigation, Pagination, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import 'swiper/scss/effect-fade';
import "animate.css";

function Hero() {
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
                  green smoothie recipe with a refreshing citrus twist has got
                  you covered! This drink is packed with vitamins, minerals, and
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

        <SwiperSlide className="hero_wrapper">
          <div
            className="hero_left"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dg0sck16v/image/upload/v1682984256/Article%20Images/tyler-nix-Y1drF0Y3Oe0-unsplash_rziml8.jpg')",
            }}
          ></div>

          <div className="hero_right">
            <article className="hero_article">
              <div className="hero_article_container">
                <div className="hero_article_category">
                  <span className="hero_article_category_name">
                    <a href="#">Category 2</a>
                  </span>
                </div>

                <h2 className="hero_article_title">
                  <a href="#">
                    Step Up Your Cardio Game with These Stair Running Workouts.
                  </a>
                </h2>

                <p className="hero_article_text">
                  With stair running, you can challenge your cardiovascular
                  system, boost your leg strength, and improve your overall
                  fitness level. Plus, it is a low-impact workout that can be
                  tailored to your fitness level and goals.
                </p>

                <a href="#" className="read_more">
                  read more
                </a>
              </div>
            </article>
          </div>
        </SwiperSlide>

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
