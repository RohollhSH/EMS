import React from "react";
import classes from "./TopicPreview.module.css";
import Auxx from "../../hoc/Auxx";

const TopicPreview = props => {
  return (
    <div className={classes.BoxesContainer}>
      <div className={classes.MainBox}/>
      <div className={classes.MainBox}/>
      <div className={classes.MainBox}/>
      <div className={classes.MainBox}/>
    </div>
  )
};

export default TopicPreview;