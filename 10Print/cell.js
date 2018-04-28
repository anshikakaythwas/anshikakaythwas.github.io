function Cell(val, player){
  this.val=val;
  this.player=player;

}

Cell.prototype.update = function (val, player) {
  this.val=val;
  this.player=player;
};
