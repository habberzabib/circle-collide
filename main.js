let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let mouseX = 0;
let mouseY = 0;

let blueCircleRadius = 20;
let orangeCircleRadius = 30;
let orangeCircleX =
  Math.random() * (canvas.width - 2 * orangeCircleRadius) + orangeCircleRadius;
let orangeCircleY =
  Math.random() * (canvas.height - 2 * orangeCircleRadius) + orangeCircleRadius;

function update() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw blue circle at mouse position
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(mouseX, mouseY, blueCircleRadius, 0, 2 * Math.PI);
  ctx.fill();

  // Draw orange circle
  ctx.fillStyle = "orange";
  ctx.beginPath();
  ctx.arc(orangeCircleX, orangeCircleY, orangeCircleRadius, 0, 2 * Math.PI);
  ctx.fill();

  // Check for collision with the orange circle
  let distance = Math.sqrt(
    (mouseX - orangeCircleX) ** 2 + (mouseY - orangeCircleY) ** 2
  );
  if (distance < blueCircleRadius + orangeCircleRadius) {
    // Teleport the orange circle to a new random location
    orangeCircleX =
      Math.random() * (canvas.width - 2 * orangeCircleRadius) +
      orangeCircleRadius;
    orangeCircleY =
      Math.random() * (canvas.height - 2 * orangeCircleRadius) +
      orangeCircleRadius;
  }

  requestAnimationFrame(update);
}

// Update mouse position on mousemove
canvas.addEventListener("mousemove", (event) => {
  mouseX = event.clientX - canvas.getBoundingClientRect().left;
  mouseY = event.clientY - canvas.getBoundingClientRect().top;
});

requestAnimationFrame(update);
