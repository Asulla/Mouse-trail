const ball = document.querySelectorAll('div.trail')
let aimX = 0 
let aimY = 0 

ball.forEach((ball, index)=> {
    let currentX = 0
    let currentY = 0
    let speed = 0.19 - index * 0.018 
    
    const animate = function () {
        currentX += (aimX - currentX) * speed
        currentY += (aimY - currentY) * speed
        ball.style.left = currentX + 'px'
        ball.style.top = currentY + 'px'
        requestAnimationFrame(animate)
        
    }
    animate()
})

document.addEventListener('mousemove', function (event) {
    aimX = event.pageX
    aimY = event.pageY
})
