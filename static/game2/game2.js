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
image.src = "/static/game2/monkeyInit.png";
var img1 = new Image();
img1.src = "/static/game2/monkey1.png";
var img2 = new Image();
img2.src = "/static/game2/monkey2.png";
var img3 = new Image();
img3.src = "/static/game2/monkey3.png";
var img4 = new Image();
img4.src = "/static/game2/monkey4.png";
var img5 = new Image();
img5.src = "/static/game2/monkey5.png";
var img6 = new Image();
img6.src = "/static/game2/monkey6.png";
var img7 = new Image();
img7.src = "/static/game2/monkey7.png";
var img8 = new Image();
img8.src = "/static/game2/monkey8.png";
var img9 = new Image();
img9.src = "/static/game2/monkey9.png";
var img10 = new Image();
img10.src = "/static/game2/monkey10.png";
var img11 = new Image();
img11.src = "/static/game2/monkey11.png";
var img12 = new Image();
img12.src = "/static/game2/monkey12.png";
var img13 = new Image();
img13.src = "/static/game2/monkey13.png";
var img14 = new Image();
img14.src = "/static/game2/monkey14.png";
var img15 = new Image();
img15.src = "/static/game2/monkey15.png";
var img16 = new Image();
img16.src = "/static/game2/monkey16.png";
var img17 = new Image();
img17.src = "/static/game2/monkey17.png";
var img18 = new Image();
img18.src = "/static/game2/monkey18.png";
var img19 = new Image();
img19.src = "/static/game2/monkey19.png";
var img20 = new Image();
img20.src = "/static/game2/monkey20.png";
var imgArray = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20];

canvas.strokeRect(1,1,canvasWidth,canvasHeight-2); // border for canvas

var tryAgainBlock = document.getElementById("tryAgain"); //variable used to write 'Try Again' into
var problemBlock = document.getElementById("problems"); //variable used to write problems into

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

problemBlock.innerHTML = "<h1>" + problems[0] + "</h1>";

//Placing answers onto the canvas
canvas.strokeText(answers[0],150,130); //point 1
canvas.strokeText(answers[1],265,133); //point 2
canvas.strokeText(answers[2],237,238); //point 3
canvas.strokeText(answers[3],237,88); //point 4
canvas.strokeText(answers[4],352,156); //point 5
canvas.strokeText(answers[5],341,261); //point 6
canvas.strokeText(answers[6],236,270); //point 7
canvas.strokeText(answers[7],190,239); //point 8
canvas.strokeText(answers[8],248,305); //point 9
canvas.strokeText(answers[9],274,339); //point 10
canvas.strokeText(answers[10],236,394); //point 11
canvas.strokeText(answers[11],198,370); //point 12
canvas.strokeText(answers[12],148,373); //point 13
canvas.strokeText(answers[13],49,351); //point 14
canvas.strokeText(answers[14],146,298); //point 15
canvas.strokeText(answers[15],88,255); //point 16
canvas.strokeText(answers[16],75,169); //point 17
canvas.strokeText(answers[17],123,237); //point 18
canvas.strokeText(answers[18],213,131); //point 19
canvas.strokeText(answers[19],303,224); //point 20

//These variables hold the coordinates for the buttons
var xcoord = [294,421,365,364,481,  //1-5
    471,366,317,376,412,            //6-10
    374,334,281,176,299,            //11-15
    240,223,276,354,455];           //16-20
var ycoord = [311,306,401,243,333,  //1-5
    416,427,408,474,518,            //6-10
    548,549,549,514,464,            //11-15
    419,350,402,285,390];             //16-20
//button 'width' and 'height'
var cnst = 10;

var score = 100; //the following function will subtract from the score if a student gets the wrong answer.
function getPosition(event){
    if(event != undefined) {
        var x = event.x; //please ignore the constants on x and y - I just had to use them since I had already created my buttons.
        var y = event.y;
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
                    score -= 2.5;
                    break;
                }
            }
        }
        //alert(isComplete);
        if (isComplete){
            problemBlock.innerHTML = "<h1> Great Work! </h1>";
        }
    }
}

