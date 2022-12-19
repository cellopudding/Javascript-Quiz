//Var Elements
var startBtnEl = document.querySelector("#startBtn");
var timerEl = document.querySelector(".timer");
var questionsEl = document.querySelector("#questions");
var choicesEl = $('#choices');
var submitBtnEl = $('#submit');
var initialsEl = $('#initials');
var startEl = document.querySelector("#Lets-start");
var time = 60
let timeInt

var questions = [
    {title: "Which HTML element do we link the JavaScript in?",
    choices: ["<scripting>", "<javascript>", "<script>", "<js>"],
    answer: "<script>"},

    {title: "What is Boolean?",
     choices: ["A form of data with a true of false value", 
               "An addictive substance commonly found in the ghost rap community",
                "A Swedish dessert", "A Nordic boogeyman"],
     answer: "A form of data with a true or false value"},

    {title: "Who owns the trademark to JavaScript?",
     choices: ["Elon Musk", "Oracle Corporation", "Apple", "Microsoft"],
     answer: "Oracle Corporation"},

    {title: "What is a tool commonly used by developers to debug and check their code?",
     choices: ["Boolean", "Wrench", "console.log", "Who cares! It's fine"],
     answer: "console.log"}
];


function startTimer(){
   var timeHolder= document.createElement("p") 
   timerEl.appendChild(timeHolder)
   timeHolder.textContent= time
   console.log(time)
   
  

    timeInt = setInterval(function (){
     timeHolder.textContent--
     if (timeHolder.textContent <=0) {
        //eventually write quiz end
        clearInterval(timeInt)
     }
   },1000)

}
var currentQuestionI = 0
function nextQuestion(){
var currentQuestion = questions[currentQuestionI]
var questionTitle = document.querySelector("#quiz-question")
questionTitle.innterText=currentQuestion.title
questionsEl.appendChild(questionTitle)
for (let i=0; i<currentQuestion.choices.length;i++){
    var element= currentQuestion.choices[i]
    //query selector for the four buttons
    //set text content to buttons to = element on line 57 
}
}
startBtnEl.addEventListener("click", function(){
    console.log("click")
    questionsEl.classList.remove("hide")
    startEl.classList.add("hide")
    startTimer()
    nextQuestion()

})


