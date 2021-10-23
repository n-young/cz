const cursorTag = document.querySelector("div.cursors")
const ball = cursorTag.querySelector("div")

document.addEventListener("mousemove",function(event){
  ball.style.left = event.pageX + "px"
  ball.style.top = event.pageY + "px"
})
