import React from "react";
import styles from "./Homepage.module.css";
import Partner from "../../assets/partner.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Apple from "../../assets/Apple.jpg";
import Carrot from "../../assets/Carrot.jpg";
import Dragon from "../../assets/Dragon.jpg";
import Masrom from "../../assets/Masrom.jpg";
import MuskMelon from "../../assets/MuskMelon.jpg";
import Onion from "../../assets/Onion.jpg";
import Orange from "../../assets/orange.jpg";
import Tomatoes from "../../assets/Tomatoes.jpg";
import Testimonial from "../../assets/testimonial-1.png";
import News1 from "../../assets/news1.jpg";
import News2 from "../../assets/news2.jpg";
import News3 from "../../assets/news3.jpg";

const Homepage = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const BioProduct = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  const features = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className={styles["full-banner"]}>
        <div className="container">
          <div className="row ">
            <Slider {...settings}>
              <div
                className="col-md-12"
                style={{ width: "100%", display: "inline-block" }}
              >
                <div className={styles["banner-content"]}>
                  <h1>
                    100% <span>Organic</span>
                  </h1>
                  <h3>Fresh & Natural Farm Food</h3>
                  <p>
                    The readable content of a page when looking at its layout
                    point of using of letters, as opposed.
                  </p>
                  <a href="#" className={"btn"}>
                    ALL PRoducts <i className="icofont-bubble-right"></i>
                  </a>
                </div>
              </div>

              <div
                className="col-md-12"
                style={{ width: "100%", display: "inline-block" }}
              >
                <div className={styles["banner-content"]}>
                  <h1>
                    10% <span>Organic</span>
                  </h1>
                  <h3>Fresh & Natural Farm Food</h3>
                  <p>
                    The readable content of a page when looking at its layout
                    point of using of letters, as opposed.
                  </p>
                  <a href="#" className={styles.btn}>
                    ALL PRoducts <i className="icofont-bubble-right"></i>
                  </a>
                </div>
              </div>

              <div
                className="col-md-12"
                style={{ width: "100%", display: "inline-block" }}
              >
                <div className={styles["banner-content"]}>
                  <h1>
                    50% <span>Organic</span>
                  </h1>
                  <h3>Fresh & Natural Farm Food</h3>
                  <p>
                    The readable content of a page when looking at its layout
                    point of using of letters, as opposed.
                  </p>
                  <a href="#" className={styles.btn}>
                    ALL PRoducts <i className="icofont-bubble-right"></i>
                  </a>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/* features  */}
      <div className={styles["full-features"]}>
        <div className="container">
          <div className="row ">
            <Slider {...features}>
              <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12 mb-4">
                <div className={`${styles["features-box"]} text-center`}>
                  <div className={styles["features-icon-border"]}>
                    <div className={styles["features-icon"]}>
                      <i className="icofont icofont-wheat"></i>
                    </div>
                  </div>
                  <div className="features-text">
                    <h3>Healthy Food</h3>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12 mb-4">
                <div className={`${styles["features-box"]} text-center`}>
                  <div className={styles["features-icon-border"]}>
                    <div className={styles["features-icon"]}>
                      <i className="icofont icofont-truck-loaded"></i>
                    </div>
                  </div>
                  <div className="features-text">
                    <h3>Free Shipping</h3>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12 mb-4">
                <div className={`${styles["features-box"]} text-center`}>
                  <div className={styles["features-icon-border"]}>
                    <div className={styles["features-icon"]}>
                      <i className="icofont icofont-ui-chat"></i>
                    </div>
                  </div>
                  <div className="features-text">
                    <h3>24/07 Support</h3>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12 mb-4">
                <div className={`${styles["features-box"]} text-center`}>
                  <div className={styles["features-icon-border"]}>
                    <div className={styles["features-icon"]}>
                      <i className="icofont icofont-rooster"></i>
                    </div>
                  </div>
                  <div className="features-text">
                    <h3>From our farm</h3>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12 mb-4">
                <div className={`${styles["features-box"]} text-center`}>
                  <div className={styles["features-icon-border"]}>
                    <div className={styles["features-icon"]}>
                      <i className="icofont icofont-wheat"></i>
                    </div>
                  </div>
                  <div className="features-text">
                    <h3>Healthy Food</h3>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12 mb-4">
                <div className={`${styles["features-box"]} text-center`}>
                  <div className={styles["features-icon-border"]}>
                    <div className={styles["features-icon"]}>
                      <i className="icofont icofont-truck-loaded"></i>
                    </div>
                  </div>
                  <div className="features-text">
                    <h3>Free Shipping</h3>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12 mb-4">
                <div className={`${styles["features-box"]} text-center`}>
                  <div className={styles["features-icon-border"]}>
                    <div className={styles["features-icon"]}>
                      <i className="icofont icofont-ui-chat"></i>
                    </div>
                  </div>
                  <div className="features-text">
                    <h3>24/07 Support</h3>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12 mb-4">
                <div className={`${styles["features-box"]} text-center`}>
                  <div className={styles["features-icon-border"]}>
                    <div className={styles["features-icon"]}>
                      <i className="icofont icofont-rooster"></i>
                    </div>
                  </div>
                  <div className="features-text">
                    <h3>From our farm</h3>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/* about us started */}
      <div className={styles["full-about"]} id="full-about">
        <div className="container">
          <div className="row">
            <div className={styles["about-title"]}>
              <h2>About us</h2>
            </div>
            <div className="col-md-6">
              <div className={styles["about-content"]}>
                <h3>We Providing Services Since 1841 With Proud.</h3>
                <div className={styles["about-details"]}>
                  <p>
                    The readable content off a page when looking layout using
                    Lorem Ipsum is that it has.
                  </p>
                  <p>
                    It is a long established fact that a reader will be
                    distracted the readable content off a page when looking at
                    its layout using Lorem Ipsum is that it has.
                  </p>
                </div>

                <div
                  className={`${styles["about-icon-text"]} align-items-center`}
                >
                  <div className={styles["abt-icon"]}>
                    <i className={styles["icofont-fruits"]}></i>
                  </div>
                  <div className={styles["abt-text"]}>
                    <h2>
                      Fresh Look And <span>100% Organic</span> Farm Fresh
                      Produce Right.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ABOUT US PART END --> */}
      {/* <!-- BEST SELLER PART START --> */}
      <div className={styles["full-bestSeller"]} id="product">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className={styles["section-title"]}>
                Our Best Seller Product
              </h3>
              <p className="section-subtitle">
                The passage experienced a surge in popularity during the 1960s
                when again during the 90s as desktop publishers
              </p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4">
              <div className={styles.product}>
                <div className={styles["product-img"]}>
                  <img className={styles["w-100"]} src={Apple} alt="" />
                </div>
                <div className={styles["product-content"]}>
                  <div
                    className={`${styles["product-details"]} position-bottom-left`}
                  >
                    <h3 className={styles["product-name"]}>
                      <a href="productdetails.html">Musk Melon</a>
                    </h3>
                    <span className={styles["product-prev-price"]}>$80 KG</span>
                    <span className="product-price">$78 KG</span>
                  </div>
                  <div className={styles["buttons"]}>
                    <span
                      className={`${styles["sold-out-tag"]} position-top-right`}
                    >
                      Sold out
                    </span>
                    <button
                      className={` btn ${styles[" custom-btn"]} position-bottom-right`}
                      position-top-right
                    >
                      {" "}
                      Add to cart
                    </button>
                  </div>

                  <div className={`${styles["icons"]} position-center`}>
                    <div className="rounded-icon">
                      <i className="icofont-eye"></i>
                    </div>

                    <div className="rounded-icon">
                      <i className="icofont-heart-alt"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4">
              <div className={styles.product}>
                <div className={styles["product-img"]}>
                  <img className={styles["w-100"]} src={Carrot} alt="" />
                </div>
                <div className={styles["product-content"]}>
                  <div
                    className={`${styles["product-details"]} position-bottom-left`}
                  >
                    <h3 className={styles["product-name"]}>
                      <a href="productdetails.html">Masroom</a>
                    </h3>
                    <span className={styles["product-prev-price"]}>$80 KG</span>
                    <span className="product-price">$78 KG</span>
                  </div>
                  <div className={styles["buttons"]}>
                    <span
                      className={`${styles["sold-out-tag"]} position-top-right`}
                    >
                      Sold out
                    </span>
                    <button
                      className={` btn ${styles[" custom-btn"]} position-bottom-right`}
                      position-top-right
                    >
                      {" "}
                      Add to cart
                    </button>
                  </div>

                  <div className={`${styles["icons"]} position-center`}>
                    <div className="rounded-icon">
                      <i className="icofont-eye"></i>
                    </div>

                    <div className="rounded-icon">
                      <i className="icofont-heart-alt"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4">
              <div className={styles.product}>
                <div className={styles["product-img"]}>
                  <img className={styles["w-100"]} src={Dragon} alt="" />
                </div>
                <div className={styles["product-content"]}>
                  <div
                    className={`${styles["product-details"]} position-bottom-left`}
                  >
                    <h3 className={styles["product-name"]}>
                      <a href="productdetails.html">Apple</a>
                    </h3>
                    <span className={styles["product-prev-price"]}>$80 KG</span>
                    <span className="product-price">$78 KG</span>
                  </div>
                  <div className={styles["buttons"]}>
                    <span
                      className={`${styles["sold-out-tag"]} position-top-right`}
                    >
                      Sold out
                    </span>
                    <button
                      className={` btn ${styles[" custom-btn"]} position-bottom-right`}
                      position-top-right
                    >
                      {" "}
                      Add to cart
                    </button>
                  </div>

                  <div className={`${styles["icons"]} position-center`}>
                    <div className="rounded-icon">
                      <i className="icofont-eye"></i>
                    </div>

                    <div className="rounded-icon">
                      <i className="icofont-heart-alt"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4">
              <div className={styles.product}>
                <div className={styles["product-img"]}>
                  <img className={styles["w-100"]} src={Masrom} alt="" />
                </div>
                <div className={styles["product-content"]}>
                  <div
                    className={`${styles["product-details"]} position-bottom-left`}
                  >
                    <h3 className={styles["product-name"]}>
                      <a href="productdetails.html">Dragon</a>
                    </h3>
                    <span className={styles["product-prev-price"]}>$80 KG</span>
                    <span className="product-price">$78 KG</span>
                  </div>
                  <div className={styles["buttons"]}>
                    <span
                      className={`${styles["sold-out-tag"]} position-top-right`}
                    >
                      Sold out
                    </span>
                    <button
                      className={` btn ${styles[" custom-btn"]} position-bottom-right`}
                      position-top-right
                    >
                      {" "}
                      Add to cart
                    </button>
                  </div>

                  <div className={`${styles["icons"]} position-center`}>
                    <div className="rounded-icon">
                      <i className="icofont-eye"></i>
                    </div>

                    <div className="rounded-icon">
                      <i className="icofont-heart-alt"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4">
              <div className={styles.product}>
                <div className={styles["product-img"]}>
                  <img className={styles["w-100"]} src={MuskMelon} alt="" />
                </div>
                <div className={styles["product-content"]}>
                  <div
                    className={`${styles["product-details"]} position-bottom-left`}
                  >
                    <h3 className={styles["product-name"]}>
                      <a href="productdetails.html">onion</a>
                    </h3>
                    <span className={styles["product-prev-price"]}>$80 KG</span>
                    <span className="product-price">$78 KG</span>
                  </div>
                  <div className={styles["buttons"]}>
                    <span
                      className={`${styles["sold-out-tag"]} position-top-right`}
                    >
                      Sold out
                    </span>
                    <button
                      className={` btn ${styles[" custom-btn"]} position-bottom-right`}
                      position-top-right
                    >
                      {" "}
                      Add to cart
                    </button>
                  </div>

                  <div className={`${styles["icons"]} position-center`}>
                    <div className="rounded-icon">
                      <i className="icofont-eye"></i>
                    </div>

                    <div className="rounded-icon">
                      <i className="icofont-heart-alt"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4">
              <div className={styles.product}>
                <div className={styles["product-img"]}>
                  <img className={styles["w-100"]} src={Onion} alt="" />
                </div>
                <div className={styles["product-content"]}>
                  <div
                    className={`${styles["product-details"]} position-bottom-left`}
                  >
                    <h3 className={styles["product-name"]}>
                      <a href="productdetails.html">Masroom</a>
                    </h3>
                    <span className={styles["product-prev-price"]}>$80 KG</span>
                    <span className="product-price">$78 KG</span>
                  </div>
                  <div className={styles["buttons"]}>
                    <span
                      className={`${styles["sold-out-tag"]} position-top-right`}
                    >
                      Sold out
                    </span>
                    <button
                      className={` btn ${styles[" custom-btn"]} position-bottom-right`}
                      position-top-right
                    >
                      {" "}
                      Add to cart
                    </button>
                  </div>

                  <div className={`${styles["icons"]} position-center`}>
                    <div className="rounded-icon">
                      <i className="icofont-eye"></i>
                    </div>

                    <div className="rounded-icon">
                      <i className="icofont-heart-alt"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4">
              <div className={styles.product}>
                <div className={styles["product-img"]}>
                  <img className={styles["w-100"]} src={Orange} alt="" />
                </div>
                <div className={styles["product-content"]}>
                  <div
                    className={`${styles["product-details"]} position-bottom-left`}
                  >
                    <h3 className={styles["product-name"]}>
                      <a href="productdetails.html">carrot</a>
                    </h3>
                    <span className={styles["product-prev-price"]}>$80 KG</span>
                    <span className="product-price">$78 KG</span>
                  </div>
                  <div className={styles["buttons"]}>
                    <span
                      className={`${styles["sold-out-tag"]} position-top-right`}
                    >
                      Sold out
                    </span>
                    <button
                      className={` btn ${styles[" custom-btn"]} position-bottom-right`}
                      position-top-right
                    >
                      {" "}
                      Add to cart
                    </button>
                  </div>

                  <div className={`${styles["icons"]} position-center`}>
                    <div className="rounded-icon">
                      <i className="icofont-eye"></i>
                    </div>

                    <div className="rounded-icon">
                      <i className="icofont-heart-alt"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4">
              <div className={styles.product}>
                <div className={styles["product-img"]}>
                  <img className={styles["w-100"]} src={Tomatoes} alt="" />
                </div>
                <div className={styles["product-content"]}>
                  <div
                    className={`${styles["product-details"]} position-bottom-left`}
                  >
                    <h3 className={styles["product-name"]}>
                      <a href="productdetails.html">Tomatoes</a>
                    </h3>
                    <span className={styles["product-prev-price"]}>$80 KG</span>
                    <span className="product-price">$78 KG</span>
                  </div>
                  <div className={styles["buttons"]}>
                    <span
                      className={`${styles["sold-out-tag"]} position-top-right`}
                    >
                      Sold out
                    </span>
                    <button
                      className={` btn ${styles[" custom-btn"]} position-bottom-right`}
                      position-top-right
                    >
                      {" "}
                      Add to cart
                    </button>
                  </div>

                  <div className={`${styles["icons"]} position-center`}>
                    <div className="rounded-icon">
                      <i className="icofont-eye"></i>
                    </div>

                    <div className="rounded-icon">
                      <i className="icofont-heart-alt"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- OFFER PART START --> */}
      <div className={styles["full-offer"]}>
        <div className={styles["bg-1"]}></div>
        <div className={styles["bg-2"]}></div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className={styles["offer-content"]}>
                <h3>Daily Essentials</h3>
                <h2>
                  Sale 68% Off <br /> All Fruite Products
                </h2>
                <a href="#" className="btn">
                  Explore more <i className="icofont-bubble-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- OFFER PART END --> */}

      {/* <!-- PARTNERS PART START --> */}
      {
        <div className={styles["full-partners"]}>
          <div className="container">
            <div className="row partner-slider">
              <Slider {...BioProduct}>
                <div className="col-md-12">
                  <div className="partner-img text-center">
                    <img className="w-50 mx-auto" src={Partner} alt="" />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="partner-img text-center">
                    <img className="w-50 mx-auto" src={Partner} alt="" />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="partner-img text-center">
                    <img className="w-50 mx-auto" src={Partner} alt="" />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="partner-img text-center">
                    <img className="w-50 mx-auto" src={Partner} alt="" />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="partner-img text-center">
                    <img className="w-50 mx-auto" src={Partner} alt="" />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="partner-img text-center">
                    <img className="w-50 mx-auto" src={Partner} alt="" />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="partner-img text-center">
                    <img className="w-50 mx-auto" src={Partner} alt="" />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      }
      {/* <!-- PARTNERS PART END -->


{/* <!-- TESTIMONIAL PART START --> */}
      <div className={styles["full-testimonial"]} id="full-testimonial">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className="section-title">Our Happy Customers</h3>
              <p className="section-subtitle">
                The passage experienced a surge in popularity during the 1960s
                when again during the 90s as desktop publishers
              </p>
            </div>
          </div>
          <div className="row align-items-center mt-5">
            {/* <Slider {...settings}> */}
            <div className="col-md-4">
              <div className="testimonial-img text-center">
                <div className="img">
                  <img className="w-100" src={Testimonial} alt="" />
                </div>

                <div className="img">
                  <img className="w-100" src={Testimonial} alt="" />
                </div>
                <div className="img">
                  <img className="w-100" src={Testimonial} alt="" />
                </div>
              </div>
            </div>
            {/* </Slider>
            <Slider {...settings}> */}
            <div className="col-md-8">
              <div className={styles["testimonial-text"]}>
                <div className={styles["testimonial-info"]}>
                  <p>
                    “ There are many variati ons passages of but the majority
                    have suffered alteration in some form, injected humour
                    randomised words which don't look even slightly believable.
                    If you are going to use a passage of text all the loss.
                  </p>
                  <h3>Salvador Stanley</h3>
                  <h4>Happy Customer</h4>
                </div>
                <div className={styles["testimonial-info"]}>
                  <p>
                    “ There are many variati ons passages of but the majority
                    have suffered alteration in some form, injected humour
                    randomised words which don't look even slightly believable.
                    If you are going to use a passage of text all the loss.
                  </p>
                  <h3>Salvador Stanley</h3>
                  <h4>Happy Customer</h4>
                </div>
                <div className={styles["testimonial-info"]}>
                  <p>
                    “ There are many variati ons passages of but the majority
                    have suffered alteration in some form, injected humour
                    randomised words which don't look even slightly believable.
                    If you are going to use a passage of text all the loss.
                  </p>
                  <h3>Salvador Stanley</h3>
                  <h4>Happy Customer</h4>
                </div>
              </div>
            </div>
            {/* </Slider> */}
          </div>
        </div>
      </div>
      {/* <!-- TESTIMONIAL PART END --> */}
      {/* <!-- CONTACT NOW PART END --> */}
      <div className={styles["contact-now"]}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className={styles["contact-quote"]}>
                If you Need Natural And Fresh Organic Fruits!
              </h3>
              <a href="#" className="btn">
                Contact Now <i className="icofont-bubble-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- CONTACT NOW PART END --> */}
      <div className={styles["full-latest-news"]}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className="section-title">Latest News</h3>
              <p className="section-subtitle">
                The passage experienced a surge in popularity during the 1960s
                when again during the 90s as desktop publishers
              </p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-6">
              <div className="latest-news-grid">
                <div className={styles["news-img"]}>
                  <img className="w-100" src={News1} alt="" />
                </div>

                <div className={styles["news-content"]}>
                  <div className={styles["date-react"]}>
                    <span className={styles["date"]}>16 January’20</span>
                    <span className={styles["react"]}>
                      <i className="icofont-ui-love"></i> 56
                    </span>
                    <span className={styles["react"]}>
                      <i className="icofont-speech-comments"></i> 98
                    </span>
                  </div>
                  <div className={styles["news-title"]}>
                    <a href="blogdetails.html">
                      <h4>
                        The passage experienced a popularity during the used it
                        on their dry-transfer sheets.
                      </h4>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="latest-news-list d-flex">
                <div className={styles["news-img"]}>
                  <img className="w-100" src={News2} alt="" />
                </div>

                <div className={styles["news-content"]}>
                  <div className={styles["date-react"]}>
                    <span className={styles["date"]}>16 January’20</span>
                    <span className={styles["react"]}>
                      <i className="icofont-ui-love"></i> 56
                    </span>
                    <span className={styles["react"]}>
                      <i className="icofont-speech-comments"></i> 98
                    </span>
                  </div>
                  <div className={styles["news-title"]}>
                    <a href="blogdetails.html">
                      <h4>The passage popularity dry transfer sheets.</h4>
                    </a>
                  </div>
                </div>
              </div>

              <div className="latest-news-list d-flex">
                <div className={styles["news-img"]}>
                  <img className="w-100" src={News3} alt="" />
                </div>

                <div className={styles["news-content"]}>
                  <div className={styles["date-react"]}>
                    <span className={styles["date"]}>16 January’20</span>
                    <span className={styles["react"]}>
                      <i className="icofont-ui-love"></i> 56
                    </span>
                    <span className={styles["react"]}>
                      <i className="icofont-speech-comments"></i> 98
                    </span>
                  </div>
                  <div className={styles["news-title"]}>
                    <a href="blogdetails.html">
                      <h4>The passage popularity dry transfer sheets.</h4>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
