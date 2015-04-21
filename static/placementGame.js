var tryAgainBlock = document.getElementById("tryAgain"); //variable used to write 'Try Again' into
var problemBlock = document.getElementById("problems"); //variable used to write problems into

var answers = document.getElementById("answers").value; //gets the answer set that is passed in from the HTML
var problems = document.getElementById("questions").value; //gets the questions that are passed in from the HTML

//Parse through answers and problems so we have an array of just answers and an array of problems, not a string of mumbojumbo
answers = answers.slice(1,answers.length-1); 
answers = answers.split(", ");
problems = problems.slice(3,problems.length-2);
problems = problems.split("', u'");

//underlines the proper number in the problem
var placement; //placement is the variable that indicates the number to be underlined
var pos = 0; //pos is position in the answers/problems array
var compAnswer = answers[0]; //the answer to the problem

var userAnswer; //initialize the user's answer. Updated when a button is pushed

function underLinePlacement(pos){
	var curProblem = problems[pos]; 

	if(curProblem){
		if (curProblem.length == 1){
			if(answers[pos] === "1"){
				placement = 0;
			}
		}

		if (curProblem.length == 2){
			if(answers[pos] === "1"){
				placement = 1;
			}
			if(answers[pos] === "10"){
				placement = 0;
			}
		}

		if (curProblem.length == 3){
			if(answers[pos] === "1"){
				placement = 2;
			}
			if(answers[pos] === "10"){
				placement = 1;
			}
			if(answers[pos] === "100"){
				placement = 0;
			}
		}

		var firstPartWord = curProblem.slice(0,placement);
		var underlineLetter = curProblem.slice(placement,placement+1);
		var lastPartWord = curProblem.slice(placement+1, curProblem.length);

		problemBlock.innerHTML = "<h1>" + firstPartWord + "<u>" + underlineLetter + "</u>" + lastPartWord + "</h1>";
	}else {
		isComplete = true;
		console.log("finished game")
		problemBlock.innerHTML = "<p>Great Work!</p>";
	}
}

underLinePlacement(0); //initializes the first game

var userAnswerOne = document.getElementById("one"); //gets the value of the one button
var userAnswerTen = document.getElementById("ten"); //gets the value of the ten button
var userAnswerHundred = document.getElementById("hundred"); //gets the value of the hundred button

var buttonClicked = false; //No button has been pressed, so initialize to false
userAnswerOne.onclick = function(){
	userAnswer = 1;
	buttonClicked = true;
	var winner = gameCheck(userAnswer, compAnswer);
	playGame(winner);
}

userAnswerTen.onclick = function(){
	userAnswer = 10;
	buttonClicked = true;
	var winner = gameCheck(userAnswer, compAnswer);
	playGame(winner);
}

userAnswerHundred.onclick = function(){
	userAnswer = 100;
	buttonClicked = true;
	var winner = gameCheck(userAnswer, compAnswer);
	playGame(winner);
}

var markerUnlock = 0;
var score = 100;
function gameCheck(userAnswer, compAnswer){
	if (buttonClicked == true && userAnswer == compAnswer){
		console.log("winner", score);
		tryAgainBlock.innerHTML = "";
		if ((pos+1) % 3 == 0){
			markerUnlock++;
			tryAgainBlock.innerHTML = "<p>Click on next marker to unlock</p>";
		}
		return true;
	}else if (buttonClicked == true && userAnswer != compAnswer){
		score -= 6;
		console.log("loser", score);
		tryAgainBlock.innerHTML = "<p>Try Again</p>";
		return false;
	}
}

var isComplete = false;

function playGame(winner){
	if (pos<answers.length){
		if (winner){
			pos++;
			compAnswer = answers[pos];
			underLinePlacement(pos);
		} else {
			underLinePlacement(pos);
		}
	}
}



