function beepBoop(input) {
  const number = parseInt(input);
  let array = [];
  for (var i = 0; i <= number; i++) {
    if (i.toString().includes("3")) {
    array.push("\"Won't you be my neighbor?\"")
    }else 
    array.push(i)
    }
  const newArray = array.join(", ");  
  return newArray;  
};

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    const input = $("#input").val();
    const roboger = beepBoop(input);
    $("#result").html(roboger);
  });
});
