$("form").submit(function(event){
  // do not refresh
  event.preventDefault();
  var string1 = $("#box1").val();
 // write another line of code that gets the value from box 2 
  var string2 = $("#box2").val();
  console.log(string1);
  console.log(string2);
  var sign = $("#operations").val();
  console.log(sign);

  var num1 = parseFloat(string1);
  var num2 = parseFloat(string2);

  if (sign == "+"){ //add
   var answer = num1 + num2;
   $("#answer").text(answer);
    }
  
 
  console.log(sign);
  
  if (sign == "-"){ //
   var answer = num1 - num2;
    $("#answer").text(answer);
  }
  if (sign == "x"){ //
   var answer = num1 * num2;
    $("#answer").text(answer);
  }
  if (sign == "/"){
    var answer = num1 / num2;
     $("#answer").text(answer);
  }
  
  });
