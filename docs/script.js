const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 300;

let tankX = 180;
let tankY = 250;
let bombs = [];

const messages = [
  "I love you more than biryani",
  "I'd choose you over momos everytime",
  "COME OVERRR",
  "We'll go buy 16 SHWARMAS for you",
  "I love you SMSMSMSMSMS",
  "My baby",
  "57 FOREHEAD KISSES FOR YOU"
];

function drawTank() {
  ctx.fillStyle = "#00bcd4";
  ctx.fillRect(tankX, tankY, 40, 20); // base
  ctx.fillRect(tankX + 15, tankY - 10, 10, 10); // turret
}

function drawBombs() {
  ctx.fillStyle = "#ff4081";
  bombs.forEach(bomb => {
    ctx.beginPath();
    ctx.arc(bomb.x, bomb.y, 5, 0, Math.PI * 2);
    ctx.fill();
  });
}

function updateBombs() {
  bombs.forEach(bomb => bomb.y -= 3);
  bombs = bombs.filter(bomb => bomb.y > 0);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawTank();
  drawBombs();
  updateBombs();
  requestAnimationFrame(draw);
}

function showMessage() {
  const msgBox = document.getElementById("messageBox");
  const random = messages[Math.floor(Math.random() * messages.length)];
  msgBox.textContent = random;
}

canvas.addEventListener('click', () => {
  bombs.push({ x: tankX + 20, y: tankY - 10 });
  showMessage();
});

draw();
