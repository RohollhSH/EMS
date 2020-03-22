import React from "react";
import classes from './ImportantTopics.module.css'
import TopicsPreview from "./topicPreview/TopicsPreview";

const ImportantTopics = props => {
  return (
    <div>
      <p style={{
        color:'#fff',fontSize:'15px' ,textAlign: 'right' ,margin:'10px 25px 0 2px' ,
      }}>
        پست های مهم
      </p>
      <TopicsPreview/>
    </div>
  )
};

export default ImportantTopics;