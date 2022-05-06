console.log("hii,problem solved...");

score = 0;
cross = true;
audioj = new Audio("jump.mp3");
audiof = new Audio("over.mp3");
audio = new Audio("game.mp3");
setTimeout(() => {
  audio.play();
}, 1000);
document.onkeydown = function (e) {
  if (e.keyCode == 38) {
    dino.classList.add("animatedino");
    audioj.play();
    dino = document.querySelector(".dino");
    setTimeout(() => {
      dinoX = parseInt(
        window.getComputedStyle(dino, null).getPropertyValue("left")
      );
      dino.style.left = dinoX + 250 + "px";
    }, 300);

    setTimeout(() => {
      dino.classList.remove("animatedino");
    }, 600);
  }
  if (e.keyCode == 39) {
    audioj.play();
    dino = document.querySelector(".dino");
    dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinoX + 112 + "px";
  }
  if (e.keyCode == 37) {
    audioj.play();
    dino = document.querySelector(".dino");
    dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinoX - 112 + "px";
  }
};
setInterval(() => {
  dino = document.querySelector(".dino");
  gameover = document.querySelector(".gameOver");
  obstacle = document.querySelector(".obstacle");
  dx = parseInt(window.getComputedStyle(dino).getPropertyValue("left"));
  dy = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  ox = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
  oy = parseInt(window.getComputedStyle(obstacle).getPropertyValue("top"));

  offsetX = Math.abs(dx - ox);
  offsetY = Math.abs(dy - oy);
  if (offsetY < 50 && offsetX < 50) {
    gameover.style.visibility = "visible";
    obstacle.classList.remove("obstacleAni");
    dino.classList.remove("animatedino");

    cross = false;
    audio.pause();
    audiof.play();
    setTimeout(() => {
      audiof.pause();
    }, 3000);
    document.onkeydown = function(reload){
        if(reload.keyCode==13)
             location.reload();
         
    }
  } else if (cross) {
    score += 1;
    updatescore(score);
  }
}, 10);
function updatescore(score) {
  scorecont.innerHTML = "your sccore : " + score;
}
