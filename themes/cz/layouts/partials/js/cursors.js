const cursorTag=document.querySelector("div.cursors")
const balls=cursorTag.querySelectorAll("div")
const ballMessage=cursorTag.querySelector("div span")
const images=document.querySelector("img[data-hover]")

let currentX=0
let currentY=0
let aimX=0
let aimY=0

document.addEventListener("mousemove",function(event){
  ball.style.left=event.pageX + "px"
  ball.style.top=event.pageY + "px"
})

images.forEach(image=>{
  image.addEventListener("mouseover",function (){
    ballMessage.innerHTML="testing123"
  })
})

image.addEventListener("mouseout",function(){
  ballMessage.innerHTML=""
})
