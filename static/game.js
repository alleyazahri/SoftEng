/**
 * Created by Alley on 3/22/2015.
 */

var canvasWidth = 420;
var canvasHeight = 420;

$('#gameCanvas').attr("width",canvasWidth);
$('#gameCanvas').attr("height",canvasHeight);
var pos = 0; //variable to indicate how far a person is in the connect the dots game

var canvas =$('#gameCanvas')[0].getContext('2d');
//Images for Connect the Dots
var image = new Image();
image.src = "/static/WolfInit.png";
var img1 = new Image();
img1.src = "/static/Wolf1.png";
var img2 = new Image();
img2.src = "/static/Wolf2.png";
var img3 = new Image();
img3.src = "/static/Wolf3.png";
var img4 = new Image();
img4.src = "/static/Wolf4.png";
var img5 = new Image();
img5.src = "/static/Wolf5.png";
var img6 = new Image();
img6.src = "/static/Wolf6.png";
var img7 = new Image();
img7.src = "/static/Wolf7.png";
var img8 = new Image();
img8.src = "/static/Wolf8.png";
var img9 = new Image();
img9.src = "/static/Wolf9.png";
var img10 = new Image();
img10.src = "/static/Wolf10.png";
var img11 = new Image();
img11.src = "/static/Wolf11.png";
var img12 = new Image();
img12.src = "/static/Wolf12.png";
var img13 = new Image();
img13.src = "/static/Wolf13.png";
var img14 = new Image();
img14.src = "/static/Wolf14.png";
var img15 = new Image();
img15.src = "/static/Wolf15.png";
var img16 = new Image();
img16.src = "/static/Wolf16.png";
var img17 = new Image();
img17.src = "/static/Wolf17.png";
var img18 = new Image();
img18.src = "/static/Wolf18.png";
var img19 = new Image();
img19.src = "/static/Wolf19.png";
var img20 = new Image();
img20.src = "/static/Wolf20.png";
var imgArray = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20];

canvas.strokeRect(1,1,canvasWidth,canvasHeight-2); // border for canvas

var tryAgainBlock = document.getElementById("tryAgain"); //variable used to write 'Try Again' into
var problemBlock = document.getElementById("problems"); //variable used to write problems into
var scoreBlock = document.getElementById("curScore"); //variable used to write the current score into.

window.addEventListener("mousedown", getPosition(event)); //allows the person to 'click' the canvas
$(image).load(function(){ //makes sure the image is loaded before drawing it onto the canvas.
    canvas.drawImage(image,(canvasWidth/2)-(image.width/2),(canvasHeight/2)-(image.height/2)+10);
    //canvas.drawImage(im,(canvasWidth/2)-(im.width/2),(canvasHeight/2)-(im.height/2)+10);
});

var answers = document.getElementById("answers").value;
var problems = document.getElementById("questions").value;
//Parse through answers and problems so we have an array of just answers and an array of problems, not a string of mumbojumbo
answers = answers.slice(1,answers.length-1);
answers = answers.split(", ");
problems = problems.slice(3,problems.length-2);
problems = problems.split("', u'");

problemBlock.innerHTML = "<h1>" + problems[0] + "</h1>"; //Put a problem in the problem block

//Placing all answers onto the canvas
canvas.strokeText(answers[0],250,50); //point 1
canvas.strokeText(answers[1],245,132); //point 2
canvas.strokeText(answers[2],260,205); //point 3
canvas.strokeText(answers[3],284,305); //point 4
canvas.strokeText(answers[4],307,195); //point 5
canvas.strokeText(answers[5],268,363); //point 6
canvas.strokeText(answers[6],190,315); //point 7
canvas.strokeText(answers[7],253,305); //point 8
canvas.strokeText(answers[8],181,390); //point 9
canvas.strokeText(answers[9],184,260); //point 10
canvas.strokeText(answers[10],158,270); //point 11
canvas.strokeText(answers[11],121,380); //point 12
canvas.strokeText(answers[12],91,340); //point 13
canvas.strokeText(answers[13],95,275); //point 14
canvas.strokeText(answers[14],101,194); //point 15
canvas.strokeText(answers[15],85,120); //point 16
canvas.strokeText(answers[16],80,35); //point 17
canvas.strokeText(answers[17],117,71); //point 18
canvas.strokeText(answers[18],122,130); //point 19
canvas.strokeText(answers[19],185,130); //point 20

//These variables hold the coordinates for the buttons
var xcoord = [407,404,419,445,494,434,369,414,347,369,316,289,249,267,288,273,266,301,307,369];
var ycoord = [31,119,203,304,186,339,295,304,369,252,261,360,329,280,186,108,33,67,123,123];
//cnst = button 'width' and 'height'
var cnst = 10;

var score = 100; //the following function will subtract from the score if a student gets the wrong answer.
var scorep2 = 100.0; //holds the 'double' value of score

scoreBlock.innerHTML = "<h3>Current Score: " + score + "</h3>"; // Initialize the score output. Just sets it to the starting score, 100

//Form Stuff
var formScore = document.getElementById('id_score');
formScore.value = score; // Make the score field in the hidden form score.
document.getElementById('id_level').value = 1; // Make the level field in the hidden form the current level.
document.getElementById('id_student').value = document.getElementById("user").value; // Make the student field in the hidden form myself.
document.getElementById("SubmitScoreButton").disabled = true; // Make the save my score button unclickable since the user just started the game.

function getPosition(event){
    if(event != undefined) {
        var x = event.x + 30; //please ignore the constants on x and y - I just had to use them since I had already created my buttons.
        var y = event.y - 177;
        var isComplete = false;

        for (var i = 0; i < xcoord.length; i++) {
            if (x >= xcoord[i] && x <= xcoord[i] + cnst && y >= ycoord[i] && y <= ycoord[i] + cnst) {
                if (pos == i) {
                    canvas.drawImage(imgArray[i], (canvasWidth / 2) - (image.width / 2), (canvasHeight / 2) - (image.height / 2) + 10);
                    pos = pos + 1;
                    if (pos == xcoord.length){
                        isComplete = true;
                    }
                    if (! isComplete){
                        tryAgainBlock.innerHTML = "";
                        problemBlock.innerHTML = "<h1>" + problems[pos] + "</h1>";
                    }
                    break;
                }
                else {
                    tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
                    scorep2 -= 2.5;
                    score = parseInt(scorep2,10);
                    scoreBlock.innerHTML = "<h3>Current Score: " + score + "</h3>"; // Update the score that the user can see
                    formScore.value = score; // Update the score in the hidden form
                    break;
                }
            }
        }

        if (isComplete) {
            problemBlock.innerHTML = "<h1> Great Work! </h1><h3>Don't forget to save your score below!</h3>";
            document.getElementById("SubmitScoreButton").disabled = false; // Make the save my score button visible.
        }
    }
}

