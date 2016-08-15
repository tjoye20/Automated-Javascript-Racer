var Player = function(name,domId) {
  this.name = name;
  this.domId   = domId;
  this.position = 0;
}

Player.prototype.move = function(num){
  this.domId.children().removeClass("active");
  this.domId.children().eq(num).addClass("active");
}

var Game = function(player1, player2) {
  this.player1 = player1 //an array
  this.player2 = player2 //an array
}

Game.prototype.autoPlay = function() {
  var num = Math.floor(Math.random() * 2) + 1;
  if (num == 2) {
    var random_num_1 = 2
    var random_num_2 = 1
  }
  else {
    var random_num_1 = 1
    var random_num_2 = 2
  };
  this.movePlayers(random_num_1,random_num_2)
}

Game.prototype.sayOver = function(player){
  clearInterval(this.movePlayers);
  var user_input = confirm("Game over!!! Player 1 wins! Do you want to play again?")
  if (user_input == true) {
    location.reload();
  }
}

Game.prototype.isDone = function(random_num_1,random_num_2,interval){
  if (random_num_1 == 10) {
    this.sayOver(random_num_1);
  }
  else if (random_num_2 == 10) {
    this.sayOver(random_num_2);
  }
}

Game.prototype.movePlayers = function(random_num_1, random_num_2){
  var player1 = this.player1;
  var player2 = this.player2;
  var game    = this;
    setInterval(function(){
      player1.move(random_num_1);
      player2.move(random_num_2);
      random_num_1++;
      random_num_2++;
      game.isDone(random_num_1,random_num_2,this)
    }
    , 1000)
} //moveplayers

$(document).ready(function() {
  var player1 = new Player("Player 1",$("#player1_strip"));
  var player2 = new Player("Player 2",$("#player2_strip"));

  var newGame = new Game(player1, player2);

  $(document).keyup(function (e) {
    newGame.autoPlay();
  });
});
