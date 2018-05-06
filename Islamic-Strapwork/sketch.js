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
	var r=s/2
	var t=radians(45);
	points.push({
		x:-r*cos(t),
		y:-r*sin(t)
	});
	points.push({
		x:0,
		y:-r*sin(t)
	});
	points.push({
		x:0,
		y:-r
	});
	points.push({
		x:-(r/2),
		y:-(r/2)
	});

	color1=color(random(255),random(255),random(255));
	color2=color(random(255),random(255),random(255));
	color3=color1;
	color4=color2;
	color5=color(random(255),random(255),random(255));
	background(0);

}

function draw() {


push();
translate(x,y);
rotate(radians(angle));
if(angle==0)
{
	push();
	noStroke();

	if((x+s+50)<windowWidth && (y+s+50)<windowHeight)
	{
	fill(color5,0.3);
	rect(0,0,s,s);
	}

	fill(0);
	//rotate(radians(45));
	rectMode(CENTER);
	rect(0,0,s/1.5,s/1.5);

	fill(0);
	rotate(radians(45));
	rectMode(CENTER);
	rect(0,0,s/1.5,s/1.5);




	rotate(radians(-45));
	fill(color4);
	rotate(radians(45));
	rectMode(CENTER);
	rect(0,0,s/2,s/2);

	// fill(color3);
	// rotate(radians(45));
	// rectMode(CENTER);
	// rect(0,0,s/3,s/3);

	fill(color3);
	rotate(radians(45));
	rectMode(CENTER);
	rect(0,0,s/3,s/3);


	pop();

	var tempC=color3;
  color3=color4;
  color4=tempC;

}

stroke(color1);
strokeWeight(8);
line(points[0].x,points[0].y,points[1].x,points[1].y);
stroke(color2);
line(points[2].x,points[2].y,points[3].x,points[3].y);
line(points[2].x,points[2].y,-(points[3].x),points[3].y);
stroke(color1);
line(points[1].x,points[1].y,-(points[0].x),points[0].y);

pop();

 angle+=90;
 if(angle==(360))
 {
	 x+=s;
	 if(x>(width))
	 {
		 x=60;
		 y+=s;

		 if(y>(height-60)){
			 noLoop();
			// colorTheOutput();
		 }
	 }
	 angle=0;
	 //noLoop();
 }


}
function getIdx(a,b)
{
	//console.log(a,b);
	return a+(b)*windowWidth;
}
function mousePressed()
{
	console.log(mouseX,mouseY);
}

function colorTheOutput()
{
	loadPixels();
	console.log(pixels);
	stroke(color1);
	strokeWeight(1);
	translate(60+(s/2),60+(s/2));
	push();
	point(0,0);

	fill(100);
	beginShape();
	vertex(0,s/2-8);
	vertex(0,0);
	endShape(CLOSE);
	// for(var i=2;i<(s/2);i++)
	// {
	// 	for(var j=0;j<361;j++)
	// 	{
	// 		//console.log(i,j);
	// 		//loadPixels();
	// 		var a=abs(floor(i*cos(radians(j))));
	// 		var b=abs(floor(i*sin(radians(j))));
	// 		var p=get(a,b);
	// 		if(p[0]==0 && p[1]==0 && p[2]==0)
	// 			set(a,b,color(30,30,43));
	// 	//	console.log(i,j,get(a,b));
	// 	//	console.log(pixels[getIdx(a,b)]);
	// 	//loadPixels();
	// 	//	console.log(getIdx(floor(i*cos(j)),floor(i*sin(j))));
	// 	}
	// 	updatePixels();
	// }
	pop();
	redraw();
}
