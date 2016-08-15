var auto_update_player_position = function() {
  $(document).ready( function() {
    $(document).keyup(function () {

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
    });
  });
};

auto_update_player_position();
