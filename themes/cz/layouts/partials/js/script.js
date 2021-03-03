function navToggle() {
  console.log("hi");
  var x = document.getElementById("navlinks");
  console.log(x.style.display);
  if (x.style.display === "inline") {
    x.style.display = "none";
  } else {
    x.style.display = "inline";
  }
}
