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
//im.src = "/static/game7/penguins.png";
var image = new Image();
image.src = "/static/game7/penguinsInit.png";
var img1 = new Image();
img1.src = "/static/game7/penguins1.png";
var img2 = new Image();
img2.src = "/static/game7/penguins2.png";
var img3 = new Image();
img3.src = "/static/game7/penguins3.png";
var img4 = new Image();
img4.src = "/static/game7/penguins4.png";
var img5 = new Image();
img5.src = "/static/game7/penguins5.png";
var img6 = new Image();
img6.src = "/static/game7/penguins6.png";
var img7 = new Image();
img7.src = "/static/game7/penguins7.png";
var img8 = new Image();
img8.src = "/static/game7/penguins8.png";
var img9 = new Image();
img9.src = "/static/game7/penguins9.png";
var img10 = new Image();
img10.src = "/static/game7/penguins10.png";
var img11 = new Image();
img11.src = "/static/game7/penguins11.png";
var img12 = new Image();
img12.src = "/static/game7/penguins12.png";
var img13 = new Image();
img13.src = "/static/game7/penguins13.png";
var img14 = new Image();
img14.src = "/static/game7/penguins14.png";
var img15 = new Image();
img15.src = "/static/game7/penguins15.png";
var img16 = new Image();
img16.src = "/static/game7/penguins16.png";
var img17 = new Image();
img17.src = "/static/game7/penguins17.png";
var img18 = new Image();
img18.src = "/static/game7/penguins18.png";
var img19 = new Image();
img19.src = "/static/game7/penguins19.png";
var img20 = new Image();
img20.src = "/static/game7/penguins20.png";
var img21 = new Image();
img21.src = "/static/game7/penguins21.png";
var img22 = new Image();
img22.src = "/static/game7/penguins22.png";
var img23 = new Image();
img23.src = "/static/game7/penguins23.png";
var img24 = new Image();
img24.src = "/static/game7/penguins24.png";
var img25 = new Image();
img25.src = "/static/game7/penguins25.png";
var img26 = new Image();
img26.src = "/static/game7/penguins26.png";
var img27 = new Image();
img27.src = "/static/game7/penguins27.png";
var img28 = new Image();
img28.src = "/static/game7/penguins28.png";
var img29 = new Image();
img29.src = "/static/game7/penguins29.png";
var img30 = new Image();
img30.src = "/static/game7/penguins30.png";
var img31 = new Image();
img31.src = "/static/game7/penguins31.png";
var img32 = new Image();
img32.src = "/static/game7/penguins32.png";
var img33 = new Image();
img33.src = "/static/game7/penguins33.png";
var img34 = new Image();
img34.src = "/static/game7/penguins34.png";
var img35 = new Image();
img35.src = "/static/game7/penguins35.png";
var img36 = new Image();
img36.src = "/static/game7/penguins36.png";
var img37 = new Image();
img37.src = "/static/game7/penguins37.png";
var img38 = new Image();
img38.src = "/static/game7/penguins38.png";
var img39 = new Image();
img39.src = "/static/game7/penguins39.png";
var img40 = new Image();
img40.src = "/static/game7/penguins40.png";

var imgArray = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,
    img19,img20,img21,img22,img23,img24,img25,img26,img27,img28,img29,img30,img31,img32,img33,img34,img35,img36,img37,img38,img39,img40];

canvas.strokeRect(1,1,canvasWidth,canvasHeight-2); // border for canvas

var tryAgainBlock = document.getElementById("tryAgain"); //variable used to write 'Try Again' into
var problemBlock = document.getElementById("problems"); //variable used to write problems into
var scoreBlock = document.getElementById("curScore"); //variable used to write the current score into.

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
//answers = [101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,
//126,127,128,129,130,131,132,133,134,135,136,137,138,139,140]; // For Testing Purposes

problemBlock.innerHTML = "<h1>" + problems[0] + "</h1>";

//Placing answers onto the canvas by the corresponding dot
canvas.strokeText(answers[0],68,307); //point 1
canvas.strokeText(answers[1],201,352); //point 2
canvas.strokeText(answers[2],370,240); //point 3
canvas.strokeText(answers[3],348,186); //point 4
canvas.strokeText(answers[4],247,167); //point 5
canvas.strokeText(answers[5],260,194); //point 6
canvas.strokeText(answers[6],307,194); //point 7
canvas.strokeText(answers[7],257,302); //point 8
canvas.strokeText(answers[8],191,255); //point 9
canvas.strokeText(answers[9],261,72); //point 10 Top Penguin Right Fin?
canvas.strokeText(answers[10],129,78); //point 11
canvas.strokeText(answers[11],151,167); //point 12
canvas.strokeText(answers[12],78,110); //point 13
canvas.strokeText(answers[13],29,214); //point 14
canvas.strokeText(answers[14],14,311); //point 15
canvas.strokeText(answers[15],127,404); //point 16
canvas.strokeText(answers[16],200,411); //point 17
canvas.strokeText(answers[17],305,340); //point 18
canvas.strokeText(answers[18],379,361); //point 19
canvas.strokeText(answers[19],342,307); //point 20 Top of small ice block to front right
canvas.strokeText(answers[20],79,238); //point 21
canvas.strokeText(answers[21],68,157); //point 22
canvas.strokeText(answers[22],116,129); //point 23
canvas.strokeText(answers[23],94,161); //point 24
canvas.strokeText(answers[24],117,162); //point 25
canvas.strokeText(answers[25],102,194); //point 26
canvas.strokeText(answers[26],143,219); //point 27
canvas.strokeText(answers[27],113,260); //point 28
canvas.strokeText(answers[28],91,261); //point 29
canvas.strokeText(answers[29],49,270); //point 30 Tail of penguin furthest left
canvas.strokeText(answers[30],190,87); //point 31
canvas.strokeText(answers[31],180,180); //point 32
canvas.strokeText(answers[32],241,197); //point 33
canvas.strokeText(answers[33],210,318); //point 34
canvas.strokeText(answers[34],103,296); //point 35
canvas.strokeText(answers[35],151,265); //point 36
canvas.strokeText(answers[36],230,219); //point 37
canvas.strokeText(answers[37],309,181); //point 38
canvas.strokeText(answers[38],281,274); //point 39
canvas.strokeText(answers[39],318,274); //point 40

//These variables hold the coordinates for the buttons
var xcoord = [249,380,534,509,428,441,488,438,366,437,305,337,259,210,191,304,376,488,560,529,238,249,299,270,293,
276,324,294,272,226,371,359,412,391,281,330,411,468,462,499];
var ycoord = [307,352,240,186,167,194,194,302,255,72,78,166,110,214,311,382,389,338,361,302,228,157,126,161,162,
173,219,260,263,250,87,180,177,318,296,265,219,170,274,274];
//button 'width' and 'height'
var cnst = 10;

var score = 100; //the following function will subtract from the score if a student gets the wrong answer.
var scorep2 = 100.0; //holds the 'double' value of score

scoreBlock.innerHTML = "<h3>Current Score: " + score + "</h3>"; // Initialize the score output. Just sets it to the starting score, 100

//Form Stuff
var formScore = document.getElementById('id_score');
formScore.value = score; // Make the score field in the hidden form score.
document.getElementById('id_level').value = 7;
document.getElementById('id_student').value = document.getElementById("user").value;
document.getElementById("SubmitScoreButton").disabled = true;
document.getElementById("ColorPictureButton").disabled = true;
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
            document.getElementById("ColorPictureButton").disabled = false; // Make the save my score button visible.
        }
    }
}

