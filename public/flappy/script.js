document.addEventListener('DOMContentLoaded', () => {
  const bird = document.querySelector('.bird')
  const gameDisplay = document.querySelector('.game-container')
  const ground = document.querySelector('.ground')

  let birdLeft = 220
  let birdBottom = 100
  let gravity = 2
        
  function startGame() {
    birdBottom -= gravity
    bird.style.bottom = birdBottom +'px'
    bird.style.left = birdLeft + 'px' 
  }

  let timerId = setInterval(startGame, 20)

  function jump() {
    if (birdBottom < 500) birdBottom += 50
    bird.style.bottom = birdBottom + 'px'
    console.log(birdBottom)
  }
  document.addEventListener('click', jump)

  function generatePipes() {
    const pipe = document.createElement('div')
    pipe.classList.add('pipe')
    gameDisplay.appendChild(pipe)
  }

  generatePipe()
})