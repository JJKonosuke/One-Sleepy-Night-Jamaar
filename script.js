/* Declare variables below to save the different sections (divs) of your story*/
let button = document.querySelector(".option-one");
let button2 = document.querySelector(".option-two")
let optionOne = document.querySelector(".option-one-screen")
let optionTwo = document.querySelector(".option-two-screen")
let midIdc = document.querySelector(".mid-option-one")
let midSleep = document.querySelector(".mid-option-two")
let optiononeEnd = document.querySelector(".option-one-end")
let optiontwoEnd = document.querySelector(".option-two-end")
let resetStory = document.querySelector(".reset-story")


button.onclick = function() {
  optionOne.style.display = "block";
}
button2.onclick = function() {
  optionTwo.style.display = "block";
}
midIdc.onmouseover = function() {
  optiononeEnd.style.display = "block";
}
midSleep.onmouseover = function() {
  optiontwoEnd.style.display = "block";
}
resetStory.onclick = function() {
  optionOne.style.display = "none";
  optionTwo.style.display = "none";
  optiononeEnd.style.display = "none";
  optiontwoEnd.style.display = "none";
}


/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!*/
/*
optionOne.onclick=function(){
optionOne.style.display = "block";
};
*/
/*
INSERT_VARIABLE.onclick=function(){

}; */

/*
INSERT_VARIABLE.onclick=function(){

};
*/


