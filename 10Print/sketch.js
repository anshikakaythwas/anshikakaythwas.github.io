
let spacing=200;
let x=0;
let y=0;
let grid;
var w;
var h;
var rows;
var cols;
var step;
var c;
var r;
var g;
var b;


function make2DArray(rows,columns,val){
	var arr=new Array(rows);
	for(var i=0;i<rows;i++){
		arr[i]=new Array(columns);
		for (var j = 0; j < columns; j++) {
			arr[i][j]=0;
		}
	}

	return arr;
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	w=windowWidth;
	h=windowHeight;
	rows=floor((w)/spacing);
	cols=floor((h)/spacing);
	grid=make2DArray(rows,cols,0);
	step=spacing/2;
	c=floor(map(random(4),0,4,0,255));

	 r=floor((200-c)%255);
	 g=floor((c-50)%255);
	 b=floor((c-70)%255);

	 r=floor(random(255));
	 g=floor(random(255));
	 b=floor(random(255));
	background(0);
}

function draw() {
	var val=random(1);

	strokeWeight(3);
	noFill();

	console.log(val);
	// if(val>=0 && val<=0.25)
	// {
	// 	for(var i=0;i<=spacing;i+=step)
	// 	{
	// 		stroke(r,g-i*10,b+i);
	// 		line(x,y+i,x+spacing,y+i);
	// 	}
	// }
	// else if(val>0.25 && val<=0.5)
	// {
	// 	for(var i=0;(spacing*2-i)>0;i+=step)
	// 	{
	// 		stroke(r,g-i*10,b+i);
	// 		arc(x,y,(spacing*2)-(i),(spacing*2)-(i),0,HALF_PI)
	// 		//line(x,y+i,x+spacing,y+i);
	// 	}
	// }
	// else if(val>0.5 && val<=0.75)
	// {
	// 	for(var i=0;(spacing*2-i)>0;i+=step)
	// 	{
	// 		stroke(r,g-i*10,b+i);
	// 		arc(x+spacing,y+spacing,(spacing*2)-(i),(spacing*2)-(i),-PI,-HALF_PI)
	// 		//line(x,y+i,x+spacing,y+i);
	// 	}
	// }
	// else if(val>0.75)
	// {
	// 	for(var i=0;i<=spacing;i+=step)
	// 	{
	// 		stroke(r,g-i*10,b+i);
	// 		line(x+i,y,x+i,y+spacing);
	// 	//	arc(x+spacing,y+spacing,(spacing*2)-(i),(spacing*2)-(i),-PI,-HALF_PI)
	// 		//line(x,y+i,x+spacing,y+i);
	// 	}
	// }


	// if(val>0.5){
	// 	//arcs
	// 	//arc(x,y,spacing,spacing,-HALF_PI,PI)
	//
	// 	//lines
	// 	line(x,y,x+spacing,y+spacing)
	// }
	// else{
	// 	//lines
	// 	line(x,y+spacing,x+spacing,y)
	//
	// 	//arcs
	// 	//arc(x,y,spacing,spacing,0,-HALF_PI);
	//
	//
	// }


	if(val<0.4)
	{
		for(var i=0;(spacing*2-i)>0;i+=step)
		{
			stroke(r,g-i*10,b-i);
			arc(x,y,(spacing*2)-(i),(spacing*2)-(i),0,HALF_PI)
			//line(x,y+i,x+spacing,y+i);
		}
	}
	else
	{
		for(var i=0;(spacing*2-i)>0;i+=step)
		{
			stroke(r,g-i*10,b-i);
			arc(x+spacing,y+spacing,(spacing*2)-(i),(spacing*2)-(i),-PI,-HALF_PI)
			//line(x,y+i,x+spacing,y+i);
		}
	}

	x=x+spacing;
	if(x>windowWidth)
	{
		x=0;
		y+=spacing;
	}

	if(y>windowHeight)
	{
		x=0;
		y=0;
		noLoop();
	}

}
