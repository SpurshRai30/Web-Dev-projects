let userScore = 0;
let computerScore =0;


const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const finalUserScore = document.querySelector("#user-score");
const finalComputerScore = document.querySelector("#computer-score");

choices.forEach((value) => {
        value.addEventListener("click",() =>{
        const userChoice = value.getAttribute("id");
        playGame(userChoice);
    });
})

const generateComputerChoice =() => {
    const options =["rock","paper","scissors"];
    const ranIdx = Math.floor(Math.random() * options.length);// math.gloot means round down to nearest whole number
    return options[ranIdx];
};

const drawGame = () => {
    
    message.innerText="Game was Draw"
}



const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        
        message.innerText=`You Win! ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor="green";
        userScore++;
        finalUserScore.innerText=userScore;
    }else{
        
        message.innerText="Computer Win"
        message.style.backgroundColor="red";
        message.innerText=`Computer Win! ${compChoice} beats ${userChoice}`;
        computerScore++;
        finalComputerScore.innerText = computerScore;
    }
}   

const playGame = (userChoice)=>{
    console.log("\nuser choice = ", userChoice);

    const compChoice = generateComputerChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock"){
            userWin = compChoice ==="paper" ? false : true;
        }
        else if (userChoice === "paper"){
            userWin = compChoice ==="scissors" ? false : true;
        }
        else {
           userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
};


