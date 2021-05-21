function get_greeting() {
  var today = new Date();
  var hours = today.getHours();

  if (hours >= 6 && hours <=11){
    document.getElementById("greeting").innerHTML = "Guten Morgen Tobias!";
    document.getElementById("icon").src ="images/sunrice.png"
  }
  else if (hours >11 && hours <18) {
    document.getElementById("greeting").innerHTML = "Guten Mittag Tobias!";
    document.getElementById("icon").src ="images/sun.png"
  }
  else{
    document.getElementById("greeting").innerHTML = "Schönen Abend Tobias!";
    document.getElementById("icon").src ="images/moon.png"
  }
}
