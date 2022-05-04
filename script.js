console.log("hii");
score = 0;
cross = true;
audiof = new Audio('over.mp3');
audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/264161/Antonio-Vivaldi-Summer_01.mp3');
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function(e){
    if(e.keyCode==38){
        dino = document.querySelector('.dino');

        dino.classList.add('animatedino');
        setTimeout(() => {
            dino.classList.remove('animatedino')
        }, 700);
     
    }
    if(e.keyCode==39){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
dino.style.left = dinoX + 112 + "px";
     
}
if(e.keyCode==37){
    dino = document.querySelector('.dino');
    dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
dino.style.left =( dinoX - 112 ) + "px";
 
}
    }
    setInterval(() => {
        dino = document.querySelector('.dino');
        gameover = document.querySelector('.gameOver');
        obstacle = document.querySelector('.obstacle');
dx  = parseInt(window.getComputedStyle(dino).getPropertyValue('left'));
dy  = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));

ox  = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));
oy  = parseInt(window.getComputedStyle(obstacle).getPropertyValue('top'));

offsetX = Math.abs(dx-ox);
offsetY = Math.abs(dy-oy);
console.log(offsetX,offsetY)
if (offsetY< 50 && offsetX< 50) {
    gameover.style.visibility = 'visible';
    obstacle.classList.remove('obstacleAni')
    audio.pause();
    audiof.play();
    setTimeout(() => {
        audiof.pause();
    }, 3000);
}
else if(offsetX<145 && cross){
    score+=1;
    updatescore(score);
    cross = false;
    setTimeout(() => {
        cross = true;
    }, 1000);
    

}

    }, 10);
    function updatescore(score){
        scorecont.innerHTML = "your sccore : " + score;
    }