function beepBoop(input) {
  const number = parseInt(input);
  let array = [];
  for (var i = 0; i <= number; i++) {
    array.push(i);
    }
  return array;
};

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    const input = $("#input").val();
    const roboger = beepBoop(input);
    $("#result").html(roboger);
  });
});
