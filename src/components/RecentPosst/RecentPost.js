import React from "react";
import styles from "./RecentPost.module.css";
const RecentPost = () => {
  return (
    <div>
      <div className={styles["recent_post"]}>
        <div className="sidebar">
          <h4>Recent Post</h4>
        </div>
        <ul>
          <li>
            <span>20 April 2020</span>
            <h4>
              <a href="blogdetails.html">
                Strawberries are low-growing herbaceous plants.
              </a>
            </h4>
          </li>

          <li>
            <span>20 April 2020</span>
            <h4>
              <a href="blogdetails.html">
                Strawberries are low-growing herbaceous plants.
              </a>
            </h4>
          </li>

          <li>
            <span>20 April 2020</span>
            <h4>
              <a href="blogdetails.html">
                Strawberries are low-growing herbaceous plants.
              </a>
            </h4>
          </li>

          <li>
            <span>20 April 2020</span>
            <h4>
              <a href="blogdetails.html">
                Strawberries are low-growing herbaceous plants.
              </a>
            </h4>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RecentPost;
