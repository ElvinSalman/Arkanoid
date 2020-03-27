let ball = document.getElementById('top');
let bar = document.getElementById('seki');
let scr = document.getElementsByClassName('score')[0];
let score=0;
let barX = 0;
let ballX = 0;
let ballY = 0;
let dx = 5;
let dy = 5;

let time=40;

setInterval(time-=10,40);



document.onkeydown = Key;


function Key(e) {
    e=e || window.event;
    
    if(e.keyCode == "37"){
        if(barX >0){
        barX-=10;
        }
    }
    
    if(e.keyCode == "39"){
        if(barX <700 ){
        barX+=10;
        }
    }
    barMove();
}


function barMove() {
    bar.style.left = barX+'px';
}




function Start() {
    scr.innerHTML=score;
 
    let interval = setInterval(()=>{
      

        if(ballX < 0 || ballX>750) {
            dx *=-1;
        }
        if(ballY < 0 || ballY>550) {
            dy *=-1;
        }
        if(ballY > 550 && ballX > barX-25 && ballX < barX+100) {
            score +=1;
        }
        if(ballY > 550 && !(ballX >= barX-10 && ballX <= barX+100)) {
            clearInterval(interval);
            alert('you lose');  
            Refresh();
        }

        
        scr.innerHTML=score;

        ball.style.left = ballX+'px';
        ball.style.top = ballY+'px';

        ballX += dx;
        ballY += dy;
      



    },time);
    
}



function Refresh() {
    score=0;
    ballX=0;
    ballY=0;
}