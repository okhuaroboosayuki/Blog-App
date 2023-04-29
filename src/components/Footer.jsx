import "../assets/scss/footer.scss";
import Newsletter from "./Newsletter";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import CopyrightRoundedIcon from "@mui/icons-material/CopyrightRounded";

function Footer() {
  return (
    <footer className="footer_container">
      <Newsletter />

      {/* <div className="footer_bottom">
        <div className="footer_bottom_left">
          <div>
            <h3 className="title">Vitality Avenue</h3>
            <p className="footer_bottom_left_paragraph">
              Welcome to Vitality Avenue, the ultimate destination for health
              and lifestyle enthusiasts. Our blog provides expert advice and
              practical tips on nutrition, fitness, mental wellness, and more.
              Discover new ways to boost your energy, improve your well-being,
              and live your best life. Join our community today and start your
              journey towards optimal health and vitality.
            </p>

            <ul className="social_links">
              <li>
                <a href="#">
                  <FacebookRoundedIcon className="social_link"/>
                </a>
              </li>
              <li>
                <a href="#">
                    <TwitterIcon className="social_link"/>
                </a>
              </li>
              <li>
                <a href="#">
                    <InstagramIcon className="social_link"/>
                </a>
              </li>
              <li>
                <a href="#">
                    <PinterestIcon className="social_link"/>
                </a>
              </li>
            </ul>
        </div>
          </div>


        <div className="footer_bottom_right">
          <div className="footer_bottom_right_top">
            <div className="footer_bottom_right_top-left_side">
              <h3 className="title">categories</h3>
              <ul className="categories">
                <li className="category">
                  <a href="#">category 1</a>
                </li>
                <li className="category">
                  <a href="#">category 2</a>
                </li>
                <li className="category">
                  <a href="#">category 3</a>
                </li>
                <li className="category">
                  <a href="#">category 4</a>
                </li>
              </ul>
            </div>

            <div className="footer_bottom_right_top-right_side">
              <h3 className="title">site links</h3>
              <ul className="links">
                <li className="link">
                  <a href="#">home</a>
                </li>
                <li className="link">
                  <a href="#">blog</a>
                </li>
                <li className="link">
                  <a href="#">about</a>
                </li>
                <li className="link">
                  <a href="#">contact</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer_bottom_right_bottom">
            <ul>
              <li className="copyright">
              <CopyrightRoundedIcon className="copyright_icon" />
            copyright {new Date().getFullYear()}</li>
              <li>
                <span>
                  design by <a href="#">styleshout</a>
                </span>
              </li>
              <li>
                <span>
                  developed by <a href="#">osayuki</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      <div className="footer_bottom">
        <div className="top">
          <div className="top_left">
            <h3 className="title">Vitality Avenue</h3>
            <p className="top_left_paragraph">
              Welcome to Vitality Avenue, the ultimate destination for health
              and lifestyle enthusiasts. Our blog provides expert advice and
              practical tips on nutrition, fitness, mental wellness, and more.
            </p>
          </div>

          <div className="top_right">
            <div className="top_right-left_side">
              <h3 className="title">categories</h3>
              <ul className="categories">
                <li className="category">
                  <a href="#">category 1</a>
                </li>
                <li className="category">
                  <a href="#">category 2</a>
                </li>
                <li className="category">
                  <a href="#">category 3</a>
                </li>
                <li className="category">
                  <a href="#">category 4</a>
                </li>
              </ul>
            </div>

            <div className="top_right-right_side">
              <h3 className="title">site links</h3>
              <ul className="links">
                <li className="link">
                  <a href="#">home</a>
                </li>
                <li className="link">
                  <a href="#">blog</a>
                </li>
                <li className="link">
                  <a href="#">about</a>
                </li>
                <li className="link">
                  <a href="#">contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bottom">
          <ul className="social_links">
            <li>
              <a href="#">
                <FacebookRoundedIcon className="social_link" />
              </a>
            </li>
            <li>
              <a href="#">
                <TwitterIcon className="social_link" />
              </a>
            </li>
            <li>
              <a href="#">
                <InstagramIcon className="social_link" />
              </a>
            </li>
            <li>
              <a href="#">
                <PinterestIcon className="social_link" />
              </a>
            </li>
          </ul>

          <div className="bottom_right">
            <ul>
              <li className="copyright">
                <CopyrightRoundedIcon className="copyright_icon" />
                copyright {new Date().getFullYear()}
              </li>
              <li>
                <span>
                  design by <a href="#">styleshout</a>
                </span>
              </li>
            </ul>
            <div className="dev">
              <span>
                developed by <a href="#">osayuki</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
