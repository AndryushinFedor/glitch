function unwrapPlayer() {
  var x = document.getElementById("player");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}