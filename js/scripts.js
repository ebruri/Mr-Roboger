function beepBoop(input, name) {
  const number = parseInt(input);
  let array = [];
  for (var i = 0; i <= number; i++) {
    if (i.toString().includes("3")) {
      const newString = ("\"Won't you be my neighbor,").concat(' ' + name + '?"');
      array.push(newString);
    }else if (i.toString().includes("2")) {
      array.push('"Boop!"');
    }else if (i.toString().includes("1")) {
      array.push('"Beep!"');  
    }else {
      array.push(i)
    }
  }
  const newArray = array.join(", ");  
  return newArray;  
}


$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    const input = $("#input").val();
    const name = $("#name").val();
    const roboger = beepBoop(input, name);
    $(".modal-body").html(roboger);
  });
});
