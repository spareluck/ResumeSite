var myImage = document.getElementById("slideShowImage");

var imageArray = ["images/beach.jpg", "images/apple-tractor.jpg", "images/dead-end.jpg", "images/la-sunset.jpg"];

var imageDescription = ["Beach in Northern California", "Silhouette of tractor at Sunset", "I think I went to the wrong neighborhood!", "Sunset Venice Beach"];

var imageIndex = 0;

function changeImage() {
   myImage.setAttribute("src", imageArray[imageIndex]);
   imageIndex++
   document.getElementById("description").innerHTML = imageDescription[imageIndex-1];

    if (imageIndex >= imageArray.length) {
        imageIndex=0;
    }
};

setInterval(changeImage, 4000);

var myImage2 = document.getElementById("slideShowImage2");

var imageArray2 = ["images/santa-monica.jpg", "images/dragon.jpg", "images/venice.jpg", "images/cave.jpg"];

var imageDescription2 = ["Santa Monica Sunset", "Dragon at Wei Wei art exhibit", "Venice Beach Skateboard Park", "Coastal Cave at Point Reyes in Northern California"];

var imageArray2Length = imageArray2.length - 1;

var imageIndex1 = 0;

function changeImageManually(num) {
    imageIndex1 += num;
    
    if (imageIndex1 > imageArray2Length) {
        imageIndex1 = 0;
    }
    if (imageIndex1 < 0) {
        imageIndex1 = imageArray2Length;
    }
    document.slideShowImage2.src = imageArray2[imageIndex1];

    document.getElementById("description2").innerHTML = imageDescription2[imageIndex1]
    return false;
};

function updateItemStatus() {
    var cbId = this.id.replace("cb_", "");
     var itemText = document.getElementById("item_" + cbId);
    if (this.checked) {
        itemText.className = "checked";
    } else {
        itemText.className = "";
    }
};

function renameItem() {

    var newText = prompt("Rename or edit this list Item");

    if (!newText || newText == "" || newText == " ") {
        return false;
    }
    this.innerText = newText;
};

function removeItem() {
     this.style.display = "none";
};

function addNewItem(list, itemText) {
 
    var date = new Date();
    var id = "" + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();

    var listItem = document.createElement("li");

    listItem.id = "li_" + id;

    listItem.ondblclick = removeItem;
       
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";

    checkBox.id = "cb_" + id;
    
    checkBox.onclick = updateItemStatus;
     
    var span = document.createElement("span");
    span.id = "item_" + id;

    span.innerText = itemText;

    span.onclick = renameItem;
    
    listItem.appendChild(checkBox);
    listItem.appendChild(span);
    
    list.appendChild(listItem);
    
};

var newItemText = document.getElementById("newItemText");
//newItemText.focus();

var btnNew = document.getElementById("btn");

btnNew.onclick = function() {
  var itemText = newItemText.value;

   if (itemText == "" || itemText == " ") {
       return false;
   }

  addNewItem(document.getElementById("toDoList"), itemText);
};

newItemText.onkeyup = function(event) {
 
 
    if (event.which == 13) {
  var itemText = newItemText.value;

      if (itemText == "" || itemText == " ") {
          return false;
       }

       addNewItem(document.getElementById("toDoList"), itemText);

        newItemText.focus();
        newItemText.select();
     }
};

var btn = document.getElementById("calculate");
btn.onclick = function() {

   var weight = Number(document.getElementById("weight").value);
   var height = Number(document.getElementById("height").value);
   var age = Number(document.getElementById("age").value);
   
   var activityFactor = document.getElementById("activityFactor");
   var userActivity = activityFactor.options[activityFactor.selectedIndex].value;
    
    
   var gender = document.getElementById("gender");
   var userGender = gender.options[gender.selectedIndex].text;
 
    if(userGender == "---") {
       alert("Please choose a gender");
       return false;
    }  
    if(userActivity == "0") {
       alert("Please choose an Exercise/Activity Level");
       return false;
    }
    if(userGender == "Male") {
        var bmr = ((66 + (13.7 * weight)) + (5 * height) - (6.8 * age));
        if (isNaN(bmr) | weight == "" | height == "" | age == ""){   
        alert("Please enter number");
        return false;
    } 
      var tdee = parseInt(bmr * Number(userActivity));
      document.getElementById("answer").innerText = "Your Total Daily Energy Expenditure (TDEE) is " + tdee;
    }
    if(userGender = "Female") {
    var bmr = ((655 + (9.6 * weight)) + (1.8 * height) - (4.7 * age));
      // make sure input is valid  
        if (isNaN(bmr) | weight == "" | height == "" | age == ""){   
        alert("Please enter number");
        return false;
    }
      var tdee = parseInt(bmr * Number(userActivity));
      document.getElementById("answer").innerText = "Your Total Daily Energy Expenditure (TDEE) is " + tdee;
    }
};

var kgConvert = document.getElementById("kgConvert");

kgConvert.onclick = function() {
   
    var lbs = Number(document.getElementById("lbConvert").value);
    
    if (isNaN(lbs)){   
        alert("Please enter weight in lbs");
        return false;
    }
    
  var kg = parseInt(lbs * 0.45);
    
 var weight = document.getElementById("weight").value;  
 document.getElementById("weight").value = kg;

};
   
var cmConvert = document.getElementById("cmConvert");
cmConvert.onclick = function() {
    var feetToInches = Number(document.getElementById("ftConvert").value) * 12;
 var inches =  Number(document.getElementById("inchConvert").value);

    if(isNaN(inches)) {
        alert("Please enter height in inches");
        return false;
    }
    if(isNaN(feetToInches) | feetToInches == ""){ 
        alert("Please enter height in feet");
        return false;
    }
    var cm = parseInt((inches + feetToInches) * 2.54);
    var height = document.getElementById("height").value;
 document.getElementById("height").value = cm;

}; 



















