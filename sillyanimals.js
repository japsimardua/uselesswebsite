var sillyName = [
    "Flute",
    "Goose",
    "Toise",
    "Squir",
    "Liama",
    "Dowl",
    "Pota",
    "Kang",
    "Oster",
    "Fodile",
    "Obbit",
    "Hobe"
  ];
  
  var nameAnimation = [
    "Bounce",
    "Flash",
    "pulse",
    "Rubb",
    "Cash",
    "Bill",
    "Tik",
    "Shane",
    "Sing",
    "Tada",
    "Wobb",
    "Jam"
  ];
  
var list;

function generatename() {
  document.getElementById("name-animation").innerHTML = sillyName[Math.floor(Math.random() * sillyName.length)] + " " + nameAnimation[Math.floor(Math.random() * nameAnimation.length)];;;
 }