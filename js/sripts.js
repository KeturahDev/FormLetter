$(document).ready(function() {
  $("#nameEntry").submit(function(event) {
    $("userName").text("input#name").val();

    $("#letter").show();

    event.preventDefault();
  });
}); 