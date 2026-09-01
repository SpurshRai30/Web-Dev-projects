let turnO= true ; // playerX playerO

const buttons = document.querySelectorAll(".box");
const reset = document.querySelector("#reset");

buttons.forEach((value) => {
    
    value.addEventListener(('click'),() => {
        console.log("click");
        if (turnO){
        value.innerText = "O";
        turnO =false;
        }else{
            value.innerText ="X";
             turnO =true;
        }
        value.disabled =true;

        checkWinner();
    })
})

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const checkWinner =() =>{
    for(let pattern of winPatterns){
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(
            buttons[pattern[0]].innerText,
            buttons[pattern[1]].innerText,
            buttons[pattern[2]].innerText
        );
        let position1 = buttons[pattern[0]].innerText;
        let position2 = buttons[pattern[1]].innerText;
        let position3 = buttons[pattern[2]].innerText;
    }
}