import React from "react";
import classes from "./MenuButton.module.css";
import Auxx from "../../hoc/Auxx";

const MenuButton = props => {

  let textButtonStyle;
  let arrowStyle;

  if (props.menuState) {
    //after menu is clicked
    if (props.activated ) {
      //the clicked button
      arrowStyle = classes.ArrowLeft;
      textButtonStyle = classes.TextButton_clicked;
    }else if(props.hasParent !== undefined){
      arrowStyle = {
        display:'none'
      };
      textButtonStyle = classes.TextButton_clicked;
    }else {
      // non clicked buttons
      arrowStyle = classes.ArrowRight_a_click;
      textButtonStyle = classes.TextButton_a_click;
    }
  } else {
    arrowStyle = classes.ArrowRight_b_click;
    textButtonStyle = classes.TextButton_b_click;
  }

  return (
    <Auxx>
      <div className={textButtonStyle} onClick={props.click}>
        {<p
          className={classes.TheText}
          style={props.hasParent !== undefined ? {fontSize: '9px', fontWeight: 'Vazir Medium'}
            : null}
        >
          {props.children}
        </p>}
        <div className={arrowStyle} style={!props.hasChild ? {opacity: '0'} : null}/>
      </div>
      <div className={classes.MainMenuLine}/>
    </Auxx>
  );
};

export default MenuButton;