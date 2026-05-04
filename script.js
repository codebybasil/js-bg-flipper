var colorName = document.getElementById("colorName");
var btn = document.getElementById("btn");

var colors = [
  "SteelBlue",
  "CadetBlue",
  "SlateBlue",
  "DarkSlateBlue",
  "MediumSlateBlue",
  "Teal",
  "DarkCyan",
  "MediumSeaGreen",
  "DarkSeaGreen",
  "SlateGray",
  "LightSlateGray",
  "DimGray",
]


function changeColor() {
  var randomNum = Math.floor(Math.random() * colors.length);
  var picked = colors[randomNum];

  document.body.style.background = picked;
  colorName.innerHTML = picked;
}
