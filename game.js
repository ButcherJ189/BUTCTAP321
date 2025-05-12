const grid = document.getElementById('grid');
const scoreDisplay = document.getElementById('score');
let squares = [];
let score = 0;
let speed = 1000;
let interval;
let current = null;

for (let i = 0; i < 9; i++) {
  const div = document.createElement('div');
  div.className = 'square';
  div.onclick = () => handleClick(i);
  grid.appendChild(div);
  squares.push(div);
}

function showRandom() {
  squares.forEach(sq => sq.textContent = '');
  const index = Math.floor(Math.random() * 9);
  const isRat = Math.random() < 0.6;
  current = { index, isRat };
  squares[index].textContent = isRat ? '🐀' : '🐁';
}

function handleClick(i) {
  if (current && i === current.index) {
    if (current.isRat) {
      score++;
      scoreDisplay.textContent = `Score: ${score}`;
      if (speed > 300) speed -= 20;
      clearInterval(interval);
      interval = setInterval(showRandom, speed);
    } else {
      alert(`Game Over! Final score: ${score}`);
      location.reload();
    }
  }
}

interval = setInterval(showRandom, speed);
