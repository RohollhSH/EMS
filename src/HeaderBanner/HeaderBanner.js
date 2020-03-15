import React from "react";
import classes from "./HeaderBanner.module.css";
import banner_img from "../assets/images/header-banner1.png"

const headerBanner = props => {
  return (
    <div className={classes.Banner}>
      <img className={classes.BannerImage} src={banner_img} alt="banner"/>
      <div className={classes.BannerTitle}>
        <p>آموزش زیست شناسی کنکور</p>
        <p>همراه با جزوات و فیلم تدریس</p>
        <p>نگار امیری</p>
      </div>
    </div>
  )
};

export default headerBanner;