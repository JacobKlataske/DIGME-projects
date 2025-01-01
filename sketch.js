/*
Program to create a heart with classic candy heart colors that has 
candy heart text displayed over it. There is a randomize heart button which
pics a random colored heart image from an array of images, a button that
selects a random phrase from the text array, and a button that randomly chooses both a heart image and a text phrase.



*/


//heart array for storing heart pngs
let heartArray = [];

//heart candy text phrases
let textArray = ["Love You","Be Mine", "Kiss Me","XOXO","UR Cute", "True Love", "My Fav", "Beloved"];

//global variable to keep track of the current index of the heart
let heartIndex;  

//global variable to keep track of the current index of the text
let textIndex;


//variable declaration of text as empty to start
let txt = '';

//user input
let input;

//used to load the images and load them into the array
function preload() {
  
  //loads images into the program and places them into the heart array
  heartArray[0] = loadImage("pinkheart.png");
  heartArray[1] = loadImage("orangeheart.png");
  heartArray[2] = loadImage("greenheart.png");
  heartArray[3] = loadImage("purpleheart.png");
  heartArray[4] = loadImage("redheart.png");
  heartArray[5] = loadImage("yellowheart.png");
}

function setup() {
  createCanvas(400, 400);
  
  //user input bar
  input = createInput(txt);
  input.position(10,375);

  
  //creates the submit button attached to the user input bar
  userButton = createButton('submit');
  userButton.position(input.x + input.width, 375);
  userButton.mousePressed(userText);
  
   
  
  //creates the randomize heart button
  heartButton = createButton("Randomize Heart");
  heartButton.position(10, 40);
  heartButton.mousePressed(randomizeHeart);
  
  
    //creates the randomize text button

  textButton = createButton("Randomize Text");
  textButton.position(10,15);
  textButton.mousePressed(randomizeText);
  
  
    //creates the randomize both button

  bothButton = createButton("Randomize Both");
  bothButton.position(280, 15);
  bothButton.mousePressed(randomizeBoth);
  
  //clears the canvas
  
   clearButton = createButton("Clear Canvas");
  clearButton.position(300, 375);
  clearButton.mousePressed(clearCanvas);
}

function draw() {
  background(220);
  
  

  //checks to ensure that the hearts get displayed over the background
  //also calls the makeHeart function
  if (heartIndex !== undefined) {
    makeHeart(heartIndex);
  }
  
  textSize(20);
  textAlign(CENTER, CENTER);
  fill("#f33857");
  text(txt, width / 2, height / 2);
  
  //checks to ensure that the text gets displayed over the background
  //also calls the displayText function
  if(textIndex !== undefined){
    displayText(textIndex);
  }
 
}


function userText() {
  txt = input.value(); // Update the 'txt' variable with the user's input
  input.value(''); // Clear the input field after submitting
  
}

//used to randomize which heart image is displayed on screen
function randomizeHeart() {
  heartIndex = Math.floor(Math.random() * heartArray.length);
  
}


//picks the chosen heart from the randomize function
function makeHeart(index) {
  image(heartArray[index], 100, 100, 200, 200); 
}

//used to randomize what text is displayed on screen

function randomizeText() {
  textIndex = Math.floor(Math.random() * textArray.length);
  
}

//displays the text from the array in the chosen color to match the 
//conversation hearts

function displayText(index){
  textSize(20);
  textAlign(CENTER, CENTER);
  fill("#f33857");
  text(textArray[index], width / 2, height / 2);
  
}

//randomizes both heart and text at the same time
function randomizeBoth(){
  heartIndex = Math.floor(Math.random() * heartArray.length);
  textIndex = Math.floor(Math.random() * textArray.length);
}

function clearCanvas() {
  clear(); // Clears the canvas
  heartIndex = undefined; // Reset heart index
  textIndex = undefined; // Reset text index
  txt = ''; // Reset user text
}
