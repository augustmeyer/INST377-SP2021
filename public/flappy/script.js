document.addEventListener('DOMContentLoaded', () => {
  const bird = document.querySelector('.bird')
  const gameDisplay = document.querySelector('.game-container')
  const ground = document.querySelector('.ground')

  let birdLeft = 220
  let birdBottom = 100
  let gravity = 2
  let isGameOver = false
        
  function startGame() {
    birdBottom -= gravity
    bird.style.bottom = birdBottom +'px'
    bird.style.left = birdLeft + 'px' 
  }

  let gameTimerId = setInterval(startGame, 20)

  function jump() {
    if (birdBottom < 500) birdBottom += 50
    bird.style.bottom = birdBottom + 'px'
    console.log(birdBottom)
  }
  document.addEventListener('click', jump)

  function generatePipes() {
    let pipeLeft = 500
    let randomHeight = Math.random() * 60
    let pipeBottom = randomHeight
    const pipe = document.createElement('div')
    if (!isGameOver) pipe.classList.add('pipe')
    gameDisplay.appendChild(pipe)
    pipe.style.left = pipeLeft + 'px'
    pipe.style.bottom = pipeBottom +'px'

    function movePipe() {
      pipeLeft -=2
      pipe.style.left = pipeLeft + 'px'

      if (pipeLeft === -55) {
        clearInterval()
        gameDisplay.removeChild(pipe)
      }
      if (
        pipeLeft > 200 && pipeLeft < 280 && birdLeft === 220 &&
        birdBottom < pipeBottom + 151
        || birdBottom === 0) {
        // eslint-disable-next-line no-use-before-define
        gameOver()
        clearInterval(timerId)
      }
    }
    let timerId = setInterval(movePipe, 20)
    if (!isGameOver) setTimeout(generatePipes, 3000)
  }

  generatePipes()

  function gameOver() {
    clearInterval(gameTimerId)
    isGameOver = true
    document.removeEventListener('click', jump)
  }
})