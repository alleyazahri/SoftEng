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
//im.src = "/static/game4/reindeer.png";
var image = new Image();
image.src = "/static/game4/reindeerInit.png";
var img1 = new Image();
img1.src = "/static/game4/reindeer1.png";
var img2 = new Image();
img2.src = "/static/game4/reindeer2.png";
var img3 = new Image();
img3.src = "/static/game4/reindeer3.png";
var img4 = new Image();
img4.src = "/static/game4/reindeer4.png";
var img5 = new Image();
img5.src = "/static/game4/reindeer5.png";
var img6 = new Image();
img6.src = "/static/game4/reindeer6.png";
var img7 = new Image();
img7.src = "/static/game4/reindeer7.png";
var img8 = new Image();
img8.src = "/static/game4/reindeer8.png";
var img9 = new Image();
img9.src = "/static/game4/reindeer9.png";
var img10 = new Image();
img10.src = "/static/game4/reindeer10.png";
var img11 = new Image();
img11.src = "/static/game4/reindeer11.png";
var img12 = new Image();
img12.src = "/static/game4/reindeer12.png";
var img13 = new Image();
img13.src = "/static/game4/reindeer13.png";
var img14 = new Image();
img14.src = "/static/game4/reindeer14.png";
var img15 = new Image();
img15.src = "/static/game4/reindeer15.png";
var img16 = new Image();
img16.src = "/static/game4/reindeer16.png";
var img17 = new Image();
img17.src = "/static/game4/reindeer17.png";
var img18 = new Image();
img18.src = "/static/game4/reindeer18.png";
var img19 = new Image();
img19.src = "/static/game4/reindeer19.png";
var img20 = new Image();
img20.src = "/static/game4/reindeer20.png";
var img21 = new Image();
img21.src = "/static/game4/reindeer21.png";
var img22 = new Image();
img22.src = "/static/game4/reindeer22.png";
var img23 = new Image();
img23.src = "/static/game4/reindeer23.png";
var img24 = new Image();
img24.src = "/static/game4/reindeer24.png";
var img25 = new Image();
img25.src = "/static/game4/reindeer25.png";
var img26 = new Image();
img26.src = "/static/game4/reindeer26.png";
var img27 = new Image();
img27.src = "/static/game4/reindeer27.png";
var img28 = new Image();
img28.src = "/static/game4/reindeer28.png";
var img29 = new Image();
img29.src = "/static/game4/reindeer29.png";
var img30 = new Image();
img30.src = "/static/game4/reindeer30.png";

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

problemBlock.innerHTML = "<h1>" + problems[0] + "</h1>";

//Placing answers onto the canvas by the corresponding dot
canvas.strokeText(answers[0],177,114); //point 1
canvas.strokeText(answers[1],230,72); //point 2
canvas.strokeText(answers[2],260,119); //point 3
canvas.strokeText(answers[3],225,140); //point 4
canvas.strokeText(answers[4],245,178); //point 5
canvas.strokeText(answers[5],218,207); //point 6
canvas.strokeText(answers[6],192,229); //point 7
canvas.strokeText(answers[7],269,217); //point 8
canvas.strokeText(answers[8],302,200); //point 9 Tail Tip
canvas.strokeText(answers[9],312,252); //point 10
canvas.strokeText(answers[10],291,299); //point 11
canvas.strokeText(answers[11],323,400); //point 12
canvas.strokeText(answers[12],290,351); //point 13
canvas.strokeText(answers[13],279,315); //point 14
canvas.strokeText(answers[14],251,389); //point 15
canvas.strokeText(answers[15],234,304); //point 16
canvas.strokeText(answers[16],191,302); //point 17
canvas.strokeText(answers[17],174,389); //point 18
canvas.strokeText(answers[18],135,384); //point 19
canvas.strokeText(answers[19],150,351); //point 20 Where two front feet meet
canvas.strokeText(answers[20],114,304); //point 21
canvas.strokeText(answers[21],129,281); //point 22
canvas.strokeText(answers[22],110,207); //point 23
canvas.strokeText(answers[23],103,188); //point 24
canvas.strokeText(answers[24],60,155); //point 25
canvas.strokeText(answers[25],150,141); //point 26
canvas.strokeText(answers[26],92,115); //point 27
canvas.strokeText(answers[27],73,27); //point 28
canvas.strokeText(answers[28],131,97); //point 29
canvas.strokeText(answers[29],167,134); //point 30

//These variables hold the coordinates for the buttons
var xcoord = [357,415,432,380,432,380,365,444,478,468,473,504,473,437,432,410,373,355,316,335,300,316,302,286,
    245,311,263,253,302,336];
var ycoord = [112,68,94,127,167,185,206,217,201,237,297,397,336,305,387,305,301,387,382,338,296,272,195,168,
    145,119,115,28,94,111];
//button 'width' and 'height'
var cnst = 10;

var score = 100; //the following function will subtract from the score if a student gets the wrong answer.
document.getElementById("scoreOfTheStudent").value = score;
document.getElementById('id_score').value = score;
document.getElementById('id_level').value = 4;
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

