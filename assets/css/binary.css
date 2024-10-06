// assets/js/binary.js

let binaryInterval; // Interval IDを保持する変数

// Binary Mode Matrix Effect
const canvas = document.createElement('canvas');
canvas.id = 'binary-canvas';
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

// Resize Canvas
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Characters - quantum bits representation
const letters = ['|0⟩', '|1⟩'];
const fontSize = 20;
const columns = Math.floor(canvas.width / fontSize);
const drops = [];

// Initialize drops
for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

// Draw function
function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#040488'; // Text color
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top after it reaches the bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

binaryInterval = setInterval(draw, 33);

// Function to stop the binary effect
function stopBinaryEffect() {
    clearInterval(binaryInterval);
    canvas.remove();
}

// Expose the stop function globally
window.stopBinaryEffect = stopBinaryEffect;
