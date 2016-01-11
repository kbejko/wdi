// Get the walker image:
var walker = document.getElementById('walker')

// Configure motion params:
var walkingLeft = true
var leftBorder = 0
var rightBorder = window.innerWidth - walker.offsetWidth
var speed = 20
var xPos = rightBorder
// Have the stick figure start at the right border and start walking left
// When he crosses the left border, have him turn around and start walking right (and vice versa)
// Bonus: Make him turn around when you click on him

function walk(){
  if (walkingLeft){
    xPos -= speed
  } else {
    xPos += speed
  }

  walker.style.left = xPos + 'px'

  if (xPos < leftBorder || xPos > rightBorder){
    walker.classList.toggle('flip')
    walkingLeft = !walkingLeft
  }
}

setInterval(walk, 100)

walker.addEventListener('click', function(){
  walker.classList.toggle('flip')
  walkingLeft = !walkingLeft
})

window.addEventListener('resize', function(){
  rightBorder = window.innerWidth - walker.offsetWidth
})
