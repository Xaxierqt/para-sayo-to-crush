// rain.js
const canvas = document.getElementById("rainCanvas");
const ctx = canvas.getContext("2d");

let drops = [];
let hearts = [];
let stars = [];

// Resize the canvas to fill the entire screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Raindrop class
class Drop {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.length = Math.random() * 20 + 10; // Raindrop length
    this.speed = Math.random() * 3 + 2; // Speed of the drop
    this.opacity = Math.random() * 0.5 + 0.2; // Opacity for visual effect
  }

  fall() {
    this.y += this.speed;
    if (this.y > canvas.height) {
      this.y = 0 - this.length; // Reset the drop to the top when it reaches the bottom
    }
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x, this.y + this.length);
    ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`; // White color with some opacity
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}

// Heart class (for floating hearts)
class Heart {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height - canvas.height;
    this.size = Math.random() * 15 + 10;
    this.speed = Math.random() * 2 + 1;
    this.opacity = Math.random() * 0.5 + 0.3;
  }

  float() {
    this.y += this.speed;
    if (this.y > canvas.height) {
      this.y = -this.size; // Reset the heart to the top
    }
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 0, 102, ${this.opacity})`; // Pink color
    ctx.fill();
  }
}

// Star class (for twinkling stars)
class Star {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.twinkleSpeed = Math.random() * 0.1 + 0.05;
    this.opacity = Math.random() * 0.6 + 0.3;
  }

  twinkle() {
    this.opacity += this.twinkleSpeed;
    if (this.opacity > 1 || this.opacity < 0.2) {
      this.twinkleSpeed = -this.twinkleSpeed;
    }
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`; // White with opacity
    ctx.fill();
  }
}

// Create a new raindrop, heart, and star each time
for (let i = 0; i < 500; i++) {
  drops.push(new Drop());
}

for (let i = 0; i < 50; i++) {
  hearts.push(new Heart());
}

for (let i = 0; i < 100; i++) {
  stars.push(new Star());
}

// Animation loop
function animateRain() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
  
  // Draw raindrops
  for (let i = 0; i < drops.length; i++) {
    drops[i].fall(); // Make each drop fall
  }
  
  // Draw hearts
  for (let i = 0; i < hearts.length; i++) {
    hearts[i].float(); // Make hearts float around
  }

  // Draw stars twinkling
  for (let i = 0; i < stars.length; i++) {
    stars[i].twinkle(); // Make the stars twinkle
  }

  requestAnimationFrame(animateRain); // Loop the animation
}

animateRain(); // Start the animation
