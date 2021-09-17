import styles from "./Header.module.css";
import Logo from "../../assets/Logo.svg";
import Icofont from "react-icofont";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className={`${styles["sticky"]}`}>
        <div className={`${styles.header} `}>
          <div className="container">
            <nav
              className={`navbar navbar-expand-lg  ${styles["navbar-lights"]} ${styles["header-bg"]}`}
            >
              <a className={styles["navbar-brand"]} href="/">
                <img src={Logo} alt="" />
              </a>
              <button
                className={`navbar-toggler ${styles["navbar-toggler-item"]}`}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <Icofont icon="navigation-menu" />
              </button>

              <div
                className={`collapse navbar-collapse ${styles["collapse-navbar"]}`}
                ˍ
                id="navbarSupportedContent"
              >
                <ul
                  className={` navbar-nav ${styles["navbar-nav-item"]} mx-auto`}
                >
                  <li className="nav-item active">
                    <Link
                      className={`nav-link ${styles["nav-link-nav"]}`}
                      to=""
                    >
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <a
                      className={`nav-link ${styles["nav-link-nav"]}`}
                      href="#full-about"
                    >
                      About
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className={`nav-link ${styles["nav-link-nav"]}`}
                      href="#product"
                    >
                      Product
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className={`nav-link ${styles["nav-link-nav"]}`}
                      href="#full-testimonial"
                    >
                      Testimonial
                    </a>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className={`nav-link ${styles["nav-link-nav"]} dropdown-toggle`}
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      to="/"
                    >
                      Pages
                    </a>
                    <ul
                      className={`dropdown-menu  ${styles["dropdown-menus"]}`}
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link
                          className={`dropdown-item ${styles["dropdown-items"]}`}
                          to="/Product"
                        >
                          Product Details
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`dropdown-item ${styles["dropdown-items"]}`}
                          to="/Blog"
                        >
                          Blog
                        </Link>
                      </li>
                      <li></li>
                      <li>
                        <Link
                          className={`dropdown-item ${styles["dropdown-items"]}`}
                          to="/BlogDetails"
                        >
                          Blog Details
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`dropdown-item ${styles["dropdown-items"]}`}
                          to="/Error"
                        >
                          404 Error
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`dropdown-item ${styles["dropdown-items"]}`}
                          to="/Cart"
                        >
                          Cart Overview
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`dropdown-item ${styles["dropdown-items"]}`}
                          to="/CheckOut"
                        >
                          Checkout
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>

                <div className={styles["header-content"]}>
                  <div className={`${styles["header_contact"]} text-end`}>
                    <span className={styles.call_us}>Call Us!</span>
                    <span className={styles.phone_no}>+00 569 846 348</span>
                  </div>
                  <div className={styles.header_icon}>
                    <i className="icofont icofont-cart"></i>
                    <span className={styles.cart_no}>02</span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
