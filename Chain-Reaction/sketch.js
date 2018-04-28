var grid;
var capacity;
var resolution;
var side=30;

var w=601;
var h=601;
//make this configurable
var rows=(w-1)/side;
var cols=(h-1)/side;
var playerNum=2;
var currentPlayer=1;

var transX=400;
var transY=100;

var colors;

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
function make2DArrayWithCells(rows,columns,val){
	var arr=new Array(rows);
	for(var i=0;i<rows;i++){
		arr[i]=new Array(columns);
		for (var j = 0; j < columns; j++) {
			//arr[i][j]=new Cell(floor(random(1,4)),floor(random(1,playerNum+1)));
			arr[i][j]=new Cell(0,0);
			if(arr[i][j].val>=capacity[i][j])
			arr[i][j].val=capacity[i][j]-1;
		}
	}

	return arr;
}
function setup() {
	createCanvas(w+900, h+400);

	capacity=make2DArray(rows,cols,0);
	for(var i=0;i<rows;i++){
		for (var j = 0; j < cols; j++) {
			capacity[i][j]=countNeighbors(i,j);
		}
	}

	grid=make2DArrayWithCells(rows,cols,0);

	colors=new Array(playerNum+1);
	colors[0]=color(0);
	for(var i=1;i<=playerNum;i++)
		colors[i]=color(floor(random(0,255)),floor(random(0,255)),floor(random(0,255)));
	/*colors={
	0 : color(0),
	1 : color(0,0,255),
	2 : color(200),
	3 : color(0,255,255),
	3 : color(0,255,255),
	3 : color(0,255,255),

}
};*/
}

function draw() {
	background(0);

	translate(transX,transY);
	for(var i=0;i<w-1;i=i+side){
		for (var j = 0; j < h-1; j=j+side) {
			stroke(colors[currentPlayer]);

			var ci=i+side/2;
			var cj=j+side/2;
			var cell=grid[i/side][j/side];
			noFill();
			rect(i,j,side,side);

		//	console.log(cell.val+" "+cell.player);

			fill(getColor("color",cell.player));
			stroke(color(0));
			var offset=floor(random(-1,1));

			if(cell.val==1)
			{
				if(!(capacity[i/side][j/side]==2))
				offset=0;

				ellipse(ci+offset,cj+offset,side/2,side/2);
			}
			if(cell.val==2)
			{
				if(!(capacity[i/side][j/side]==3))
				offset=0;

				ellipse(ci-5+offset,cj-5+offset,side/2,side/2);
				ellipse(ci+5+offset,cj+5+offset,side/2,side/2);
			}
			if(cell.val==3)
			{
				if(!(capacity[i/side][j/side]==4))
				offset=0;

				ellipse(ci+5+offset,cj+5+offset,side/2,side/2);
				ellipse(ci-5+offset,cj+5+offset,side/2,side/2);
				ellipse(ci+offset,cj-5+offset,side/2,side/2);
			}

			fill(0);
			stroke(0);
			if(cell.val!=0){
				//text(cell.val,i+side/3,j+side/2+5);
			}

		}
	}
}

function getColor(val, player){
	//console.log(colors);
	return colors[player];

}
function mousePressed(){

	var x=floor((mouseX-transX)/side);
	var y=floor((mouseY-transY)/side);

	console.log(x+" "+y);
	if(x<=rows-1 && y<=cols-1)
	{
		console.log(grid[x][y]);
		if(grid[x][y].val==0 || (grid[x][y].val>0 && grid[x][y].player==currentPlayer))
		{
			updateGrid(x,y,currentPlayer);
			currentPlayer= currentPlayer+1;
			if(currentPlayer>playerNum)
				currentPlayer=1;
			console.log("Current Player = "+currentPlayer);
		}
	}



}
function countNeighbors(i,j){

	var neighbors=0;

	if(i!=0)
	neighbors++;
	if(j!=0)
	neighbors++;
	if(i!=rows-1)
	neighbors++;
	if(j!=cols-1)
	neighbors++;

	return neighbors;
}

function updateGrid(i,j,p){

	var neighbors=capacity[i][j];
	console.log("Updating:"+i+" "+j+", n="+neighbors);

	var cell=grid[i][j];
	var cellValue=cell.val;

	if(cellValue<neighbors-1){

		grid[i][j].val++;
		grid[i][j].player=p;

		return;
	}
	else if (cellValue == neighbors-1)
	{
		grid[i][j].val=0;
		grid[i][j].player=0;
		if(i!=0)
		updateGrid(i-1,j,p);

		if(j!=0)
		updateGrid(i,j-1,p);

		if(i!=rows-1)
		updateGrid(i+1,j,p);

		if(j!=cols-1)
		updateGrid(i,j+1,p);

		return;
	}
	else{
		return;
	}

}
