let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userc = document.querySelector("#user");
const compc = document.querySelector("#comp");
const getcomputerchoice = () => {
  let options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
const drawgame = () => {
  msg.innerText = "Game was draw.Play again.";
  msg.style.backgroundColor = "#081b31";
};
const showwinner = (userwin, userchoice, compchoice) => {
  if (userwin) {
    userscore++;
    userc.innerText = userscore;
    msg.innerText = "You win";
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    compc.innerText = compscore;
    msg.innerText = "You lose";
    msg.style.backgroundColor = "red";
  }
};
const playGame = (userchoice) => {
  const compchoice = getcomputerchoice();
  if (userchoice === compchoice) {
    drawgame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = compchoice === "scissors" ? false : true;
    } else {
      userwin = compchoice === "rock" ? false : true;
    }
    showwinner(userwin, userchoice, compchoice);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playGame(userchoice);
  });
});
