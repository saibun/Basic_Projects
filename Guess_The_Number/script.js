'use strict';
//--- Generate Random Number Logic---
let secret_number = Math.trunc(Math.random()*19+1);
//--- Set Score and High Score
let score = 20;
let lastHighScore = 0;
document.querySelector(".highscore").textContent = lastHighScore;
//---Click Check Button And Start Comparing With Guess Numbers Logic---
document.querySelector(".check").addEventListener("click",function(){
    
    const value = Number(document.querySelector(".guess").value);
    if(score > 0){
        if(!value){
            document.querySelector(".message").textContent = "❌ Not a Number!"
            score-=1;
            document.querySelector(".score").textContent = score;
        }
        else if(value === secret_number){
            document.querySelector(".message").textContent = "🦾 Correct Number!";
            document.querySelector(".number").textContent = secret_number;
            if(score > lastHighScore){
                lastHighScore = score;
                document.querySelector(".highscore").textContent = lastHighScore;

            }
            
            document.querySelector(".check").style.display = "none";
            document.querySelector("body").style.backgroundColor = "#60b347";
    
        }
        // else if(value > secret_number){
        //     document.querySelector(".message").textContent = "⬇ Guess Number is smaller!";
        //     score-=1;
        //     document.querySelector(".score").textContent = score;
        // }else if(value < secret_number){
        //     document.querySelector(".message").textContent = "⬆ Guess Number is bigger!";
        //     score-=1;
        //     document.querySelector(".score").textContent = score;
        // }
        else if (value !== secret_number){
            document.querySelector(".message").textContent = value > secret_number ? " Too High ⬆" : " Too Low ⬇";
            score-=1;
            document.querySelector(".score").textContent = score;
        }

    }else{
        document.querySelector(".check").style.display = "none";
        document.querySelector(".message").textContent = "🚫Reach your limits"
    }

    
    
})

//---Click Again To Strat Again The Game Logic ---
document.querySelector(".again").addEventListener("click", function (){
    score=20;
    secret_number = Math.trunc(Math.random()*19+1);
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".check").style.display = "block";
    document.querySelector(".guess").value = '';
})