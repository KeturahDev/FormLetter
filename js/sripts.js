$(document).ready(function() {
  $("#nameEntry").submit(function(event) {
    var inputName = $("input#name").val();
    $("#userName").text(inputName);

    $("#letter").show();

    event.preventDefault();

    console.log("running");
  });

  console.log("running");
}); 

