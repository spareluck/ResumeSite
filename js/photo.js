function preloadImage(url)
{
    var img=new Image();
    img.src=url;
}

preloadImage("../images/santa-monica.jpg")
preloadImage("../images/dragon.jpg")
preloadImage("../images/venice.jpg")
preloadImage("../images/cave.jpg")

//Changes src attribute of image and loops through array
function changeImage() {
   myImage2.setAttribute("src", imageArray2[imageIndex1]);
   imageIndex1++
   document.getElementById("description2").innerHTML =    imageDescription2[imageIndex1-1];
   //Restarts loop to return to first image
    if (imageIndex1 >= imageArray2.length) {
        imageIndex1=0;
    }
};
//Image changes every 4 seconds
setInterval(changeImage, 4000);

// Next and Previous buttons
var myImage2 = document.getElementById("slideShowImage2");

// Array of image files
var imageArray2 = ["../images/apple-tractor.jpg", "../images/dragon.jpg", "../images/venice.jpg", "../images/cave.jpg"];

// Array of image descriptions
var imageDescription2 = ["Tractor at sunset", "Dragon at Wei Wei art exhibit", "Venice Beach Skateboard Park", "Coastal Cave at Point Reyes in Northern California"];

// Creating viarable to make it easier to work with end of array
var imageArray2Length = imageArray2.length - 1;

// Variable to keep track of index in array
var imageIndex1 = 0;

// function to change image file through use of buttons
function changeImageManually(num) {
    
//Connected to inline JS on next and prev buttons
    imageIndex1 += num;
    
//Loops back to beginner once the last image is reached
    if (imageIndex1 > imageArray2Length) {
        imageIndex1 = 0;
    }
//Loops to end if Prev button is pressed at beginning image
    if (imageIndex1 < 0) {
        imageIndex1 = imageArray2Length;
    }
    
// Grabs image SRC and displays it on Page
    document.slideShowImage2.src = imageArray2[imageIndex1];
//Displays corresponding image discription
    document.getElementById("description2").innerHTML = imageDescription2[imageIndex1]
    return false;
}



