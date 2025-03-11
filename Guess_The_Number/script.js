'use strict';
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🦾 Correct Number!"
// document.querySelector(".number").textContent = 6;
// document.querySelector(".score").textContent = "User number of attempts"
// document.querySelector(".guess").value=6;
let secret_number= Math.trunc(Math.random()*20+1);
//document.querySelector(".number").textContent = secret_number;

let score = 20;
document.querySelector(".highscore").textContent = sessionStorage.getItem("lastHighScore");
document.querySelector(".check").addEventListener("click",function(){
    const value = Number(document.querySelector(".guess").value);
    if(score > 0){
        if(!value){
            document.querySelector(".message").textContent = "❌ Not a Number!"
            score-=1;
            document.querySelector(".score").textContent = score;
        }else if(value === secret_number){
            document.querySelector(".message").textContent = "🦾 Correct Number!";
            document.querySelector(".number").textContent = secret_number;
            document.querySelector(".highscore").textContent = score;
            sessionStorage.setItem("lastHighScore",score);
            document.querySelector(".check").style.display = "none";
            document.querySelector("body").style.backgroundColor = "#60b347";
    
        }else if(value > secret_number){
            document.querySelector(".message").textContent = "⬇ Guess Number is smaller!";
            score-=1;
            document.querySelector(".score").textContent = score;
        }else if(value < secret_number){
            document.querySelector(".message").textContent = "⬆ Guess Number is bigger!";
            score-=1;
            document.querySelector(".score").textContent = score;
        }

    }else{
        document.querySelector(".check").style.display = "none";
        document.querySelector(".message").textContent = "🚫Reach your limits"
    }

    
    
})

document.querySelector(".again").addEventListener("click", function (){
    score=20;
    secret_number= Math.trunc(Math.random()*20+1);
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".check").style.display = "block";
    document.querySelector(".guess").value = '';
})