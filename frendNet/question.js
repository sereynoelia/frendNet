var newQuestion = "this works";

const questions = [];
var randnum = Math.floor(Math.random() * 4);

questions.push("How much variety is there in your work?", "What do you like/dislike most about your work?",
 "What are your primary job responsibilities?","How did your career path change over time?",
 "How do you expect the industry to change in the next five years?");
console.log(randnum); // 3

newQuestion = questions[randnum];


var askquestion = document.getElementById("askquestion");
askquestion.innerHTML = newQuestion;

console.log(newQuestion)