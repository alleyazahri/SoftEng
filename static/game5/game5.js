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
//var im = new Image();
//im.src = "/static/game5/panda.png";
var image = new Image();
image.src = "/static/game5/pandaInit.png";
var img1 = new Image();
img1.src = "/static/game5/panda1.png";
var img2 = new Image();
img2.src = "/static/game5/panda2.png";
var img3 = new Image();
img3.src = "/static/game5/panda3.png";
var img4 = new Image();
img4.src = "/static/game5/panda4.png";
var img5 = new Image();
img5.src = "/static/game5/panda5.png";
var img6 = new Image();
img6.src = "/static/game5/panda6.png";
var img7 = new Image();
img7.src = "/static/game5/panda7.png";
var img8 = new Image();
img8.src = "/static/game5/panda8.png";
var img9 = new Image();
img9.src = "/static/game5/panda9.png";
var img10 = new Image();
img10.src = "/static/game5/panda10.png";
var img11 = new Image();
img11.src = "/static/game5/panda11.png";
var img12 = new Image();
img12.src = "/static/game5/panda12.png";
var img13 = new Image();
img13.src = "/static/game5/panda13.png";
var img14 = new Image();
img14.src = "/static/game5/panda14.png";
var img15 = new Image();
img15.src = "/static/game5/panda15.png";
var img16 = new Image();
img16.src = "/static/game5/panda16.png";
var img17 = new Image();
img17.src = "/static/game5/panda17.png";
var img18 = new Image();
img18.src = "/static/game5/panda18.png";
var img19 = new Image();
img19.src = "/static/game5/panda19.png";
var img20 = new Image();
img20.src = "/static/game5/panda20.png";
var img21 = new Image();
img21.src = "/static/game5/panda21.png";
var img22 = new Image();
img22.src = "/static/game5/panda22.png";
var img23 = new Image();
img23.src = "/static/game5/panda23.png";
var img24 = new Image();
img24.src = "/static/game5/panda24.png";
var img25 = new Image();
img25.src = "/static/game5/panda25.png";
var img26 = new Image();
img26.src = "/static/game5/panda26.png";
var img27 = new Image();
img27.src = "/static/game5/panda27.png";
var img28 = new Image();
img28.src = "/static/game5/panda28.png";
var img29 = new Image();
img29.src = "/static/game5/panda29.png";
var img30 = new Image();
img30.src = "/static/game5/panda30.png";

var imgArray = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23,img24,img25,img26,img27,img28,img29,img30];

canvas.strokeRect(1,1,canvasWidth,canvasHeight-2); // border for canvas

var tryAgainBlock = document.getElementById("tryAgain"); //variable used to write 'Try Again' into
var problemBlock = document.getElementById("problems"); //variable used to write problems into


window.addEventListener("mousedown", getPosition(event)); //allows the person to 'click' the canvas
$(image).load(function(){ //makes sure the image is loaded before drawing it onto the canvas.

    //canvas.drawImage(im,(canvasWidth/2)-(im.width/2),(canvasHeight/2)-(im.height/2)+10);
    canvas.drawImage(image,(canvasWidth/2)-(image.width/2),(canvasHeight/2)-(image.height/2)+10);
});


var answers = document.getElementById("answers").value;
var problems = document.getElementById("questions").value;
//Parse through answers and problems so we have an array of just answers and an array of problems, not a string of mumbojumbo
answers = answers.slice(1,answers.length-1);
answers = answers.split(", ");
problems = problems.slice(3,problems.length-2);
problems = problems.split("', u'");
//answers = [101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,
// 127,128,129,130]; //Used for troubleshooting/mapping purposes only

problemBlock.innerHTML = "<h1>" + problems[0] + "</h1>";

//Placing answers onto the canvas by the corresponding dot
canvas.strokeText(answers[0],163,36); //point 1
canvas.strokeText(answers[1],102,43); //point 2
canvas.strokeText(answers[2],93,85); //point 3
canvas.strokeText(answers[3],55,138); //point 4
canvas.strokeText(answers[4],41,185); //point 5
canvas.strokeText(answers[5],82,254); //point 6
canvas.strokeText(answers[6],63,282); //point 7
canvas.strokeText(answers[7],53,385); //point 8
canvas.strokeText(answers[8],114,391); //point 9
canvas.strokeText(answers[9],253,373); //point 10
canvas.strokeText(answers[10],315,307); //point 11
canvas.strokeText(answers[11],273,244); //point 12
canvas.strokeText(answers[12],288,145); //point 13
canvas.strokeText(answers[13],232,78); //point 14
canvas.strokeText(answers[14],181,226); //point 15
canvas.strokeText(answers[15],251,131); //point 16
canvas.strokeText(answers[16],85,218); //point 17
canvas.strokeText(answers[17],121,136); //point 18
canvas.strokeText(answers[18],201,200); //point 19
canvas.strokeText(answers[19],86,176); //point 20 Left Eye
canvas.strokeText(answers[20],242,293); //point 21
canvas.strokeText(answers[21],196,320); //point 22
canvas.strokeText(answers[22],114,312); //point 23
canvas.strokeText(answers[23],104,324); //point 24
canvas.strokeText(answers[24],158,367); //point 25
canvas.strokeText(answers[25],73,355); //point 26
canvas.strokeText(answers[26],133,218); //point 27
canvas.strokeText(answers[27],305,105); //point 28
canvas.strokeText(answers[28],168,302); //point 29
canvas.strokeText(answers[29],143,303); //point 30

//These variables hold the coordinates for the buttons
var xcoord = [344,280,273,246,222,270,244,234,295,434,496,443,469,413,362,432,266,302,382,267,423,377,295,275,339,247,
314,486,339,314];
var ycoord = [34,43,87,124,185,243,282,365,369,373,307,244,145,78,226,131,218,115,200,176,293,320,310,324,367,355,
218,105,302,303];
//button 'width' and 'height'
var cnst = 10;

var score = 100; //the following function will subtract from the score if a student gets the wrong answer.
document.getElementById("scoreOfTheStudent").value = score;
document.getElementById('id_score').value = score;
document.getElementById('id_level').value = 5;
document.getElementById('id_student').value = document.getElementById("user").value;
document.getElementById("SubmitScoreButton").disabled = true;

function getPosition(event){
    if(event != undefined) {
        var x = event.x + 30; //please ignore the constants on x and y - I just had to use them since I had already created my buttons.
        var y = event.y - 177;
        var isComplete = false;
        //alert(x + ", " + y); //have been using this to make button areas and for troubleshooting
        //alert(answers + "\n" + problems); //also used for problem solving - database stuff!
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
                    //alert(pos + ", " + isComplete);
                    break;
                }
                else {
                    tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
                    score -= 1;
                    document.getElementById("scoreOfTheStudent").value = score;
                    document.getElementById('id_score').value = score;
                    break;
                }
            }
        }
        //alert(isComplete);
        if (isComplete){
            problemBlock.innerHTML = "<h1> Great Work! </h1>";
            document.getElementById("SubmitScoreButton").disabled = false;
        }
    }
}

