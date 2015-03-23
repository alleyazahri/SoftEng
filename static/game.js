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
canvas.strokeText(answers[19],185,130); //point 19

var score = 100; //the following function will subtract from the score if a student gets the wrong answer.
function getPosition(event){
    if(event != undefined) {
        var x = event.x+30; //please ignore the constants on x and y - I just had to use them since I had already created my buttons.
        var y = event.y-177;

        //alert(x + ", " + y); //have been using this to make button areas and for troubleshooting
        //alert(answers + "\n" + problems); //also used for problem solving - database stuff!
        if (pos == 0){
            if(x >= 407 && x <= 418 && y >= 31 && y <= 43) { //point 1
                canvas.drawImage(img1, (canvasWidth / 2) - (image.width / 2), (canvasHeight / 2) - (image.height / 2) + 10);
                pos = pos+1;
                tryAgainBlock.innerHTML = "";
                problemBlock.innerHTML = "<h1>" + problems[pos] + "</h1>";
            }
            else if (x >= 404 && x <= 414 && y >= 119 && y <= 129){ //point 2
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 419 && x <= 429 && y >= 203 && y <= 214){ //point 3
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 445 && x <= 455 && y >= 304 && y <= 315){ //point 4
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 494 && x <= 504 && y >= 186 && y <= 196){ //point 5
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 434 && x <= 444 && y >= 339 && y <= 349){ //point 6
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 295 && y <= 305){ //point 7
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 414 && x <= 424 && y >= 304 && y <= 314){ //point 8
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 347 && x <= 357 && y >= 369 && y <= 379){ //point 9
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 252 && y <= 262){ //point 10
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 316 && x <= 326 && y >= 261 && y <= 271){ //point 11
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 289 && x <= 299 && y >= 360 && y <= 370){ //point 12
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 249 && x <= 259 && y >= 329 && y <= 339){ //point 13
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 267 && x <= 277 && y >= 280 && y <= 290){ //point 14
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 288 && x <= 298 && y >= 186 && y <= 196){ //point 15
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 273 && x <= 283 && y >= 108 && y <= 118){ //point 16
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 266 && x <= 276 && y >= 33 && y <= 43){ //point 17
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 301 && x <= 311 && y >= 67 && y <= 77){ //point 18
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 307 && x <= 317 && y >= 123 && y <= 133){ //point 19
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 123 && y <= 133){ //point 20
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else{
                tryAgainBlock.innerHTML = "";
            }
        }
        else if (pos == 1){
            if (x >= 404 && x <= 414 && y >= 119 && y <= 129){ //point 2
                canvas.drawImage(img2, (canvasWidth / 2) - (image.width / 2), (canvasHeight / 2) - (image.height / 2) + 10);
                pos = pos+1;
                tryAgainBlock.innerHTML = "";
                problemBlock.innerHTML = "<h1>" + problems[pos] + "</h1>";
            }
            else if (x >= 419 && x <= 429 && y >= 203 && y <= 214){ //point 3
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 445 && x <= 455 && y >= 304 && y <= 315){ //point 4
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 494 && x <= 504 && y >= 186 && y <= 196){ //point 5
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 434 && x <= 444 && y >= 339 && y <= 349){ //point 6
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 295 && y <= 305){ //point 7
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 414 && x <= 424 && y >= 304 && y <= 314){ //point 8
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 347 && x <= 357 && y >= 369 && y <= 379){ //point 9
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 252 && y <= 262){ //point 10
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 316 && x <= 326 && y >= 261 && y <= 271){ //point 11
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 289 && x <= 299 && y >= 360 && y <= 370){ //point 12
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 249 && x <= 259 && y >= 329 && y <= 339){ //point 13
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 267 && x <= 277 && y >= 280 && y <= 290){ //point 14
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 288 && x <= 298 && y >= 186 && y <= 196){ //point 15
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 273 && x <= 283 && y >= 108 && y <= 118){ //point 16
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 266 && x <= 276 && y >= 33 && y <= 43){ //point 17
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 301 && x <= 311 && y >= 67 && y <= 77){ //point 18
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 307 && x <= 317 && y >= 123 && y <= 133){ //point 19
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 123 && y <= 133){ //point 20
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if(x >= 407 && x <= 418 && y >= 31 && y <= 43) { //point 1
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else{
                tryAgainBlock.innerHTML = "";
            }
        }
        else if (pos == 2){
            if (x >= 419 && x <= 429 && y >= 203 && y <= 214){ //point 3
                canvas.drawImage(img3, (canvasWidth / 2) - (image.width / 2), (canvasHeight / 2) - (image.height / 2) + 10);
                pos = pos+1;
                tryAgainBlock.innerHTML = "";
                problemBlock.innerHTML = "<h1>" + problems[pos] + "</h1>";
            }
            else if (x >= 445 && x <= 455 && y >= 304 && y <= 315){ //point 4
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 494 && x <= 504 && y >= 186 && y <= 196){ //point 5
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 434 && x <= 444 && y >= 339 && y <= 349){ //point 6
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 295 && y <= 305){ //point 7
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 414 && x <= 424 && y >= 304 && y <= 314){ //point 8
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 347 && x <= 357 && y >= 369 && y <= 379){ //point 9
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 252 && y <= 262){ //point 10
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 316 && x <= 326 && y >= 261 && y <= 271){ //point 11
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 289 && x <= 299 && y >= 360 && y <= 370){ //point 12
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 249 && x <= 259 && y >= 329 && y <= 339){ //point 13
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 267 && x <= 277 && y >= 280 && y <= 290){ //point 14
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 288 && x <= 298 && y >= 186 && y <= 196){ //point 15
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 273 && x <= 283 && y >= 108 && y <= 118){ //point 16
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 266 && x <= 276 && y >= 33 && y <= 43){ //point 17
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 301 && x <= 311 && y >= 67 && y <= 77){ //point 18
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 307 && x <= 317 && y >= 123 && y <= 133){ //point 19
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 123 && y <= 133){ //point 20
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if(x >= 407 && x <= 418 && y >= 31 && y <= 43) { //point 1
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 404 && x <= 414 && y >= 119 && y <= 129){ //point 2
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else{
                tryAgainBlock.innerHTML = "";
            }
        }
        else if (pos == 3){
            if (x >= 445 && x <= 455 && y >= 304 && y <= 315){ //point 4
                canvas.drawImage(img4, (canvasWidth / 2) - (image.width / 2), (canvasHeight / 2) - (image.height / 2) + 10);
                pos = pos+1;
                tryAgainBlock.innerHTML = "";
                problemBlock.innerHTML = "<h1>" + problems[pos] + "</h1>";
            }
            else if (x >= 494 && x <= 504 && y >= 186 && y <= 196){ //point 5
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 434 && x <= 444 && y >= 339 && y <= 349){ //point 6
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 295 && y <= 305){ //point 7
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 414 && x <= 424 && y >= 304 && y <= 314){ //point 8
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 347 && x <= 357 && y >= 369 && y <= 379){ //point 9
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 252 && y <= 262){ //point 10
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 316 && x <= 326 && y >= 261 && y <= 271){ //point 11
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 289 && x <= 299 && y >= 360 && y <= 370){ //point 12
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 249 && x <= 259 && y >= 329 && y <= 339){ //point 13
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 267 && x <= 277 && y >= 280 && y <= 290){ //point 14
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 288 && x <= 298 && y >= 186 && y <= 196){ //point 15
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 273 && x <= 283 && y >= 108 && y <= 118){ //point 16
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 266 && x <= 276 && y >= 33 && y <= 43){ //point 17
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 301 && x <= 311 && y >= 67 && y <= 77){ //point 18
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 307 && x <= 317 && y >= 123 && y <= 133){ //point 19
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 123 && y <= 133){ //point 20
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if(x >= 407 && x <= 418 && y >= 31 && y <= 43) { //point 1
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 404 && x <= 414 && y >= 119 && y <= 129){ //point 2
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 419 && x <= 429 && y >= 203 && y <= 214){ //point 3
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else{
                tryAgainBlock.innerHTML = "";
            }
        }
        else if (pos == 4){
            if (x >= 494 && x <= 504 && y >= 186 && y <= 196){ //point 5
                canvas.drawImage(img5, (canvasWidth / 2) - (image.width / 2), (canvasHeight / 2) - (image.height / 2) + 10);
                pos = pos+1;
                tryAgainBlock.innerHTML = "";
                problemBlock.innerHTML = "<h1>" + problems[pos] + "</h1>";
            }
            else if (x >= 434 && x <= 444 && y >= 339 && y <= 349){ //point 6
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 295 && y <= 305){ //point 7
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 414 && x <= 424 && y >= 304 && y <= 314){ //point 8
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 347 && x <= 357 && y >= 369 && y <= 379){ //point 9
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 252 && y <= 262){ //point 10
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 316 && x <= 326 && y >= 261 && y <= 271){ //point 11
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 289 && x <= 299 && y >= 360 && y <= 370){ //point 12
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 249 && x <= 259 && y >= 329 && y <= 339){ //point 13
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 267 && x <= 277 && y >= 280 && y <= 290){ //point 14
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 288 && x <= 298 && y >= 186 && y <= 196){ //point 15
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 273 && x <= 283 && y >= 108 && y <= 118){ //point 16
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 266 && x <= 276 && y >= 33 && y <= 43){ //point 17
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 301 && x <= 311 && y >= 67 && y <= 77){ //point 18
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 307 && x <= 317 && y >= 123 && y <= 133){ //point 19
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 123 && y <= 133){ //point 20
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if(x >= 407 && x <= 418 && y >= 31 && y <= 43) { //point 1
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 404 && x <= 414 && y >= 119 && y <= 129){ //point 2
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 419 && x <= 429 && y >= 203 && y <= 214){ //point 3
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 445 && x <= 455 && y >= 304 && y <= 315){ //point 4
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else{
                tryAgainBlock.innerHTML = "";
            }
        }
        else if (pos == 5){
            if (x >= 434 && x <= 444 && y >= 339 && y <= 349){ //point 6
                canvas.drawImage(img6, (canvasWidth / 2) - (image.width / 2), (canvasHeight / 2) - (image.height / 2) + 10);
                pos = pos+1;
                tryAgainBlock.innerHTML = "";
                problemBlock.innerHTML = "<h1>" + problems[pos] + "</h1>";
            }
            else if (x >= 369 && x <= 379 && y >= 295 && y <= 305){ //point 7
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 414 && x <= 424 && y >= 304 && y <= 314){ //point 8
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 347 && x <= 357 && y >= 369 && y <= 379){ //point 9
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 252 && y <= 262){ //point 10
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 316 && x <= 326 && y >= 261 && y <= 271){ //point 11
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 289 && x <= 299 && y >= 360 && y <= 370){ //point 12
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 249 && x <= 259 && y >= 329 && y <= 339){ //point 13
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 267 && x <= 277 && y >= 280 && y <= 290){ //point 14
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 288 && x <= 298 && y >= 186 && y <= 196){ //point 15
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 273 && x <= 283 && y >= 108 && y <= 118){ //point 16
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 266 && x <= 276 && y >= 33 && y <= 43){ //point 17
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 301 && x <= 311 && y >= 67 && y <= 77){ //point 18
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 307 && x <= 317 && y >= 123 && y <= 133){ //point 19
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 123 && y <= 133){ //point 20
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if(x >= 407 && x <= 418 && y >= 31 && y <= 43) { //point 1
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 404 && x <= 414 && y >= 119 && y <= 129){ //point 2
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 419 && x <= 429 && y >= 203 && y <= 214){ //point 3
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 445 && x <= 455 && y >= 304 && y <= 315){ //point 4
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 494 && x <= 504 && y >= 186 && y <= 196){ //point 5
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else{
                tryAgainBlock.innerHTML = "";
            }
        }
        else if (pos == 6){
            if (x >= 369 && x <= 379 && y >= 295 && y <= 305){ //point 7
                canvas.drawImage(img7, (canvasWidth / 2) - (image.width / 2), (canvasHeight / 2) - (image.height / 2) + 10);
                pos = pos+1;
                tryAgainBlock.innerHTML = "";
                problemBlock.innerHTML = "<h1>" + problems[pos] + "</h1>";
            }
            else if (x >= 414 && x <= 424 && y >= 304 && y <= 314){ //point 8
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 347 && x <= 357 && y >= 369 && y <= 379){ //point 9
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 252 && y <= 262){ //point 10
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 316 && x <= 326 && y >= 261 && y <= 271){ //point 11
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 289 && x <= 299 && y >= 360 && y <= 370){ //point 12
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 249 && x <= 259 && y >= 329 && y <= 339){ //point 13
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 267 && x <= 277 && y >= 280 && y <= 290){ //point 14
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 288 && x <= 298 && y >= 186 && y <= 196){ //point 15
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 273 && x <= 283 && y >= 108 && y <= 118){ //point 16
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 266 && x <= 276 && y >= 33 && y <= 43){ //point 17
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 301 && x <= 311 && y >= 67 && y <= 77){ //point 18
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 307 && x <= 317 && y >= 123 && y <= 133){ //point 19
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 123 && y <= 133){ //point 20
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if(x >= 407 && x <= 418 && y >= 31 && y <= 43) { //point 1
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 404 && x <= 414 && y >= 119 && y <= 129){ //point 2
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 419 && x <= 429 && y >= 203 && y <= 214){ //point 3
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 445 && x <= 455 && y >= 304 && y <= 315){ //point 4
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 494 && x <= 504 && y >= 186 && y <= 196){ //point 5
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 434 && x <= 444 && y >= 339 && y <= 349){ //point 6
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else{
                tryAgainBlock.innerHTML = "";
            }
        }
        else if (pos == 7){
            if (x >= 414 && x <= 424 && y >= 304 && y <= 314){ //point 8
                canvas.drawImage(img8, (canvasWidth / 2) - (image.width / 2), (canvasHeight / 2) - (image.height / 2) + 10);
                pos = pos+1;
                tryAgainBlock.innerHTML = "";
                problemBlock.innerHTML = "<h1>" + problems[pos] + "</h1>";
            }
            else if (x >= 347 && x <= 357 && y >= 369 && y <= 379){ //point 9
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 252 && y <= 262){ //point 10
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 316 && x <= 326 && y >= 261 && y <= 271){ //point 11
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 289 && x <= 299 && y >= 360 && y <= 370){ //point 12
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 249 && x <= 259 && y >= 329 && y <= 339){ //point 13
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 267 && x <= 277 && y >= 280 && y <= 290){ //point 14
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 288 && x <= 298 && y >= 186 && y <= 196){ //point 15
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 273 && x <= 283 && y >= 108 && y <= 118){ //point 16
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 266 && x <= 276 && y >= 33 && y <= 43){ //point 17
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 301 && x <= 311 && y >= 67 && y <= 77){ //point 18
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 307 && x <= 317 && y >= 123 && y <= 133){ //point 19
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 123 && y <= 133){ //point 20
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if(x >= 407 && x <= 418 && y >= 31 && y <= 43) { //point 1
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 404 && x <= 414 && y >= 119 && y <= 129){ //point 2
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 419 && x <= 429 && y >= 203 && y <= 214){ //point 3
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 445 && x <= 455 && y >= 304 && y <= 315){ //point 4
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 494 && x <= 504 && y >= 186 && y <= 196){ //point 5
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 434 && x <= 444 && y >= 339 && y <= 349){ //point 6
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 295 && y <= 305){ //point 7
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else{
                tryAgainBlock.innerHTML = "";
            }
        }
        else if (pos == 8){
            if (x >= 347 && x <= 357 && y >= 369 && y <= 379){ //point 9
                canvas.drawImage(img9, (canvasWidth / 2) - (image.width / 2), (canvasHeight / 2) - (image.height / 2) + 10);
                pos = pos+1;
                tryAgainBlock.innerHTML = "";
                problemBlock.innerHTML = "<h1>" + problems[pos] + "</h1>";
            }
            else if (x >= 369 && x <= 379 && y >= 252 && y <= 262){ //point 10
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 316 && x <= 326 && y >= 261 && y <= 271){ //point 11
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 289 && x <= 299 && y >= 360 && y <= 370){ //point 12
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 249 && x <= 259 && y >= 329 && y <= 339){ //point 13
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 267 && x <= 277 && y >= 280 && y <= 290){ //point 14
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 288 && x <= 298 && y >= 186 && y <= 196){ //point 15
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 273 && x <= 283 && y >= 108 && y <= 118){ //point 16
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 266 && x <= 276 && y >= 33 && y <= 43){ //point 17
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 301 && x <= 311 && y >= 67 && y <= 77){ //point 18
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 307 && x <= 317 && y >= 123 && y <= 133){ //point 19
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 123 && y <= 133){ //point 20
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if(x >= 407 && x <= 418 && y >= 31 && y <= 43) { //point 1
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 404 && x <= 414 && y >= 119 && y <= 129){ //point 2
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 419 && x <= 429 && y >= 203 && y <= 214){ //point 3
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 445 && x <= 455 && y >= 304 && y <= 315){ //point 4
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 494 && x <= 504 && y >= 186 && y <= 196){ //point 5
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 434 && x <= 444 && y >= 339 && y <= 349){ //point 6
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 295 && y <= 305){ //point 7
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 414 && x <= 424 && y >= 304 && y <= 314){ //point 8
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else{
                tryAgainBlock.innerHTML = "";
            }
        }
        else if (pos == 9){
            if (x >= 369 && x <= 379 && y >= 252 && y <= 262){ //point 10
                canvas.drawImage(img10, (canvasWidth / 2) - (image.width / 2), (canvasHeight / 2) - (image.height / 2) + 10);
                pos = pos+1;
                tryAgainBlock.innerHTML = "";
                problemBlock.innerHTML = "<h1>" + problems[pos] + "</h1>";
            }
            else if (x >= 316 && x <= 326 && y >= 261 && y <= 271){ //point 11
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 289 && x <= 299 && y >= 360 && y <= 370){ //point 12
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 249 && x <= 259 && y >= 329 && y <= 339){ //point 13
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 267 && x <= 277 && y >= 280 && y <= 290){ //point 14
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 288 && x <= 298 && y >= 186 && y <= 196){ //point 15
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 273 && x <= 283 && y >= 108 && y <= 118){ //point 16
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 266 && x <= 276 && y >= 33 && y <= 43){ //point 17
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 301 && x <= 311 && y >= 67 && y <= 77){ //point 18
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 307 && x <= 317 && y >= 123 && y <= 133){ //point 19
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 123 && y <= 133){ //point 20
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if(x >= 407 && x <= 418 && y >= 31 && y <= 43) { //point 1
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 404 && x <= 414 && y >= 119 && y <= 129){ //point 2
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 419 && x <= 429 && y >= 203 && y <= 214){ //point 3
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 445 && x <= 455 && y >= 304 && y <= 315){ //point 4
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 494 && x <= 504 && y >= 186 && y <= 196){ //point 5
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 434 && x <= 444 && y >= 339 && y <= 349){ //point 6
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 295 && y <= 305){ //point 7
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 414 && x <= 424 && y >= 304 && y <= 314){ //point 8
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 347 && x <= 357 && y >= 369 && y <= 379){ //point 9
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else{
                tryAgainBlock.innerHTML = "";
            }
        }
        else if (pos == 10){
            if (x >= 316 && x <= 326 && y >= 261 && y <= 271){ //point 11
                canvas.drawImage(img11, (canvasWidth / 2) - (image.width / 2), (canvasHeight / 2) - (image.height / 2) + 10);
                pos = pos+1;
                tryAgainBlock.innerHTML = "";
                problemBlock.innerHTML = "<h1>" + problems[pos] + "</h1>";
            }
            else if (x >= 289 && x <= 299 && y >= 360 && y <= 370){ //point 12
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 249 && x <= 259 && y >= 329 && y <= 339){ //point 13
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 267 && x <= 277 && y >= 280 && y <= 290){ //point 14
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 288 && x <= 298 && y >= 186 && y <= 196){ //point 15
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 273 && x <= 283 && y >= 108 && y <= 118){ //point 16
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 266 && x <= 276 && y >= 33 && y <= 43){ //point 17
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 301 && x <= 311 && y >= 67 && y <= 77){ //point 18
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 307 && x <= 317 && y >= 123 && y <= 133){ //point 19
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 123 && y <= 133){ //point 20
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if(x >= 407 && x <= 418 && y >= 31 && y <= 43) { //point 1
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 404 && x <= 414 && y >= 119 && y <= 129){ //point 2
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 419 && x <= 429 && y >= 203 && y <= 214){ //point 3
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 445 && x <= 455 && y >= 304 && y <= 315){ //point 4
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 494 && x <= 504 && y >= 186 && y <= 196){ //point 5
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 434 && x <= 444 && y >= 339 && y <= 349){ //point 6
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 295 && y <= 305){ //point 7
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 414 && x <= 424 && y >= 304 && y <= 314){ //point 8
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 347 && x <= 357 && y >= 369 && y <= 379){ //point 9
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 252 && y <= 262){ //point 10
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else{
                tryAgainBlock.innerHTML = "";
            }
        }
        else if (pos == 11){
            if (x >= 289 && x <= 299 && y >= 360 && y <= 370){ //point 12
                canvas.drawImage(img12, (canvasWidth / 2) - (image.width / 2), (canvasHeight / 2) - (image.height / 2) + 10);
                pos = pos+1;
                tryAgainBlock.innerHTML = "";
                problemBlock.innerHTML = "<h1>" + problems[pos] + "</h1>";
            }
            else if (x >= 249 && x <= 259 && y >= 329 && y <= 339){ //point 13
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 267 && x <= 277 && y >= 280 && y <= 290){ //point 14
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 288 && x <= 298 && y >= 186 && y <= 196){ //point 15
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 273 && x <= 283 && y >= 108 && y <= 118){ //point 16
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 266 && x <= 276 && y >= 33 && y <= 43){ //point 17
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 301 && x <= 311 && y >= 67 && y <= 77){ //point 18
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 307 && x <= 317 && y >= 123 && y <= 133){ //point 19
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 123 && y <= 133){ //point 20
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if(x >= 407 && x <= 418 && y >= 31 && y <= 43) { //point 1
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 404 && x <= 414 && y >= 119 && y <= 129){ //point 2
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 419 && x <= 429 && y >= 203 && y <= 214){ //point 3
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 445 && x <= 455 && y >= 304 && y <= 315){ //point 4
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 494 && x <= 504 && y >= 186 && y <= 196){ //point 5
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 434 && x <= 444 && y >= 339 && y <= 349){ //point 6
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 295 && y <= 305){ //point 7
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 414 && x <= 424 && y >= 304 && y <= 314){ //point 8
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 347 && x <= 357 && y >= 369 && y <= 379){ //point 9
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 252 && y <= 262){ //point 10
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 316 && x <= 326 && y >= 261 && y <= 271){ //point 11
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else{
                tryAgainBlock.innerHTML = "";
            }
        }
        else if (pos == 12){
            if (x >= 249 && x <= 259 && y >= 329 && y <= 339){ //point 13
                canvas.drawImage(img13, (canvasWidth / 2) - (image.width / 2), (canvasHeight / 2) - (image.height / 2) + 10);
                pos = pos+1;
                tryAgainBlock.innerHTML = "";
                problemBlock.innerHTML = "<h1>" + problems[pos] + "</h1>";
            }
            else if (x >= 267 && x <= 277 && y >= 280 && y <= 290){ //point 14
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 288 && x <= 298 && y >= 186 && y <= 196){ //point 15
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 273 && x <= 283 && y >= 108 && y <= 118){ //point 16
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 266 && x <= 276 && y >= 33 && y <= 43){ //point 17
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 301 && x <= 311 && y >= 67 && y <= 77){ //point 18
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 307 && x <= 317 && y >= 123 && y <= 133){ //point 19
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 123 && y <= 133){ //point 20
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if(x >= 407 && x <= 418 && y >= 31 && y <= 43) { //point 1
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 404 && x <= 414 && y >= 119 && y <= 129){ //point 2
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 419 && x <= 429 && y >= 203 && y <= 214){ //point 3
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 445 && x <= 455 && y >= 304 && y <= 315){ //point 4
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 494 && x <= 504 && y >= 186 && y <= 196){ //point 5
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 434 && x <= 444 && y >= 339 && y <= 349){ //point 6
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 295 && y <= 305){ //point 7
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 414 && x <= 424 && y >= 304 && y <= 314){ //point 8
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 347 && x <= 357 && y >= 369 && y <= 379){ //point 9
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 252 && y <= 262){ //point 10
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 316 && x <= 326 && y >= 261 && y <= 271){ //point 11
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 289 && x <= 299 && y >= 360 && y <= 370){ //point 12
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else{
                tryAgainBlock.innerHTML = "";
            }
        }
        else if (pos == 13){
            if (x >= 267 && x <= 277 && y >= 280 && y <= 290){ //point 14
                canvas.drawImage(img14, (canvasWidth / 2) - (image.width / 2), (canvasHeight / 2) - (image.height / 2) + 10);
                pos = pos+1;
                tryAgainBlock.innerHTML = "";
                problemBlock.innerHTML = "<h1>" + problems[pos] + "</h1>";
            }
            else if (x >= 288 && x <= 298 && y >= 186 && y <= 196){ //point 15
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 273 && x <= 283 && y >= 108 && y <= 118){ //point 16
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 266 && x <= 276 && y >= 33 && y <= 43){ //point 17
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 301 && x <= 311 && y >= 67 && y <= 77){ //point 18
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 307 && x <= 317 && y >= 123 && y <= 133){ //point 19
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 123 && y <= 133){ //point 20
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if(x >= 407 && x <= 418 && y >= 31 && y <= 43) { //point 1
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 404 && x <= 414 && y >= 119 && y <= 129){ //point 2
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 419 && x <= 429 && y >= 203 && y <= 214){ //point 3
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 445 && x <= 455 && y >= 304 && y <= 315){ //point 4
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 494 && x <= 504 && y >= 186 && y <= 196){ //point 5
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 434 && x <= 444 && y >= 339 && y <= 349){ //point 6
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 295 && y <= 305){ //point 7
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 414 && x <= 424 && y >= 304 && y <= 314){ //point 8
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 347 && x <= 357 && y >= 369 && y <= 379){ //point 9
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 252 && y <= 262){ //point 10
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 316 && x <= 326 && y >= 261 && y <= 271){ //point 11
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 289 && x <= 299 && y >= 360 && y <= 370){ //point 12
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 249 && x <= 259 && y >= 329 && y <= 339){ //point 13
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else{
                tryAgainBlock.innerHTML = "";
            }
        }
        else if (pos == 14){
            if (x >= 288 && x <= 298 && y >= 186 && y <= 196){ //point 15
                canvas.drawImage(img15, (canvasWidth / 2) - (image.width / 2), (canvasHeight / 2) - (image.height / 2) + 10);
                pos = pos+1;
                tryAgainBlock.innerHTML = "";
                problemBlock.innerHTML = "<h1>" + problems[pos] + "</h1>";
            }
            else if (x >= 273 && x <= 283 && y >= 108 && y <= 118){ //point 16
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 266 && x <= 276 && y >= 33 && y <= 43){ //point 17
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 301 && x <= 311 && y >= 67 && y <= 77){ //point 18
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 307 && x <= 317 && y >= 123 && y <= 133){ //point 19
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 123 && y <= 133){ //point 20
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if(x >= 407 && x <= 418 && y >= 31 && y <= 43) { //point 1
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 404 && x <= 414 && y >= 119 && y <= 129){ //point 2
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 419 && x <= 429 && y >= 203 && y <= 214){ //point 3
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 445 && x <= 455 && y >= 304 && y <= 315){ //point 4
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 494 && x <= 504 && y >= 186 && y <= 196){ //point 5
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 434 && x <= 444 && y >= 339 && y <= 349){ //point 6
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 295 && y <= 305){ //point 7
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 414 && x <= 424 && y >= 304 && y <= 314){ //point 8
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 347 && x <= 357 && y >= 369 && y <= 379){ //point 9
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 252 && y <= 262){ //point 10
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 316 && x <= 326 && y >= 261 && y <= 271){ //point 11
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 289 && x <= 299 && y >= 360 && y <= 370){ //point 12
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 249 && x <= 259 && y >= 329 && y <= 339){ //point 13
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 267 && x <= 277 && y >= 280 && y <= 290){ //point 14
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else{
                tryAgainBlock.innerHTML = "";
            }
        }
        else if (pos == 15){
            if (x >= 273 && x <= 283 && y >= 108 && y <= 118){ //point 16
                canvas.drawImage(img16, (canvasWidth / 2) - (image.width / 2), (canvasHeight / 2) - (image.height / 2) + 10);
                pos = pos+1;
                tryAgainBlock.innerHTML = "";
                problemBlock.innerHTML = "<h1>" + problems[pos] + "</h1>";
            }
            else if (x >= 266 && x <= 276 && y >= 33 && y <= 43){ //point 17
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 301 && x <= 311 && y >= 67 && y <= 77){ //point 18
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 307 && x <= 317 && y >= 123 && y <= 133){ //point 19
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 123 && y <= 133){ //point 20
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if(x >= 407 && x <= 418 && y >= 31 && y <= 43) { //point 1
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 404 && x <= 414 && y >= 119 && y <= 129){ //point 2
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 419 && x <= 429 && y >= 203 && y <= 214){ //point 3
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 445 && x <= 455 && y >= 304 && y <= 315){ //point 4
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 494 && x <= 504 && y >= 186 && y <= 196){ //point 5
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 434 && x <= 444 && y >= 339 && y <= 349){ //point 6
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 295 && y <= 305){ //point 7
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 414 && x <= 424 && y >= 304 && y <= 314){ //point 8
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 347 && x <= 357 && y >= 369 && y <= 379){ //point 9
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 252 && y <= 262){ //point 10
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 316 && x <= 326 && y >= 261 && y <= 271){ //point 11
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 289 && x <= 299 && y >= 360 && y <= 370){ //point 12
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 249 && x <= 259 && y >= 329 && y <= 339){ //point 13
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 267 && x <= 277 && y >= 280 && y <= 290){ //point 14
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 288 && x <= 298 && y >= 186 && y <= 196){ //point 15
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else{
                tryAgainBlock.innerHTML = "";
            }
        }
        else if (pos == 16){
            if (x >= 266 && x <= 276 && y >= 33 && y <= 43){ //point 17
                canvas.drawImage(img17, (canvasWidth / 2) - (image.width / 2), (canvasHeight / 2) - (image.height / 2) + 10);
                pos = pos+1;
                tryAgainBlock.innerHTML = "";
                problemBlock.innerHTML = "<h1>" + problems[pos] + "</h1>";
            }
            else if (x >= 301 && x <= 311 && y >= 67 && y <= 77){ //point 18
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 307 && x <= 317 && y >= 123 && y <= 133){ //point 19
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 123 && y <= 133){ //point 20
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if(x >= 407 && x <= 418 && y >= 31 && y <= 43) { //point 1
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 404 && x <= 414 && y >= 119 && y <= 129){ //point 2
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 419 && x <= 429 && y >= 203 && y <= 214){ //point 3
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 445 && x <= 455 && y >= 304 && y <= 315){ //point 4
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 494 && x <= 504 && y >= 186 && y <= 196){ //point 5
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 434 && x <= 444 && y >= 339 && y <= 349){ //point 6
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 295 && y <= 305){ //point 7
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 414 && x <= 424 && y >= 304 && y <= 314){ //point 8
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 347 && x <= 357 && y >= 369 && y <= 379){ //point 9
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 252 && y <= 262){ //point 10
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 316 && x <= 326 && y >= 261 && y <= 271){ //point 11
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 289 && x <= 299 && y >= 360 && y <= 370){ //point 12
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 249 && x <= 259 && y >= 329 && y <= 339){ //point 13
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 267 && x <= 277 && y >= 280 && y <= 290){ //point 14
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 288 && x <= 298 && y >= 186 && y <= 196){ //point 15
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 273 && x <= 283 && y >= 108 && y <= 118){ //point 16
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else{
                tryAgainBlock.innerHTML = "";
            }
        }
        else if (pos == 17){
            if (x >= 301 && x <= 311 && y >= 67 && y <= 77){ //point 18
                canvas.drawImage(img18, (canvasWidth / 2) - (image.width / 2), (canvasHeight / 2) - (image.height / 2) + 10);
                pos = pos+1;
                tryAgainBlock.innerHTML = "";
                problemBlock.innerHTML = "<h1>" + problems[pos] + "</h1>";
            }
            else if (x >= 307 && x <= 317 && y >= 123 && y <= 133){ //point 19
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 123 && y <= 133){ //point 20
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if(x >= 407 && x <= 418 && y >= 31 && y <= 43) { //point 1
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 404 && x <= 414 && y >= 119 && y <= 129){ //point 2
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 419 && x <= 429 && y >= 203 && y <= 214){ //point 3
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 445 && x <= 455 && y >= 304 && y <= 315){ //point 4
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 494 && x <= 504 && y >= 186 && y <= 196){ //point 5
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 434 && x <= 444 && y >= 339 && y <= 349){ //point 6
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 295 && y <= 305){ //point 7
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 414 && x <= 424 && y >= 304 && y <= 314){ //point 8
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 347 && x <= 357 && y >= 369 && y <= 379){ //point 9
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 252 && y <= 262){ //point 10
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 316 && x <= 326 && y >= 261 && y <= 271){ //point 11
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 289 && x <= 299 && y >= 360 && y <= 370){ //point 12
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 249 && x <= 259 && y >= 329 && y <= 339){ //point 13
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 267 && x <= 277 && y >= 280 && y <= 290){ //point 14
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 288 && x <= 298 && y >= 186 && y <= 196){ //point 15
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 273 && x <= 283 && y >= 108 && y <= 118){ //point 16
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 266 && x <= 276 && y >= 33 && y <= 43){ //point 17
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else{
                tryAgainBlock.innerHTML = "";
            }
        }
        else if (pos == 18){
            if (x >= 307 && x <= 317 && y >= 123 && y <= 133){ //point 19
                canvas.drawImage(img19, (canvasWidth / 2) - (image.width / 2), (canvasHeight / 2) - (image.height / 2) + 10);
                pos = pos+1;
                tryAgainBlock.innerHTML = "";
                problemBlock.innerHTML = "<h1>" + problems[pos] + "</h1>";
            }
            else if (x >= 369 && x <= 379 && y >= 123 && y <= 133){ //point 20
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if(x >= 407 && x <= 418 && y >= 31 && y <= 43) { //point 1
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 404 && x <= 414 && y >= 119 && y <= 129){ //point 2
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 419 && x <= 429 && y >= 203 && y <= 214){ //point 3
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 445 && x <= 455 && y >= 304 && y <= 315){ //point 4
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 494 && x <= 504 && y >= 186 && y <= 196){ //point 5
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 434 && x <= 444 && y >= 339 && y <= 349){ //point 6
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 295 && y <= 305){ //point 7
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 414 && x <= 424 && y >= 304 && y <= 314){ //point 8
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 347 && x <= 357 && y >= 369 && y <= 379){ //point 9
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 252 && y <= 262){ //point 10
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 316 && x <= 326 && y >= 261 && y <= 271){ //point 11
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 289 && x <= 299 && y >= 360 && y <= 370){ //point 12
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 249 && x <= 259 && y >= 329 && y <= 339){ //point 13
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 267 && x <= 277 && y >= 280 && y <= 290){ //point 14
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 288 && x <= 298 && y >= 186 && y <= 196){ //point 15
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 273 && x <= 283 && y >= 108 && y <= 118){ //point 16
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 266 && x <= 276 && y >= 33 && y <= 43){ //point 17
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 301 && x <= 311 && y >= 67 && y <= 77){ //point 18
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else{
                tryAgainBlock.innerHTML = "";
            }
        }
        else if (pos == 19){
            if (x >= 369 && x <= 379 && y >= 123 && y <= 133){ //point 20
                canvas.drawImage(img20, (canvasWidth / 2) - (image.width / 2), (canvasHeight / 2) - (image.height / 2) + 10);
                pos = pos+1;
                tryAgainBlock.innerHTML = "<h1>Great Work!</h1>";
                problemBlock.innerHTML = "<h1>" + problems[pos] + "</h1>";
            }
            else if(x >= 407 && x <= 418 && y >= 31 && y <= 43) { //point 1
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 404 && x <= 414 && y >= 119 && y <= 129){ //point 2
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 419 && x <= 429 && y >= 203 && y <= 214){ //point 3
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 445 && x <= 455 && y >= 304 && y <= 315){ //point 4
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 494 && x <= 504 && y >= 186 && y <= 196){ //point 5
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 434 && x <= 444 && y >= 339 && y <= 349){ //point 6
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 295 && y <= 305){ //point 7
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 414 && x <= 424 && y >= 304 && y <= 314){ //point 8
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 347 && x <= 357 && y >= 369 && y <= 379){ //point 9
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 369 && x <= 379 && y >= 252 && y <= 262){ //point 10
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 316 && x <= 326 && y >= 261 && y <= 271){ //point 11
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 289 && x <= 299 && y >= 360 && y <= 370){ //point 12
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 249 && x <= 259 && y >= 329 && y <= 339){ //point 13
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 267 && x <= 277 && y >= 280 && y <= 290){ //point 14
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 288 && x <= 298 && y >= 186 && y <= 196){ //point 15
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 273 && x <= 283 && y >= 108 && y <= 118){ //point 16
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 266 && x <= 276 && y >= 33 && y <= 43){ //point 17
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 301 && x <= 311 && y >= 67 && y <= 77){ //point 18
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else if (x >= 307 && x <= 317 && y >= 123 && y <= 133){ //point 19
                tryAgainBlock.innerHTML = "<h2>Try Again</h2>";
            }
            else{
                tryAgainBlock.innerHTML = "";
            }
        }
    }
}

