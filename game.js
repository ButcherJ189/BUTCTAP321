const grid = document.getElementById('grid');
const scoreDisplay = document.getElementById('score');
const squares = [];
let score = 0;
let speed = 1500;
let interval;
let current = null;

// Menu logic
const menu = document.getElementById('menu');
const game = document.getElementById('game');
const playBtn = document.getElementById('playBtn');
const howBtn = document.getElementById('howBtn');
const instructions = document.getElementById('instructions');

playBtn.onclick = () => {
  menu.classList.add('hidden');
  game.classList.remove('hidden');
  startGame();
};

howBtn.onclick = () => {
  instructions.classList.toggle('hidden');
};

// Create 3x3 grid
for (let i = 0; i < 9; i++) {
  const div = document.createElement('div');
  div.className = 'square';
  div.addEventListener('click', () => handleClick(i));
  div.addEventListener('touchstart', () => handleClick(i));
  grid.appendChild(div);
  squares.push(div);
}

function showRandom() {
  squares.forEach(sq => {
    sq.textContent = '';
    sq.classList.remove('clicked');
  });

  const index = Math.floor(Math.random() * 9);
  const isRat = Math.random() < 0.6;
  current = { index, isRat };
  squares[index].textContent = isRat ? '🐀' : '🐁';
}

function handleClick(i) {
  if (!current || i !== current.index) return;

  const square = squares[i];
  if (square.classList.contains('clicked')) return;
  square.classList.add('clicked');

  if (current.isRat) {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;

    if (score >= 5 && speed > 400) {
      speed -= 50;
      clearInterval(interval);
      interval = setInterval(showRandom, speed);
    }
  } else {
    alert(`Game Over! Final score: ${score}`);
    location.reload();
  }
}

function startGame() {
  score = 0;
  speed = 1500;
  scoreDisplay.textContent = 'Score: 0';
  interval = setInterval(showRandom, speed);
}
