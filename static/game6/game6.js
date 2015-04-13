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
//im.src = "/static/game6/kangaroo.png";
var image = new Image();
image.src = "/static/game6/kangarooInit.png";
var img1 = new Image();
img1.src = "/static/game6/kangaroo1.png";
var img2 = new Image();
img2.src = "/static/game6/kangaroo2.png";
var img3 = new Image();
img3.src = "/static/game6/kangaroo3.png";
var img4 = new Image();
img4.src = "/static/game6/kangaroo4.png";
var img5 = new Image();
img5.src = "/static/game6/kangaroo5.png";
var img6 = new Image();
img6.src = "/static/game6/kangaroo6.png";
var img7 = new Image();
img7.src = "/static/game6/kangaroo7.png";
var img8 = new Image();
img8.src = "/static/game6/kangaroo8.png";
var img9 = new Image();
img9.src = "/static/game6/kangaroo9.png";
var img10 = new Image();
img10.src = "/static/game6/kangaroo10.png";
var img11 = new Image();
img11.src = "/static/game6/kangaroo11.png";
var img12 = new Image();
img12.src = "/static/game6/kangaroo12.png";
var img13 = new Image();
img13.src = "/static/game6/kangaroo13.png";
var img14 = new Image();
img14.src = "/static/game6/kangaroo14.png";
var img15 = new Image();
img15.src = "/static/game6/kangaroo15.png";
var img16 = new Image();
img16.src = "/static/game6/kangaroo16.png";
var img17 = new Image();
img17.src = "/static/game6/kangaroo17.png";
var img18 = new Image();
img18.src = "/static/game6/kangaroo18.png";
var img19 = new Image();
img19.src = "/static/game6/kangaroo19.png";
var img20 = new Image();
img20.src = "/static/game6/kangaroo20.png";
var img21 = new Image();
img21.src = "/static/game6/kangaroo21.png";
var img22 = new Image();
img22.src = "/static/game6/kangaroo22.png";
var img23 = new Image();
img23.src = "/static/game6/kangaroo23.png";
var img24 = new Image();
img24.src = "/static/game6/kangaroo24.png";
var img25 = new Image();
img25.src = "/static/game6/kangaroo25.png";
var img26 = new Image();
img26.src = "/static/game6/kangaroo26.png";
var img27 = new Image();
img27.src = "/static/game6/kangaroo27.png";
var img28 = new Image();
img28.src = "/static/game6/kangaroo28.png";
var img29 = new Image();
img29.src = "/static/game6/kangaroo29.png";
var img30 = new Image();
img30.src = "/static/game6/kangaroo30.png";

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
//answers = [101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,
// 126,127,128,129,130]; // For Testing Purposes

problemBlock.innerHTML = "<h1>" + problems[0] + "</h1>";

//Placing answers onto the canvas by the corresponding dot
canvas.strokeText(answers[0],113,359); //point 1
canvas.strokeText(answers[1],17,394); //point 2
canvas.strokeText(answers[2],123,388); //point 3
canvas.strokeText(answers[3],204,370); //point 4
canvas.strokeText(answers[4],293,390); //point 5
canvas.strokeText(answers[5],362,381); //point 6
canvas.strokeText(answers[6],328,349); //point 7
canvas.strokeText(answers[7],369,310); //point 8
canvas.strokeText(answers[8],370,260); //point 9
canvas.strokeText(answers[9],342,208); //point 10
canvas.strokeText(answers[10],385,179); //point 11
canvas.strokeText(answers[11],365,149); //point 12
canvas.strokeText(answers[12],308,98); //point 13
canvas.strokeText(answers[13],254,19); //point 14
canvas.strokeText(answers[14],276,91); //point 15
canvas.strokeText(answers[15],184,66); //point 16
canvas.strokeText(answers[16],250,121); //point 17
canvas.strokeText(answers[17],233,193); //point 18
canvas.strokeText(answers[18],184,309); //point 19
canvas.strokeText(answers[19],263,273); //point 20
canvas.strokeText(answers[20],259,360); //point 21
canvas.strokeText(answers[21],323,151); //point 22
canvas.strokeText(answers[22],300,151); //point 23
canvas.strokeText(answers[23],281,255); //point 24
canvas.strokeText(answers[24],303,270); //point 25
canvas.strokeText(answers[25],300,290); //point 26
canvas.strokeText(answers[26],323,299); //point 27
canvas.strokeText(answers[27],308,244); //point 28
canvas.strokeText(answers[28],335,280); //point 29
canvas.strokeText(answers[29],388,284); //point 30

//These variables hold the coordinates for the buttons
var xcoord = [294,198,304,385,474,531,489,536,529,513,543,526,489,435,457,365,431,414,365,444,440,499,481,462,484,
481,494,489,516,546];
var ycoord = [359,394,388,370,390,381,349,284,250,182,168,149,98,19,91,66,121,193,309,273,360,151,151,255,270,
290,299,244,280,273];
//button 'width' and 'height'
var cnst = 10;

var score = 100; //the following function will subtract from the score if a student gets the wrong answer.
document.getElementById("scoreOfTheStudent").value = score;
document.getElementById('id_score').value = score;
document.getElementById('id_level').value = 6;
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

