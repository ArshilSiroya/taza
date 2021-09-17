import React from "react";
import styles from "./HeroSection.module.css";
import leaf from "../../assets/leaf.png";
const HeroSection = (props) => {
  return (
    <div>
      {/* <!-- HERO SECTION PART START --> */}
      <div className={styles["hero_section"]}>
        <div className={styles["png_img"]}>
          <img className="w-100 img-fluid" src={leaf} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className={styles["herosection_content"]}>
                <h2>{props.children}</h2>
                <a href="#" className="btn rounded border-transparent">
                  Home - Pages
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- HERO SECTION PART END--> */}
    </div>
  );
};

export default HeroSection;
