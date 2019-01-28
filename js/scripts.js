$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();
    var frontBackInput = parseInt($("select#front-back").val());
    var bigSmallInput = parseInt($("select#big-small").val());
    var appServerInput = parseInt($("select#app-server").val());
    var designInput = parseInt($("select#desgin").val());
    var easyHardInput = parseInt($("select#easy-hard").val());
    var total = frontBackInput +bigSmallInput + appServerInput + designInput + easyHardInput;

    if (total <= 45) {
      $("#result").text("You should do CSS/Design!");
      $("#survey").hide()
      }
      else if (total > 46 && total <= 65) {
      $("#result").text("You should do Java/Android!");
      $("#survey").hide()
      }
      else if (total > 66 && total <= 75) {
      $("#result").text("You should do C#!");
      $("#survey").hide()
      }
      else if (total > 77 && total <= 85) {
      $("#result").text("You should do PHP!");
      $("#survey").hide()
      }
      else {
        $("#result").text("You should do Ruby/Rails!");
        $("#survey").hide()
      }
  });
});
