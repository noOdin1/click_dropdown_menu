<h1>A generic drop down menu</h1>
This is a generic drop down menu that shows the menu when the<br />
user clicks on the button. The module will have variables and function<br /> 
exports for the user to customize the button. The main function that <br />
the user will interact with is: <br />
<pre>
  htmlDropDown
</pre>
This function will return a html 'div' element. The returned html 'div' <br />
element will contain: <br />
<pre>
  1. button
  2. menu list
</pre>

The following variables are used to change the drop down menu text and menu items: <br>

<pre>
  1. dropdownBtnTxt
  2. menuItems
</pre>

To change the button text:

<pre>
  dropdownBtnTxt = "new text";
</pre>

Do this before calling <pre>'htmlDropDown()'.</pre> <br>

<h3>Changing the menu items display and links</h3>
The variable 'menuItems' is the variable responsible to for text on the items and<br>
and links to other resources. The following is the structure for this variable:<br>
<pre>
  menuItems is an object with the following,
  {
    name: ['href link', 'classes', 'unique id for the item']
  }
</pre>
One possible example for this would be:<br>
<pre>
  menuItems = {
    Home: ["home.html", "menuItems listItems", "homeMenuItemId"],
    About: ["about.html", "menuItems listItems", "aboutMenuItemId"],
    Contact: ["contact.html", "menuItems listItems", "contactMenuItemId"],
  }
</pre>

Do this before calling <pre>'htmlDropDown()'.</pre> <br>

Example of using module:

<pre>
  dropdownBtnTxt = "new text";
  menuItems = {
    Home: ["home.html", "menuItems listItems", "homeMenuItemId"],
    About: ["about.html", "menuItems listItems", "aboutMenuItemId"],
    Contact: ["contact.html", "menuItems listItems", "contactMenuItemId"],
  }
  let dropDownButton = htmlDropDown();
  document.body.appendChild(dropDownButton);
</pre>
