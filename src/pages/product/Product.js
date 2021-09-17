import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import styles from "./Product.module.css";
import Apple from "../../assets/Apple.jpg";
import Carrot from "../../assets/Carrot.jpg";
import Dragon from "../../assets/Dragon.jpg";
import Masrom from "../../assets/Masrom.jpg";
import MuskMelon from "../../assets/MuskMelon.jpg";
import Onion from "../../assets/Onion.jpg";
import Orange from "../../assets/orange.jpg";
import Tomatoes from "../../assets/Tomatoes.jpg";
import Fruit2 from "../../assets/Fruit2.jpg";
import Slider from "react-slick";

const Product = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <>
      <HeroSection>Product Details </HeroSection>

      {/* <!-- PRODUCT DETAILS PART START --> */}
      <div className={styles["product_details"]}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div className="product_img d-flex">
                <div className={styles.small_img}>
                  <img className="w-100" src={Fruit2} alt="" />
                  <img className="w-100" src={Fruit2} alt="" />
                  <img className="w-100" src={Fruit2} alt="" />
                </div>
                <div className="big_img">
                  <img src={Fruit2} className="w-100 img-fluid" alt="" />
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div className={styles.producudetails_content}>
                <h3>Strawberries: Health Benefits</h3>
                <div className={styles.customer_review}>
                  <ul>
                    <li>
                      <i className="icofont-star"></i>
                      <i className="icofont-star"></i>
                      <i className="icofont-star"></i>
                      <i className="icofont-star"></i>
                      <i className="icofont-star"></i>
                    </li>
                    <li>
                      <p>(3 Customer Review)</p>
                    </li>
                  </ul>
                </div>
                <strong>$60.00 </strong>
                <strong>
                  <del>$70.00 </del>
                </strong>
                <p>
                  It is a long established fact that a reader will be distracted
                  the readable content off a page when looking at its layout
                  fact that a reader will bee distracted the readable content.
                </p>

                <div className="add_to_cart d-flex">
                  <div className="quantity d-flex">
                    <div className="left_arrow">
                      <button type="button">
                        <i className="icofont-arrow-left"></i>
                      </button>
                    </div>
                    <div className={styles.quantity_num}>1</div>
                    <div className="right_arrow">
                      <button type="button">
                        <i className="icofont-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                  <a
                    href="cartoverview.html"
                    className="btn border-transparent ml-5"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- PRODUCT DETAILS PART END --> */}

      {/* <!-- PRODUCT TABBER START --> */}
      <div className={styles.product_tabber}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul
                className={`nav ${styles["nav-tabs"]} ${styles["nav_custom"]}`}
                id="myTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className={`${styles["nav-link"]} ${styles["nav-link-custom"]} `}
                    id="information-tab"
                    data-toggle="tab"
                    href="#information"
                    role="tab"
                    aria-controls="information"
                    aria-selected="true"
                  >
                    DESCRIPTION
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className={`${styles["nav-link"]} ${styles["nav-link-custom"]} `}
                    id="information-tab"
                    data-toggle="tab"
                    href="#information"
                    role="tab"
                    aria-controls="information"
                    aria-selected="true"
                  >
                    INFORMATION
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className={`${styles["nav-link"]} ${styles["nav-link-custom"]} `}
                    id="review-tab"
                    data-toggle="tab"
                    href="#review"
                    role="tab"
                    aria-controls="review"
                    aria-selected="true"
                  >
                    REVIEW
                  </a>
                </li>
              </ul>

              <div className="tab-content" id="myTabContent">
                <div
                  className={`${styles["tab-pane"]} fade show ${styles.active}`}
                  id="description"
                  role="tabpanel"
                  aria-labelledby="description-tab"
                >
                  <p>
                    Fresh strawberries are very high in water, so their total
                    carb content is very low fewer than 8 grams of carbs per 3.5
                    ounces (100 grams). The net digestible carb content is fewer
                    than 6 grams in the same serving size. Most of these
                    berries’ carbs come from simple sugars such as glucose,
                    fructose, and sucrose but they contan a decent amount of
                    fiber. Strawberries have a glycemic index (GI) score of 40,
                    which is relatively low (4). This means that strawberries
                    should not lead to big spikes in blood sugar levels and are
                    considered safe for people with diabetes.
                  </p>
                  <p>
                    Fresh strawberries are very high in water, so their total
                    carb content is very low fewer than 8 grams of carbs per 3.5
                    ounces (100 grams). The net digestible carb content is fewer
                    than 6 grams in the same serving size. Most of these
                    berries’ carbs come from simple sugars such as glucose,
                    fructose, and sucrose but they contan a decent amount of
                    fiber. Strawberries have a glycemic index (GI) score of 40,
                    which is relatively low (4). This means that strawberries
                    should not lead to big spikes in blood sugar levels and are
                    considered safe for people with diabetes.
                  </p>
                </div>
                <div
                  className="tab-pane fade"
                  id="information"
                  role="tabpanel"
                  aria-labelledby="information-tab"
                >
                  <p>
                    Fresh strawberries are very high in water, so their total
                    carb content is very low fewer than 8 grams of carbs per 3.5
                    ounces (100 grams). The net digestible carb content is fewer
                    than 6 grams in the same serving size. Most of these
                    berries’ carbs come from simple sugars such as glucose,
                    fructose, and sucrose but they contan a decent amount of
                    fiber. Strawberries have a glycemic index (GI) score of 40,
                    which is relatively low (4). This means that strawberries
                    should not lead to big spikes in blood sugar levels and are
                    considered safe for people with diabetes.
                  </p>
                  <p>
                    Fresh strawberries are very high in water, so their total
                    carb content is very low fewer than 8 grams of carbs per 3.5
                    ounces (100 grams). The net digestible carb content is fewer
                    than 6 grams in the same serving size. Most of these
                    berries’ carbs come from simple sugars such as glucose,
                    fructose, and sucrose but they contan a decent amount of
                    fiber. Strawberries have a glycemic index (GI) score of 40,
                    which is relatively low (4). This means that strawberries
                    should not lead to big spikes in blood sugar levels and are
                    considered safe for people with diabetes.
                  </p>
                </div>
                <div
                  className="tab-pane fade"
                  id="review"
                  role="tabpanel"
                  aria-labelledby="review-tab"
                >
                  <p>
                    Fresh strawberries are very high in water, so their total
                    carb content is very low fewer than 8 grams of carbs per 3.5
                    ounces (100 grams). The net digestible carb content is fewer
                    than 6 grams in the same serving size. Most of these
                    berries’ carbs come from simple sugars such as glucose,
                    fructose, and sucrose but they contan a decent amount of
                    fiber. Strawberries have a glycemic index (GI) score of 40,
                    which is relatively low (4). This means that strawberries
                    should not lead to big spikes in blood sugar levels and are
                    considered safe for people with diabetes.
                  </p>
                  <p>
                    Fresh strawberries are very high in water, so their total
                    carb content is very low fewer than 8 grams of carbs per 3.5
                    ounces (100 grams). The net digestible carb content is fewer
                    than 6 grams in the same serving size. Most of these
                    berries’ carbs come from simple sugars such as glucose,
                    fructose, and sucrose but they contan a decent amount of
                    fiber. Strawberries have a glycemic index (GI) score of 40,
                    which is relatively low (4). This means that strawberries
                    should not lead to big spikes in blood sugar levels and are
                    considered safe for people with diabetes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- PRODUCT TABBER END --> */}

      {/* <!-- BEST SELLER PART START --> */}
      <div className={`${styles["full-bestSeller"]}`}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-left">
              <h3 className={`${styles["section-title"]}`}>Related Product</h3>
            </div>
          </div>
          <div className="row mt-5">
            <Slider {...settings}>
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
                      <span className={styles["product-prev-price"]}>
                        $80 KG
                      </span>
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
                      <span className={styles["product-prev-price"]}>
                        $80 KG
                      </span>
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
                      <span className={styles["product-prev-price"]}>
                        $80 KG
                      </span>
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
                      <span className={styles["product-prev-price"]}>
                        $80 KG
                      </span>
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
                      <span className={styles["product-prev-price"]}>
                        $80 KG
                      </span>
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
                      <span className={styles["product-prev-price"]}>
                        $80 KG
                      </span>
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
                      <span className={styles["product-prev-price"]}>
                        $80 KG
                      </span>
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
                      <span className={styles["product-prev-price"]}>
                        $80 KG
                      </span>
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
            </Slider>
          </div>
        </div>
      </div>
      {/* <!-- BEST SELLER PART END --> */}
    </>
  );
};

export default Product;
