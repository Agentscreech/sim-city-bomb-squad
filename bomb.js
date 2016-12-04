console.log("javascript running");
var wires = ["blue", "green", "yellow", "white", "red"];
var needToCut = wires.length;
var  clock = 30;
var timerStart;
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");
  wires.forEach(drawWire);
  document.getElementById('clock').textContent = clock + ".000";
  timerStart = setInterval(countdown, 5);
});

function drawWire(color) {
    console.log("drawWire running");
    wire = document.createElement("img");
    wire.setAttribute('id', color);
    wire.addEventListener('click', cut);
    if (color == "blue") {
        wire.setAttribute('src', "img/uncut-blue-wire.png");
    } else if (color == "green") {
        wire.setAttribute('src', "img/uncut-green-wire.png");
    } else if (color == "red") {
        wire.setAttribute('src', "img/uncut-red-wire.png");
    } else if (color == "white") {
        wire.setAttribute('src', "img/uncut-white-wire.png");
    } else if (color == "yellow"){
        wire.setAttribute('src', "img/uncut-yellow-wire.png");
    }
    if (Math.round(Math.random()) == 1){
      wire.setAttribute('dontCut', "true");
      needToCut -= 1;
    }
    document.getElementById('wiresDisplay').appendChild(wire);
}
function swapWire(cutWire) {
    console.log("swapWire running");
    toSwap = cutWire.id;
    if (toSwap == "blue") {
        cutWire.setAttribute('src', "img/cut-blue-wire.png");
    } else if (toSwap == "green") {
        cutWire.setAttribute('src', "img/cut-green-wire.png");
    } else if (toSwap == "red") {
        cutWire.setAttribute('src', "img/cut-red-wire.png");
    } else if (toSwap == "white") {
        cutWire.setAttribute('src', "img/cut-white-wire.png");
    } else {
        cutWire.setAttribute('src', "img/cut-yellow-wire.png");
    }
    this.removeEventListener('click', swapWire);
}

function detonate() {
  console.log("Detonating");
    clearInterval(timerStart);
    for (var i = 0; i < wires.length; i++){
      document.getElementById(wires[i]).removeEventListener('click', cut);
    }
    var boom = document.getElementById('toPlay');
    boom.setAttribute('src' ,"sounds/BldgExplode.wav");
    document.getElementById('background').className = "exploded";
    // document.getElementById('background').style.background = "url(img/explosion.jpg) no-repeat center center fixed";
    document.getElementById('unhide').style.visibility = "visible";
}

function countdown() {
    clock -= 0.005;
    if (clock <= 0) {
      detonate();
    } else {
    document.getElementById('clock').textContent = clock.toFixed(3);
  }
}

function cut() {
  swapWire(this);
  // var elec = document.getElementById('toPlay');
  // elec.setAttribute('src' ,"sounds/Electricity.wav");
  blow = this.getAttribute('dontcut');
  if(blow) {
    setTimeout(detonate, 750);
  } else {
    needToCut -= 1;
  }
    if (!needToCut){
      clearInterval(timerStart);
      var yay = document.getElementById('toPlay');
      yay.setAttribute('src' ,"sounds/CrowdYay.wav");
      document.getElementById('unhide').style.visibility = "visible";
    }
}

function reset() {
  window.location.reload();
}
