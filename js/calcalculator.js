//Women BMR = 655 + (9.6 X weight in kg) + (1.8 x height in //cm) – (4.7 x age in yrs)
//Men BMR = 66 + (13.7 X weight in kg) + (5 x height in cm) – //(6.8 x age in yrs)

//Create scope for calculator application
var Calculator = {};

// Add functions here
Calculator.sayHello = function(a) {
  alert(a)
}
// addEventListener, can't use onclick more than once. look up

// Access button element
Calculator.btn = document.getElementById("calculate");

// When button is clicked calculate Total Daily Energy Expenditure (TDEE)
Calculator.btn.onclick = function() {
  //Example of running a function inside onclick handler
  Calculator.sayHello("Hello");
  //Put value of elements into variables

  var weight = Number(document.getElementById("weight").value);
  var height = Number(document.getElementById("height").value);
  var age = Number(document.getElementById("age").value);
 
  var activityFactor = document.getElementById("activityFactor");
  var userActivity = activityFactor.options[activityFactor.selectedIndex].value;  
  
  var gender = document.getElementById("gender");
  var userGender = gender.options[gender.selectedIndex].text;
 
 
 //Validating inputs

 // Redundancy in return false and alert. 
 // if variables are in object you can loop through and validate each one. 
  // Make sure they choose a gender
  if ( userGender === "---" ) {
    alert("Please choose a gender");
    return false;
  }
  // make sure input is valid 
  // with "Number" there is no empty string. 

  // if (isNan == weight) 

  if ( isNaN(weight) ) {   
    alert("Please enter your weight");
    return false;
  } 
  if ( isNaN(height) ) {   
    alert("Please enter your height");
    return false;
  }
  if ( isNaN(age) ) {   
    alert("Please enter your age");
    return false;
  }       
  // Make sure they choose an activity factor   
  if ( userActivity === "0" ) {
    alert("Please choose an Exercise/Activity Level");
    return false;
  }  
  // When Male use this equation  
  if ( userGender === "Male" ) {
    var bmr = ((66 + (13.7 * weight)) + (5 * height) - (6.8 * age));
    // final calculation, round to integer   
    var tdee = parseInt(bmr * Number(userActivity));
    // print onto document 
    document.getElementById("answer").innerText = "Your Total Daily Energy Expenditure (TDEE) is " + tdee;
  }
  // if female run different equation
  else if ( userGender === "Female" ) {
    var bmr = ((655 + (9.6 * weight)) + (1.8 * height) - (4.7 * age));
    // make sure input is valid  
    if ( isNaN(bmr) | weight === "" | height === "" | age === "" ) {   
      alert("Please enter number");
      return false;
    }
    // final calculation, round to integer 
    var tdee = parseInt(bmr * Number(userActivity));
    // print onto document\  
    document.getElementById("answer").innerText = "Your Total Daily Energy Expenditure (TDEE) is " + tdee;
  }
}

//Access kgconvert button
Calculator.kgConvert = document.getElementById("kgConvert");

// when button is clicked, run function
Calculator.kgConvert.onclick = function() {  
  //Get value from input box and store it into lbs as number
  var lbs = Number(document.getElementById("lbConvert").value);
  
  //Check if valid input    
  if ( isNaN(lbs) ) {   
    alert("Please enter weight in lbs");
    return false;
  }

  //convert lbs to kg as integer and store in variable 
  var kg = parseInt(lbs * 0.45);
  
  //Access weight value    
  var weight = document.getElementById("weight").value;
  
  //Store value of kgs as weight value    
  document.getElementById("weight").value = kg;
};
   
//Access cmconvert bottom
Calculator.cmConvert = document.getElementById("cmConvert");

//When cmconvert button clicked, run function
Calculator.cmConvert.onclick = function() {
  //access feet and convert to inches then store in new variable
  var feetToInches = Number(document.getElementById("ftConvert").value) * 12;
  // access inches and store value of input into variable
  var inches =  Number(document.getElementById("inchConvert").value);
    
  //make sure inches is a number
  if( isNaN(inches) ) {
    alert("Please enter height in inches");
    return false;
  }

  //make sure feet is a number
  if( isNaN(feetToInches) | feetToInches == "" ) { 
    alert("Please enter height in feet");
    return false;
  }

  // calculate cm and store as integer into new variable
  var cm = parseInt((inches + feetToInches) * 2.54);
  
  //Access value of height input 
  var height = document.getElementById("height").value;
  
  // make cm new value of height
  document.getElementById("height").value = cm;
} 






   