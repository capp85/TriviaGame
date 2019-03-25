//timer, needs to count down from 60 seconds and alert when time is up and game over function
//create counter for correct and incorrect answers
//create click function for mutiple choice question with 4 possible answers
//can only choose one answer per question 
//if and else staements for correct and incorrect answers
//create another click function for a done button for users that have answered all question and now can submit them 


//create variables 

var panel = $('#quiz');
var countTimer = 30;

//on click functions for restart button, when you select an answer and for the start button.

$(document).on('click', '#start', function (e) { //start button
       $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">30</span></h2>');
       game.loadQuestion();
});

$(document).on('click', '.answer-button', function (e) { //answer button
       game.clicked(e);

});

$(document).on('click', '#restart', function (e) { //restartbutton
       game.reset();
});

// questions,answers and correct answers array
var questions = [{
       question: "Bradley Nowell was the guitarist/singer for what band?",
       answers: ["Nirvana", "Stone Temple Pilots", "Radiohead", "Sublime"],
       correctAnswer: "Sublime"
},
{
       question: "Bob Marley played what instrument?",
       answers: ["drums", "bass", "guitar", "bongos"],
       correctAnswer: "guitar"
},
{
       question: "Fall Out Boy is originally from what state?",
       answers: ["Miami", "Chicago", "New York", "Kentucky"],
       correctAnswer: "Chicago"
},
{
       question: "Rapper Tech N9ne owns what record label?",
       answers: ["Strange Music", "Atlantic Records", "Capitol Records", "Aftermath Records"],
       correctAnswer: "Strange Music"
}];

//created game function to apply all functions within 
var game = {
       questions: questions,
       current: 0,
       counter: countTimer,
       correct: 0,
       incorrect: 0,
       countdown: function () { //this is the countdown timer for the game and questions
              game.counter--;
              $('#counter').html(game.counter);

              if (game.counter <= 0) {
                     game.timeUp();
              }

       },
//this loads each question and includes countdown timer with it, also detects which answer was clicked       
       loadQuestion: function () {
              counter = setInterval(game.countdown, 1000);
              panel.html('<h2>' + questions[this.current].question + '</h2>');
              for (var i = 0; i < questions[this.current].answers.length; i++) {
                     panel.append('<input type="radio" class="answer-button" id="button"' + 'data-name="' + questions[this.current].answers[i] + '">' + questions[this.current].answers[i] + '</input>');
              }

       },
//this changes to the next question in the array        
       nextQuestion: function () {
              game.counter = countTimer;
              $('#counter').html(game.counter);
              game.current++;
              game.loadQuestion();
       },
//when 30 seconds has passed this alerts the user that time is up and adds an unaswered question to the unaswered counter and then switches to the next question in the array       
       timeUp: function () {
              clearInterval(counter);
              $('#counter').html(game.counter);

              panel.html("<h2>Time Is Up!</h2>");

              if (game.current === questions.length - 1) {
                     setTimeout(game.results, 3 * 1000);
              } else {
                     setTimeout(game.nextQuestion, 3 * 1000);
              }
       },
//this comes up at the end of the game and shows correct,incorrect and unaswered answer results and shows the restart button       
       results: function () {
              clearInterval(counter);

              panel.html('<h2>Heres Your Results</h2>');
              $('#counter').html(game.counter);
              panel.append('<h3>Correct Answers: ' + game.correct + '</h3>');
              panel.append('<h3>Incorrect Answers: ' + game.incorrect + '</h3>');
              panel.append('<h3>Unanswered: ' + (questions.length - (game.incorrect + game.correct)) + '</h3>');
              panel.append('<br><button id="restart">Restart?' +
                     '</button>');

       },
//this is for the answer click function which determines if the answer clicked is correct or incorrect        
       clicked: function (e) {
              clearInterval(counter);

              if ($(e.target).data("name") === questions[this.current].correctAnswer) {
                     this.aCorrectly();
              }
              else {
                     this.aIncorrectly();
              }
       },
//if incorrect answer was clicked it adds to the incorrect counter       
       aIncorrectly: function () {
              game.incorrect++;
              clearInterval(counter);

              if (game.current === questions.length - 1) {
                     setTimeout(game.nextQuestion, 3 * 1000);
              }
              else {
                     setTimeout(game.nextQuestion, 3 * 1000);
              }
       },
//if correct answer clicked adds to the correct counter       
       aCorrectly: function () {
              clearInterval(counter);
              game.correct++;

              if (game.current === questions.length - 1) {
                     setTimeout(game.results, 3 * 1000);
              }
              else {
                     setTimeout(game.nextQuestion, 3 * 1000);
              }
       },
 //this resets the whole game completely       
       reset: function () {
              this.current = 0;
              this.counter = countTimer;
              this.correct = 0;
              this.incorrect = 0;
              this.loadQuestion();

       }
};




