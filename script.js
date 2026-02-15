document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfólio carregado!");
});
// Carrega o som
const clickSound = new Audio("guitar.wav");

// Seleciona todos os botões e links
document.querySelectorAll("button, a").forEach(element => {
  element.addEventListener("click", () => {
    clickSound.currentTime = 0; // reinicia o som
    clickSound.play();          // toca o som
  });
});


document.getElementById("up").addEventListener("click", () => {
  // ação para cima
  console.log("Up");
});

document.getElementById("down").addEventListener("click", () => {
  console.log("Down");
});

document.getElementById("left").addEventListener("click", () => {
  console.log("Left");
});

document.getElementById("right").addEventListener("click", () => {
  console.log("Right");
});

document.getElementById("btnA").addEventListener("click", () => {
  console.log("Botão A");
});

document.getElementById("btnB").addEventListener("click", () => {
  console.log("Botão B");
});
