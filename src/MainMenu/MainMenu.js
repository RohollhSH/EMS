import React, {useState} from "react";
import classes from "./MainMenu.module.css";
import MenuButton from "./MenuElements/MenuButton";

const MainMenu = () => {
  const [menuButtons, setMenuButtons] = useState([
    {id: 0, text: "سال دوازدهم", activated: false, hasChild: true},
    {id: 1, text: "سال یازدهم", activated: false, hasChild: true},
    {id: 2, text: "سال دهم", activated: false, hasChild: true},
    {id: 3, text: "فیلم های تدریس", activated: false, hasChild: true},
    {id: 4, text: "تصاویر درسی", activated: false, hasChild: false},
    {id: 5, text: "جزوات و کتاب ها", activated: false, hasChild: false},
  ]);

  const [childMenuButtons, setChildMenuButtons] = useState([
    {id: 0, text: "فصل یک", parent: 0, hasChild: false},
    {id: 1, text: "فصل دو", parent: 0, hasChild: false},
    {id: 2, text: "فصل سه", parent: 0, hasChild: false},
    {id: 3, text: "فصل یک", parent: 1, hasChild: false},
    {id: 4, text: "فصل دوم", parent: 1, hasChild: false},
    {id: 5, text: "فصل یک", parent: 2, hasChild: false},
    {id: 6, text: "فصل دوم", parent: 2, hasChild: false},
    {id: 7, text: "سال دوازدهم", parent: 3, hasChild: false},
    {id: 8, text: "سال یازدهم", parent: 3, hasChild: false},
    {id: 9, text: "سال دهم", parent: 3, hasChild: false},
  ]);

  const [menuClicked, setMenuClicked] = useState(false);
  const [shownChildMenu, setShownChildMenu] = useState([]);

  let childButtonsArray = null;

  let y;

  const clickedMenuHandler = (theId) => {
    let shallowState = [...menuButtons];
    let changedButton = {...shallowState[theId]};

    if (!menuClicked) {
      //if menu is normal and gets clicked
      changedButton.activated = !changedButton.activated;
      shallowState[theId] = changedButton;
      setMenuButtons(shallowState);
      setMenuClicked(true);
      childButtonsArray = childMenuButtons.filter(x => x.parent === theId);
      setShownChildMenu(childButtonsArray);
    } else {
      //if menu is activated and gets clicked again
      const wasActiveButtonId = menuButtons.findIndex(b => {
        return b.activated === true;
      });
      const shallowMenuClicked = [...menuButtons];
      const wasActiveButton = {...shallowMenuClicked[wasActiveButtonId]};
      if (wasActiveButtonId === theId) {
        wasActiveButton.activated = false;
        shallowMenuClicked[wasActiveButtonId] = wasActiveButton;
        setMenuButtons(shallowMenuClicked);
        setMenuClicked(false);
        setShownChildMenu([]);

      } else {
        wasActiveButton.activated = false;
        changedButton.activated = true;
        shallowState[theId] = changedButton;
        shallowState[wasActiveButtonId] = wasActiveButton;
        setMenuButtons(shallowState);
        setMenuClicked(true);
        childButtonsArray = childMenuButtons.filter(x => x.parent === theId);
        setShownChildMenu(childButtonsArray);
      }
    }
  };


  let menuStyle;
  menuClicked ? menuStyle = classes.ClickedMainMenu : menuStyle = classes.NormalMainMenu;

  const x = menuButtons.map((p, index) =>
    <MenuButton
      key={p.id}
      click={clickedMenuHandler.bind(this, index)}
      activated={p.activated}
      menuState={menuClicked}
      hasChild={p.hasChild}
    >
      {p.text}
    </MenuButton>);

  if (shownChildMenu.length === 0) {
    y = null;
  } else {

    y = shownChildMenu.map((p, index) => (
      <MenuButton
        key={p.id}
        click={clickedMenuHandler.bind(this, index)}
        activated={p.activated}
        menuState={menuClicked}
        hasChild={p.hasChild}
        hasParent={p.parent}
      >
        {p.text}
      </MenuButton>
    ));
  }

  return (
    <div
      style={{
        height: "50vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: "5px",
        borderBottom: "2px solid #fff"
      }}
    >
      <div className={menuStyle}>
        {x}
      </div>
      <div
        className={classes.VerLine}
        style={!menuClicked ? {display:'none'} : null}
      />
      <div
        style={menuClicked ? {marginLeft: '6vw', width:'43vw'}:{display:'none'}}
      >
        {y}
      </div>
    </div>
  )
};

export default MainMenu;