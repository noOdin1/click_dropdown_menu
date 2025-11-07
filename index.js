/* click_dropdown_menu - index.js */

import {
  createP,
  createA,
  createDiv,
  createButton,
  createImg,
  createForm,
  createFieldset,
  createLegend,
  createLabel,
  createInput,
  createSelect,
  createOption,
} from "./element_creator.js";
export {
  htmlDropDown,
  setButtonText,
  setMenuItems,
  clickDropDown,
  addStyleSheet,
};

/**
 * Variables that can be set by the module user before creating the
 * drop down menu.
 **/
let btnCntClass = "dropdown";
let dropdownBtnId = "dropDownBtn";
let dropdownBtnClass = "dropbtn";
let dropdownBtnTxt = "Dropdown";
let dropdownMenuId = "dropDownMenu";
let dropdownMenuClass = "dropdown-content";
let menuItems = {
  /**
   * Object to hold the menu items inside the drop down menu
   * This object structure would be:
   *  { name: [classnames, id, href_link], }
   *   where:
   *     'name' will appear on the 'a' innerHTML
   *     'href_link' will be the link to redirect when it's clicked on
   *     'classnames' will be a space separated class names
   *     'id' is the unique id to identify the menu item
   **/
  // name: [href_link, classnames, id],
  Home: ["#home", "menuItem listItem", ""],
  Categories: ["#category", "menuItem listItem", ""],
  About: ["#about", "menuItem listItem", ""],
  Contact: ["#contact", "menuItem listItem", ""],
};
let cssScript = `
.${dropdownBtnClass} {
  background-color: #0099FF;
  color: black;
  font-size: 16px;
  padding: 1em;
  border: none;
  cursor: pointer;
}

.${dropdownBtnClass}:hover,
.${dropdownBtnClass}:focus {
  background-color: #0033EE;
  color: white;
}

.${btnCntClass} {
  position: relative;
  display: inline-block;
}

.${dropdownMenuClass} {
  display: none;
  position: absolute;
  background-color: #fefefe;
  min-width: 10em;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.${dropdownMenuClass} a {
  color: black;
  padding: 0.8em 1em;
  text-decoration: none;
  display: block;
}

.${dropdownMenuClass} a:hover {
  background-color: #aaa;
  box-shadow: 8px 4px 8px 0px rgba(0, 0, 0, 0.2);
}

.show {
  display: block;
}
`;

function clo(str) {
  console.log(str);
}

function cdi(str) {
  console.dir(str);
}

function cta(str) {
  console.table(str);
}

function addStyleSheet(cssScript = cssScript) {
  /* Dynamically insert css styling */
  let style = document.createElement("style");
  style.type = "text/css"; // set the style type
  // Add the CSS rules to the style statement
  style.appendChild(document.createTextNode(cssScript));

  document.head.appendChild(style);
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function clickDropDown() {
  document.getElementById(dropdownMenuId).classList.toggle("show");
}


function removeAllChildElemById(elem) {
  let child = elem.lastElementChild;

  while (child) {
    elem.removeChild(child);
    child = elem.lastElementChild;
  }
}

const setMenuItems = (obj) => {
  if (obj == null || obj == undefined) {
    clo(`[${setMenuItems.name}] Empty object passed in`);
    return;
  }
  let tmpMenu = document.getElementById(`${dropdownMenuId}`);
  if (tmpMenu == null || tmpMenu == undefined) {
    clo(`[${setMenuItems.name}] Menu not found`);
    return;
  }

  removeAllChildElemById(tmpMenu);

  Object.keys(obj).forEach((item) => {
    let tmpMenuItem = createA(obj[item][1], obj[item][2], obj[item][0]);
    tmpMenuItem.setText(item);

    tmpMenu.appendChild(tmpMenuItem);
  });
};

/* function to create the html elements for the drop down menu */
const htmlDropDown = (
  buttonContainerClass = btnCntClass,
  dropDownButtonId = dropdownBtnId,
  dropDownButtonClass = dropdownBtnClass,
  dropDownMenuId = dropdownMenuId,
  dropDownMenuClass = dropdownMenuClass,
  dropDownMenuItems = menuItems,
) => {
  addStyleSheet(cssScript);
  let btnContainer = createDiv(buttonContainerClass);

  let btn = createButton(dropDownButtonClass, dropDownButtonId);
  btn.setText(`${dropdownBtnTxt}`);

  let dropDownMenu = createDiv(dropDownMenuClass, dropDownMenuId);
  Object.keys(dropDownMenuItems).forEach((item) => {
    let tmpMenuItem = createA(
      menuItems[item][1],
      menuItems[item][2],
      menuItems[item][0],
    );
    tmpMenuItem.setText(item);
    dropDownMenu.appendChild(tmpMenuItem);
  });
  btnContainer.appendChild(btn);
  btnContainer.appendChild(dropDownMenu);
  btn.addEventListener("click", clickDropDown);

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function (event) {
    // globalThis.onclick = function (event) {
    if (!event.target.matches(`.${dropdownBtnClass}`)) {
      let dropdowns = document.getElementsByClassName(dropdownMenuClass);
      if (dropdowns[0].classList.contains("show")) {
        dropdowns[0].classList.remove("show");
      }
    }
  };

  return Object.assign(btnContainer);
};
