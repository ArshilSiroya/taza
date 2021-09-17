import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import PopularTag from "../../components/PopularTag/PopularTag";
import PostCategory from "../../components/Post_category/PostCategory";
import RecentPost from "../../components/RecentPosst/RecentPost";
import styles from "./Blog.module.css";
import News1 from "../../assets/news1.jpg";
import FormInput from "../../components/FormInput/FormInput";

const Blog = () => {
  return (
    <div>
      <HeroSection> Blog Page</HeroSection>
      {/* <!-- BLOG PART START --> */}
      <div className={styles["blog_part"]}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="allpost_content">
                    <div className="serach_btn">
                      <form action="#">
                        <div className={styles.search_ber}>
                          <FormInput
                            type="text"
                            className={` form-control ${styles["search_button"]} `}
                            id="serach_button"
                            name="serach_button"
                            value=""
                            placeholder="Search Here"
                          />
                          <i className="icofont-search-1"></i>
                        </div>
                      </form>
                    </div>
                    <PostCategory />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <RecentPost />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <PopularTag />
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8 col-xl-8">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className="blog">
                    <div className="blog_img">
                      <img
                        src={News1}
                        className="w-100 img-fluid"
                        alt="jpgimg"
                      />
                    </div>
                    <div className="blog_publish d-flex justify-content-between pt-4">
                      <div className={styles.date}>
                        <span>
                          <i className="icofont-ui-calendar"></i> 20 April 2020
                        </span>
                      </div>
                      <div className={styles.fav_icon}>
                        <span>
                          <i className="icofont-ui-love"></i> 568
                        </span>
                        <span>
                          <i className="icofont-speech-comments"></i> 986
                        </span>
                      </div>
                    </div>
                    <div className={`${styles.blog_title} text-uppercase`}>
                      <h4>
                        <a href="blogdetails.html">
                          Strawberries are low-growing herbaceous plants with a
                          fibrous root system and a crown from which arise basal
                          leaves.
                        </a>
                      </h4>
                      <a href="blogdetails.html" className="underline">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className="blog">
                    <div className="blog_img">
                      <img
                        src={News1}
                        className="w-100 img-fluid"
                        alt="jpgimg"
                      />
                    </div>
                    <div className="blog_publish d-flex justify-content-between pt-4">
                      <div className={styles.date}>
                        <span>
                          <i className="icofont-ui-calendar"></i> 20 April 2020
                        </span>
                      </div>
                      <div className={styles.fav_icon}>
                        <span>
                          <i className="icofont-ui-love"></i> 568
                        </span>
                        <span>
                          <i className="icofont-speech-comments"></i> 986
                        </span>
                      </div>
                    </div>
                    <div className={`${styles.blog_title} text-uppercase`}>
                      <h4>
                        <a href="blogdetails.html">
                          Strawberries are low-growing herbaceous plants with a
                          fibrous root system and a crown from which arise basal
                          leaves.
                        </a>
                      </h4>
                      <a href="blogdetails.html" className="underline">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className="blog">
                    <div className="blog_img">
                      <img
                        src={News1}
                        className="w-100 img-fluid"
                        alt="jpgimg"
                      />
                    </div>
                    <div className="blog_publish d-flex justify-content-between pt-4">
                      <div className={styles.date}>
                        <span>
                          <i className="icofont-ui-calendar"></i> 20 April 2020
                        </span>
                      </div>
                      <div className={styles.fav_icon}>
                        <span>
                          <i className="icofont-ui-love"></i> 568
                        </span>
                        <span>
                          <i className="icofont-speech-comments"></i> 986
                        </span>
                      </div>
                    </div>
                    <div className={`${styles.blog_title} text-uppercase`}>
                      <h4>
                        <a href="blogdetails.html">
                          Strawberries are low-growing herbaceous plants with a
                          fibrous root system and a crown from which arise basal
                          leaves.
                        </a>
                      </h4>
                      <a href="blogdetails.html" className="underline">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-5 text-center">
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className="pages_num">
                    <ul>
                      <li>
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-arrow-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
