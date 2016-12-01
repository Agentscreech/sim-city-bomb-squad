console.log("javascript running");

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");
});

wires = ["blue", "green", "yellow", "white", "red"];

wires.forEach(drawWire);

function drawWire(color) {
    console.log("drawWire running");
    wire = document.createElement("img");
    wire.setAttribute('id', color);
    wire.addEventListener('click', swapWire);
    if (color == "blue") {
        wire.setAttribute('src', "img/uncut-blue-wire.png");
    } else if (color == "green") {
        wire.setAttribute('src', "img/uncut-green-wire.png");
    } else if (color == "red") {
        wire.setAttribute('src', "img/uncut-red-wire.png");
    } else if (color == "white") {
        wire.setAttribute('src', "img/uncut-white-wire.png");
    } else {
        wire.setAttribute('src', "img/uncut-yellow-wire.png");
    }
    document.getElementById('wiresDisplay').appendChild(wire);
}
function swapWire() {
    console.log("swapWire running");
    toSwap = this.id;
    if (toSwap == "blue") {
        this.setAttribute('src', "img/cut-blue-wire.png");
    } else if (toSwap == "green") {
        this.setAttribute('src', "img/cut-green-wire.png");
    } else if (toSwap == "red") {
        this.setAttribute('src', "img/cut-red-wire.png");
    } else if (toSwap == "white") {
        this.setAttribute('src', "img/cut-white-wire.png");
    } else {
        this.setAttribute('src', "img/cut-yellow-wire.png");
    }
    this.removeEventListener('click', swapWire);
}
