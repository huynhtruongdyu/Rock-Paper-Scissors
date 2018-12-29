let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("userScore");
const compScore_span = document.getElementById("compScore");
const scoreBoard_div = document.querySelector(".score-board");
const rs_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function converToWord(letter) {
    if (letter === "r")
        return "Rock";
    if (letter === "p")
        return "Paper";
    return "Scissors";
}

function win(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;

    //rs_div.innerHTML = converToWord(userChoice) + " beats " + converToWord(compChoice) + ". You win!";
    rs_div.innerHTML = `${converToWord(userChoice)}(u) beats ${converToWord(compChoice)}(c). You win!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')},200);
}
function lose(userChoice, compChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    rs_div.innerHTML = converToWord(userChoice) + " lose to " + converToWord(compChoice) + ". You lost...";
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(()=> document.getElementById(userChoice).classList.remove('red-glow'),200);
}
function draw(userChoice, compChoice) {
    rs_div.innerHTML = converToWord(userChoice) + " equals " + converToWord(compChoice) + ". Draw!";
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('gray-glow')},200);
}

function game(userChoice) {
    const compChoice = getComputerChoice();
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, compChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })
    paper_div.addEventListener('click', function () {
        game("p");
    })
    scissors_div.addEventListener('click', function () {
        game("s");
    })
}

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const rdNum = Math.floor(Math.random() * 3);
    return choices[rdNum];
}

main();