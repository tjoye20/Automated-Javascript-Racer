var Player = function(name) {
  this.name = name;
  this.position = 0;
}

var Game = function(player1, player2) {
  this.player1 = player1 //an array
  this.player2 = player2 //an array
}

Game.prototype.autoPlay = function() {
  var id = setInterval(moveplayers, 1000);
  var num = Math.floor(Math.random() * 2) + 1;

  if (num == 2) {
    var random_num_1 = 2
    var random_num_2 = 1
  }
  else {
    var random_num_1 = 1
    var random_num_2 = 2
  };

  function moveplayers() {

    if (random_num_1 == 10) {
      clearInterval(id);
      var user_input = confirm("Game over!!! Player 1 wins! Do you want to play again?")
      if (user_input == true) {
        location.reload();
      }
    }
    else if (random_num_2 == 10) {
      clearInterval(id);
      var user_input = confirm("Game over!!! Player 2 wins! Do you want to play again?")
      if (user_input == true) {
        location.reload();
      }
    }
    else {
      $("#player1_strip").children().removeClass("active");
      $("#player1_strip").children().eq(random_num_1).addClass("active");

      $("#player2_strip").children().removeClass("active");
      $("#player2_strip").children().eq(random_num_2).addClass("active");

      random_num_1++;
      random_num_2++;
    }
  } //moveplayers

}

$(document).ready(function() {
  var player1 = new Player("Player 1");
  var player2 = new Player("Player 2");

  var newGame = new Game(player1, player2);

  $(document).keyup(function (e) {
    newGame.autoPlay();
  });
});
