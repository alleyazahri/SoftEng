/*
 * coloringGame.js creates a coloring web app 
 * */

function prepareCanvas(){
	var canvasDiv = document.getElementById('canvasDiv');
	canvas = document.createElement('canvas');
	canvas.setAttribute('width', canvasWidth);
	canvas.setAttribute('height', canvasHeight);
	canvas.setAttribute('id', 'canvas');
	canvasDiv.appendChild('canvas');
	if(typeof G_vmlCanvasManager != 'undefined'){
		canvas = G_vmlCanvasManager.initElement(canvas);
	};

	context = canvas.getContext("2d");

	/*
	 * user clicks on the canvas and we record where via the addClick function. 
	 * 
	 */
	$('#canvas').mousedown(function(e){
		var mouseX = e.pageX - this.offsetLeft - 150;
		var mouseY = e.pageX - this.offsetTop;

		paint = true; //set to true so user can draw: see mousemove
		addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
		redraw(); //updates the canvas
	});

	/*
	 * basically allows the user to draw
	 */
	$('#canvas').mousemove(function(e){
		if(paint){
			addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
			redraw();
		}
	});

	/*
	 * user stops drawing
	 */
	$('#canvas').mouseup(function(e){
		paint = false;
		redraw();
	});

	/*
	 * mouse leaves the canvas
	 */
	$('#canvas').mouseleave(function(e){
		paint = false;
	});


};

/*
 * saves the click position
 */
var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;

function addClick(x,y,dragging)
{
	clickX.push(x);
	clickY.push(y);
	clickDrag.push(dragging);
};


function redraw(){
	context.clearRect(0,0,context.canvas.width, context.canvas.height); //clears the canvas
	context.strokeStyle = "#df4b26";
	context.lineJoin = "round";
	context.lineWidth = 5;
	
    /*var mp = getMousePoint(e.pageX, e.pageY);
    ctx.moveTo(mp.x, mp.y);
    ctx.lineTo(mp.x, mp.y);*/

	for(var i=0; i < clickX.length; i++){
		context.beginPath();
		if (clickDrag[i] && i){
			context.moveTo(clickX[i-1], clickY[i-1]);
		}else{
			context.moveTo(clickX[i]-1, clickY[i]);
		}
		context.lineTo(clickX[i],clickY[i]);
		context.closePath();
		context.stroke();
	};
};

function getMousePoint(ex, ey){

    var px = 0, py = 0;
    var el = document.getElementById('paint');
    while (el) {
         px += el.offsetLeft;
         py += el.offsetTop;
         el = el.offsetParent;
     }

    return {x: ex-px ,y: ey-py};
}




























