document.addEventListener("DOMContentLoaded",function (){
    const data=document.querySelector(".guesses");
    const reset=document.querySelector("#reset");
    const description=document.querySelector(".description");
    function computerPlay() {
        const sides={
          1:"Rock",
            2:"Paper",
            3:"Scissors"
        };
        let random_num=Math.floor(Math.random()*3)+1;
        return sides[random_num];
    }
    function playRound(playerSelection, computerSelection) {
        //converting case insensitive strings into uppercase form
        playerSelection=playerSelection.toUpperCase();
        computerSelection=computerSelection.toUpperCase();

        let result; //to store one round result
        if(playerSelection===computerSelection)
        {
            result= "TIE";
        }
        else if(playerSelection==="ROCK")
        {
            if(computerSelection==="SCISSORS")
            {
                result= "YOU WIN!!! "+playerSelection+" SMASHES "+computerSelection;
            }
            else
            {
                result= "YOU LOSE!!! "+computerSelection+" COVERS "+playerSelection;
            }
        }
        else if(playerSelection==="SCISSORS")
        {
            if(computerSelection==="PAPER")
            {
                result= "YOU WIN!!! "+playerSelection+" CUT "+computerSelection;
            }
            else
            {
                result= "YOU LOSE!!! "+computerSelection+" SMASHES "+playerSelection;
            }
        }
        else if(playerSelection==="PAPER")
        {
            if(computerSelection==="ROCK")
            {
                result= "YOU WIN!!! "+playerSelection+" COVERS "+computerSelection;
            }
            else
            {
                result= "YOU LOSE!!! "+computerSelection+" CUT "+playerSelection;
            }
        }
        else
        {
            result="OOPS!!! DOUBLE CHECK YOUR CHOICE SPELLING &#127770";
        }
        return result;
    }
    function game() {
        data.innerHTML="";
        let user_choice;
        let user_score=0;
        let computer_score=0;
        let tie_score=0;
        for(let i=0;i<5;i++){
                user_choice=prompt("YOUR TURN(ROCK, PAPER, SCISSORS): ");
                let round_result= playRound(user_choice,computerPlay());
                if(round_result.includes("WIN"))
                {
                    user_score+=1;
                }
                else if(round_result.includes("LOSE"))
                {
                    computer_score+=1;
                }
                else if(round_result.includes("TIE"))
                {
                    tie_score+=1;
                }
                data.innerHTML+="RESULT: "+ round_result + "<br>";
                data.innerHTML+="YOUR SCORE: "+ user_score + "<br>";
                data.innerHTML+="COMPUTER SCORE: "+ computer_score + "<br>";
                data.innerHTML+="NO. OF TIE: "+ tie_score + "<br><br><br>";
        }
        if(user_score===computer_score)
        {
            description.innerHTML="OOPS!!!! IT'S TIE";
        }
        else if(user_score>computer_score)
        {
            description.innerHTML="CONGRATULATIONS!!!! YOU WIN";
        }
        else
        {
            description.innerHTML="OOH!!!! YOU LOSE";
        }
    }
    document.getElementById("btn").addEventListener('click',game);






    reset.addEventListener('click',function () {
        data.innerHTML="";
    })

});