<h1>A generic drop down menu</h1>
This is a generic drop down menu that shows the menu when the<br />
user clicks on the button. The module will have function to modify variables for<br /> 
exports, and used by the users to customize them. The main function that <br />
the user will interact with is: <br />
<pre>
  htmlDropDown()
</pre>
This function will return a html 'div' element. The returned html 'div' <br />
element will contain: <br />
<pre>
  1. button
  2. menu list
</pre>

The following functions are used to change the drop down menu text and menu items: <br>

<pre>
  1. setButtonText()
  2. setMenuItems()
</pre>

<h3>Changing the button text</h3>
To change the button text:

<pre>
  setButtonText("new text");
</pre>

Do this after calling <pre>'htmlDropDown()'.</pre> <br>

<h3>Changing the menu items display and links</h3>
The menu accept an object that has the information with this format: <br>
<pre>
  menuItems is an object with the following,
  {
    name: ['href link', 'classes', 'unique id for the item']
  }
</pre>
One possible example for this would be:<br>
<pre>
  setMenuItems({
    Home: ["home.html", "menuItems listItems", "homeMenuItemId"],
    About: ["about.html", "menuItems listItems", "aboutMenuItemId"],
    Contact: ["contact.html", "menuItems listItems", "contactMenuItemId"],
  });
</pre>

Do this after calling <pre>'htmlDropDown()'.</pre> <br>

Example of using module:

<pre>
  let dropDownButton = htmlDropDown();
  document.body.appendChild(dropDownButton);
  setButtonText("new text");
  setMenuItems({
    Home: ["home.html", "menuItems listItems", "homeMenuItemId"],
    About: ["about.html", "menuItems listItems", "aboutMenuItemId"],
    Contact: ["contact.html", "menuItems listItems", "contactMenuItemId"],
  });
</pre>

The function addStyleSheet() is a generic function to add any style sheet <br>
to the html "head" element.
