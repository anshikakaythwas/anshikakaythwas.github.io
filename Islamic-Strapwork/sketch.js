var s=100;
var angle=0;
var points=[];
var color1;
var color2;
var color3;
var color4;
var color5;
var x=60;
var y=60;
var pX=0;
var pY=0;
var pS=0;



function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	// push();
	// translate(width/2,height/2);
	// stroke(0);
	// strokeWeight(1);
	// rectMode(CENTER);
	// noFill();
	// rect(0,0,s,s);
	// ellipse(0,0,s,s);
	// line(0,-s/2,0,s/2);
	// line(-s/2,0,s/2,0);
	// line(-s/2,-s/2,s/2,s/2);
	// line(s/2,-s/2,-s/2,s/2);
	// pop();

	//var a=200;
	color1=color(random(255),random(255),random(255));
	color2=color(random(255),random(255),random(255));

	background(0);

}

function mousePressed()
{


		s=random(100,300);
		color1=color(random(255),random(255),random(255));
		color2=color(random(255),random(255),random(255));

		drawUnit(mouseX,mouseY,s);



}


function draw() {


noLoop();

//
// push();
// translate(x,y);
// rotate(radians(angle));
// if(angle==0)
// {
// 	push();
// 	noStroke();
//
// 	if((x+s+50)<windowWidth && (y+s+50)<windowHeight)
// 	{
// 	fill(color5,0.3);
// 	rect(0,0,s,s);
// 	}
//
// 	fill(0);
// 	//rotate(radians(45));
// 	rectMode(CENTER);
// 	rect(0,0,s/1.5,s/1.5);
//
// 	fill(0);
// 	rotate(radians(45));
// 	rectMode(CENTER);
// 	rect(0,0,s/1.5,s/1.5);
//
//
//
//
// 	rotate(radians(-45));
// 	fill(color4);
// 	rotate(radians(45));
// 	rectMode(CENTER);
// 	rect(0,0,s/2,s/2);
//
// 	// fill(color3);
// 	// rotate(radians(45));
// 	// rectMode(CENTER);
// 	// rect(0,0,s/3,s/3);
//
// 	fill(color3);
// 	rotate(radians(45));
// 	rectMode(CENTER);
// 	rect(0,0,s/3,s/3);
//
//
// 	pop();
//
// 	var tempC=color3;
//   color3=color4;
//   color4=tempC;
//
// }
//
// stroke(color1);
// strokeWeight(8);
// line(points[0].x,points[0].y,points[1].x,points[1].y);
// stroke(color2);
// line(points[2].x,points[2].y,points[3].x,points[3].y);
// line(points[2].x,points[2].y,-(points[3].x),points[3].y);
// stroke(color1);
// line(points[1].x,points[1].y,-(points[0].x),points[0].y);
//
// pop();
//
//  angle+=90;
//  if(angle==(360))
//  {
// 	 x+=s;
// 	 if(x>(width))
// 	 {
// 		 x=60;
// 		 y+=s;
//
// 		 if(y>(height-60)){
// 			 noLoop();
// 			// colorTheOutput();
// 		 }
// 	 }
// 	 angle=0;
// 	 //noLoop();
//  }


}
function drawUnit(x,y,side)
{
	console.log("drawUnit");
	var a=0;
	var r=side/2;
	var t=radians(45);
	var pt=[];
	pt.push({
		x:-r*cos(t),
		y:-r*sin(t)
	});
	pt.push({
		x:0,
		y:-r*sin(t)
	});
	pt.push({
		x:0,
		y:-r
	});
	pt.push({
		x:-(r/2),
		y:-(r/2)
	});
	strokeWeight(8);

	while(a<361)
	{
		push();
		translate(x,y);
		rotate(radians(a));
		stroke(color1);

		line(pt[0].x,pt[0].y,pt[1].x,pt[1].y);
		stroke(color2);
		line(pt[2].x,pt[2].y,pt[3].x,pt[3].y);
		line(pt[2].x,pt[2].y,-(pt[3].x),pt[3].y);
		stroke(color1);
		line(pt[1].x,pt[1].y,-(pt[0].x),pt[0].y);

		pop();

		a+=90;
	}
	redraw();
}
