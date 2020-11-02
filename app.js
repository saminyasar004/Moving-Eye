const container = document.querySelector(".container");
const eyes = document.querySelector(".eyes");
const eye = document.querySelectorAll(".eye");
const eyeBall = document.querySelectorAll(".eyeBall");

container.addEventListener("mousemove", (e) => {
  let xAxis = (e.pageX * 100) / window.innerWidth;
  let yAxis = (e.pageY * 100) / window.innerHeight;
  eyeBall.forEach((eyeBall) => {
    eyeBall.style.left = `${xAxis}%`;
    eyeBall.style.top = `${yAxis}%`;
  });
});
