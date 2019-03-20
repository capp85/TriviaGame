//create variables 
//timer, correct, incorrect, done, game over  
var timer = 60;
var correct = 0;
var incorrect = 0;
var done;
var gameOver;


//timer, needs to count down from 60 seconds and alert when time is up and game over function
timer = 60;
var downloadTimer =  setInterval(function() {
    document.getElementById("timer").value = 0 - timer;
    timer -= 1;
    if (timer <= 0)
       clearInterval(downloadTimer);
       console.log(document.getElementById ("timer").value);

}, 1000);



  //create counter for correct and incorrect answers


  //create click function for mutiple choice question with 4 possible answers
  //can only choose one answer per question 
  //if and else staements for correct and incorrect answers



  //create another click function for a done button for users that have answered all question and now can submit them 