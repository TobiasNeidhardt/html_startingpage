function get_greeting() {
  var today = new Date();
  var hours = today.getHours();

  if (hours >= 6 && hours <=11){
    document.getElementById("greeting").innerHTML = "Guten Morgen Tobias!";
  }
  else if (hours >11 && hours <18) {
    document.getElementById("greeting").innerHTML = "Guten Mittag Tobias!";
  }
  else{
    document.getElementById("greeting").innerHTML = "Schönen Abend Tobias!";
  }
}
