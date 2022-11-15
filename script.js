const playa = document.querySelector("#playa");
const comp = document.querySelector("#comp");
const res = document.querySelector("#res");
const buttons = document.querySelectorAll(".buttons");
let hero;
let villain;
let result;

buttons.forEach(button => button.addEventListener("click", () => {

    hero = button.textContent;
    randChoice();
    playa.textContent = `Hero: ${hero}`;
    comp.textContent = `Villain: ${villain}`;
    res.textContent = whoWins();
}));

function randChoice(){

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
      case 1:
        villain = "ROCK";
        break;
      case 2:
        villain = "PAPER";
        break;
      case 3:
        villain = "SCISSORS";
        break;
    }
}
function whoWins(){
    if(hero == villain){
      return "It's a draw! Choose again and let's settle this!";
    }
    else if(villain == "ROCK"){
      return (hero == "PAPER") ? "You Win! Press another button to play again!" : "You Lose! Choose again to get payback!"
    }
    else if(villain == "PAPER"){
      return (hero == "SCISSORS") ? "You Win! Press another button to play again!" : "You Lose! Choose again to get payback!"
    }
    else if(villain == "SCISSORS"){
      return (hero == "ROCK") ? "You Win! Press another button to play again!" : "You Lose! Choose again to get payback!"
    }
}