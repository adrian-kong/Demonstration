function calcSin() {
  var x = parseFloat(document.getElementById('sinx').value);
  if(!isNaN(x)){
    var delX = 0.000001;
    var rate = (Math.sin(x + delX) - Math.sin(x)) / delX;
    document.getElementById('sinout').value = 'Rate of sinx at ' + x + ' is ' + rate;
    console.log(document.getElementById('sinout').value);
  }
}

function calcX() {
  var x = parseFloat(document.getElementById('quadx').value);
  if(!isNaN(x)){
    var delX = 0.000001;
    var rate = (Math.pow(x + delX, 2) - Math.pow(x,2)) / delX;
    document.getElementById('quadout').value = 'Rate of x^2 at ' + x + ' is ' + rate;
    console.log(document.getElementById('quadout').value);
  }
}

var input = document.getElementById("sinx");

input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("sinsubmit").click();
  }
});

var input = document.getElementById("quadx");

input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("quadsubmit").click();
  }
});
