document.addEventListener('DOMContentLoaded', () => {
  const bird = document.querySelector('.bird')
  const gameDisplay = document.querySelector('.game-container')
  const ground = document.querySelector('.ground')

  let birdLeft = 220
  let birdBottom = 100
  let gravity = 2
  let isGameOver = false
  let gap = 440
        
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
    const topPipe = document.createElement('div')
    if (!isGameOver) {
      pipe.classList.add('pipe')
      topPipe.classList.add('topPipe')
    }
    gameDisplay.appendChild(pipe)
    gameDisplay.appendChild(topPipe)
    pipe.style.left = pipeLeft + 'px'
    topPipe.style.left = pipeLeft + 'px'
    pipe.style.bottom = pipeBottom +'px'
    topPipe.style.bottom = pipeBottom + gap + 'px'

    function movePipe() {
      pipeLeft -=2
      pipe.style.left = pipeLeft + 'px'
      topPipe.style.left = pipeLeft + 'px'

      if (pipeLeft === -35) {
        // eslint-disable-next-line no-use-before-define
        clearInterval(timerId)
        gameDisplay.removeChild(pipe)
        gameDisplay.removeChild(topPipe)
      }
      if (
        pipeLeft > 200 && pipeLeft < 280 && birdLeft === 220 &&
        (birdBottom < pipeBottom + 151 || birdBottom > pipeBottom + gap -200)
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