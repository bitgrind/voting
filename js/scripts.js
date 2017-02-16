$(document).ready(function() {
  $("#age").submit(function(event) {
  var age = parseInt($("#userAge").val());
  if (age >=18) {
    $("#oldEnough").show();
  } else {
    $("#tooYoung").show();
  }
  event.preventDefault();
  });
});
