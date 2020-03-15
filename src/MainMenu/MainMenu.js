import React, {useState} from "react";
import classes from "./MainMenu.module.css";
import MenuButton from "./MenuElements/MenuButton";

const MainMenu = props => {
  const [menuButtons, setMenuButtons] = useState([
    {id: 0, text: "سال دوازدهم", activated: false},
    {id: 1, text: "سال یازدهم", activated: false},
    {id: 2, text: "سال دهم", activated: false},
    {id: 3, text: "فیلم های تدریس", activated: false},
    {id: 4, text: "تصاویر درسی", activated: false},
    {id: 5, text: "جزوات و کتاب ها", activated: false},
  ]);

  const [menuClicked, setMenuClicked] = useState(false);

  const clickedMenuHandler = (theId) => {
    if(!menuClicked) {
      let shallowState = [...menuButtons];
      let changedButton = {...shallowState[theId]};
      changedButton.activated = !changedButton.activated;
      shallowState[theId] = changedButton;
      setMenuButtons(shallowState);
      setMenuClicked(!menuClicked);
    }else {
      setMenuButtons([
        {id: 0, text: "سال دوازدهم", activated: false},
        {id: 1, text: "سال یازدهم", activated: false},
        {id: 2, text: "سال دهم", activated: false},
        {id: 3, text: "فیلم های تدریس", activated: false},
        {id: 4, text: "تصاویر درسی", activated: false},
        {id: 5, text: "جزوات و کتاب ها", activated: false},
      ]);
      setMenuClicked(false);
    }
  };

  let menuStyle;
  menuClicked ? menuStyle = classes.ClickedMainMenu : menuStyle= classes.NormalMainMenu;

  const x = menuButtons.map((p, index) =>
    <MenuButton
      key={p.id}
      click={clickedMenuHandler.bind(this, index)}
      activated = {p.activated}
      menuState={menuClicked}
    >
      {p.text}
    </MenuButton>);

  return (
    <div
      style={{height : "38vh",
        display: "flex",
        flexDirection: "row",
        alignItems:"center"}}
    >
      <div className={menuStyle}>
        {x}
      </div>
    </div>
  )
};

export default MainMenu;