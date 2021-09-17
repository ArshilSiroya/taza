import React from "react";
import styles from "./Button.module.css";
const Button = () => {
  return (
    <div>
      <a href="#" class={`${styles["btn"]}   mt-4`}>
        Submit Comment
      </a>
    </div>
  );
};

export default Button;
