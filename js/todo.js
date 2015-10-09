

// To Do List

// Check off item list
function updateItemStatus() {
// Make id of checkbox only a unique number 
    var cbId = this.id.replace("cb_", "");
// Put specific checkbox id into itemText variable
     var itemText = document.getElementById("item_" + cbId);
// Access checked class in CSS and apply it to checked item
    if (this.checked) {
        itemText.className = "checked";
    } else {
        itemText.className = "";
    }
}
// Function to rename item when text is clicked on
function renameItem() {
// Put text from user into newText variable
    var newText = prompt("Rename or edit this list Item");
// Make sure text is valid
    if (!newText || newText == "" || newText == " ") {
        return false;
    }
// Add newText content to the innertext of clicked span
    this.innerText = newText;
}

function removeItem() {
    //this == listItem
     this.style.display = "none";
} 

function addNewItem(list, itemText) {
//  <li>
    //<input type="checkbox">
    //<span>Finish Website</span>
//  </li>
    
// Use Date() to give each li a unique id   
    var date = new Date();
    var id = "" + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();

 // Create li element    
    var listItem = document.createElement("li");
 // Give each new li element a unique id
    listItem.id = "li_" + id;
//Double clicking on li call removeItem function
    listItem.ondblclick = removeItem;
     
// Create new input checkbox element     
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
// Unique id for each checkbox
    checkBox.id = "cb_" + id;
// Clicking checkbox calls updateItemStatus function
    checkBox.onclick = updateItemStatus;
  
// Create new span element and give it unique id    
    var span = document.createElement("span");
    span.id = "item_" + id;
// Make text in span equal a parameter in the addNewItem()  
    span.innerText = itemText;
//Clicking text in span calls rename function
    span.onclick = renameItem;
    
// Add list item elements 
    listItem.appendChild(checkBox);
    listItem.appendChild(span);
    
    list.appendChild(listItem);
    
}

// Access text input box
var newItemText = document.getElementById("newItemText");
// Focus on text box when page loads
newItemText.focus();

// Access button on page
var btnNew = document.getElementById("btn");
// When button is clicked run function
btnNew.onclick = function() {
// Put the value of newItemText into itemText variable
  var itemText = newItemText.value;
// Make sure text isn't blank or one blank space
   if (itemText == "" || itemText == " ") {
       return false;
   }
// If true run addNewItem function with new text
  addNewItem(document.getElementById("toDoList"), itemText);
};

//Function to add text using return key on keyboard
newItemText.onkeyup = function(event) {
  //Event.which (13) -> enter (return)
  //Only works if enter is pressed
    if (event.which == 13) {
  var itemText = newItemText.value;
// Make sure text isn't blank or one blank space   
      if (itemText == "" || itemText == " ") {
          return false;
       }
// If true run addNewItem function with new text
       addNewItem(document.getElementById("toDoList"), itemText);
// Once new list item as been added focus back on textbox 
        newItemText.focus();
// Select text so it is easy to delete
        newItemText.select();
     }
};



