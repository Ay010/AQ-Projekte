let schere = document.getElementById("schere");
let stein = document.getElementById("stein");
let papier = document.getElementById("papier");

let yourAnswerImg = document.getElementById("your-answer-img");
let botAnswerImg = document.getElementById("bot-answer-img");

let yourAnswer = document.getElementById("your-answer");
let botAnswer = document.getElementById("bot-answer");

let theTxt = document.getElementById("the-txt");
let txtContent = document.getElementById("txt-content");

let start = document.getElementById("start");
let NRB = document.getElementById("new-round-button");

let NRBC = document.getElementById("new-round-button-content");

let newRound = true;
let ready = false;

let answer = "";

let youWinTxt = document.getElementById("you-win");
let botWinTxt = document.getElementById("bot-win");

let yourWins = 0;
let botWins = 0;

let mediaScreenMin = window.matchMedia("(min-width: 850px)");
let mediaScreenMax = window.matchMedia("(max-width: 850px)");

// reset

NRB.addEventListener("click", newRoundFunction);

function newRoundFunction() {
  ready = false;
  newRound = true;
  answer = "";

  stein.style.boxShadow = "0px 0px 0px 0px rgb(17, 0, 255)";
  schere.style.boxShadow = "0px 0px 0px 0px rgb(17, 0, 255)";
  papier.style.boxShadow = "0px 0px 0px 0px rgb(17, 0, 255)";

  txtContent.style.display = "none";

  yourAnswerImg.style.opacity = "0";
  botAnswerImg.style.opacity = "0";

  start.style.display = "flex";

  NRBC.style.display = "none";
}

// GAME

start.addEventListener("click", startGame);

function startGame() {
  if (answer !== "" && newRound === true) {
    ready = true;
    newRound = false;

    NRBC.style.display = "flex";

    start.style.display = "none";

    const playGame = () => {
      const userChoice = getUserChoice(answer);

      const computerChoice = getComputerChoice();
      console.log("Du hast " + userChoice + " gewählt");
      console.log("Der Bot hat " + computerChoice + " gewählt");
      console.log("_");
      console.log(determineWinner(userChoice, computerChoice));
    };

    console.log("Willkommen bei Schere Stein Papier");
    console.log("_");

    const getUserChoice = (userInput) => {
      userInput = userInput.toLowerCase();
      //
      if (userInput === "papier") {
        if (mediaScreenMin.matches) {
          yourAnswerImg.style.opacity = "1";
          yourAnswerImg.style.bottom = "204px";
          yourAnswerImg.style.right = "204px";
          yourAnswerImg.style.transition = "0.5s";
        } else if (mediaScreenMax.matches) {
          yourAnswerImg.style.opacity = "1";
          yourAnswerImg.style.bottom = "166.665px";
          yourAnswerImg.style.right = "166.6666666666667px";
          yourAnswerImg.style.transition = "0.5s";
        }
        return userInput;
        //
      } else if (userInput === "stein") {
        if (mediaScreenMin.matches) {
          yourAnswerImg.style.opacity = "1";
          yourAnswerImg.style.bottom = "204px";
          yourAnswerImg.style.right = "0px";
          yourAnswerImg.style.transition = "0.5s";
        } else if (mediaScreenMax.matches) {
          yourAnswerImg.style.opacity = "1";
          yourAnswerImg.style.bottom = "166.665px";
          yourAnswerImg.style.right = "0";
          yourAnswerImg.style.transition = "0.5s";
        }
        return userInput;
        //
      } else if (userInput === "schere") {
        if (mediaScreenMin.matches) {
          yourAnswerImg.style.opacity = "1";
          yourAnswerImg.style.bottom = "204px";
          yourAnswerImg.style.right = "408px";
          yourAnswerImg.style.transition = "0.5s";
        } else if (mediaScreenMax.matches) {
          yourAnswerImg.style.opacity = "1";
          yourAnswerImg.style.bottom = "166.665px";
          yourAnswerImg.style.right = "333.3333333333333px";
          yourAnswerImg.style.transition = "0.5s";
        }
        return userInput;
        //
      } else if (userInput === "mrx") {
        return userInput;
      } else if (userInput === "mr x") {
        return userInput;
      } else if (userInput === "mr___x___") {
        return userInput;
      } else {
        return "noch nichts";
      }
    };

    function getComputerChoice() {
      const randomNumber = Math.floor(Math.random() * 3);

      switch (randomNumber) {
        case 0:
          if (mediaScreenMin.matches) {
            botAnswerImg.style.opacity = "1";
            botAnswerImg.style.bottom = "204px";
            botAnswerImg.style.right = "0px";
            botAnswerImg.style.transition = "0.5s";
          } else if (mediaScreenMax.matches) {
            botAnswerImg.style.opacity = "1";
            botAnswerImg.style.bottom = "166.665px";
            botAnswerImg.style.right = "0";
            botAnswerImg.style.transition = "0.5s";
          }
          return "stein";
          break;
        case 1:
          if (mediaScreenMin.matches) {
            botAnswerImg.style.opacity = "1";
            botAnswerImg.style.bottom = "204px";
            botAnswerImg.style.right = "204px";
            botAnswerImg.style.transition = "0.5s";
          } else if (mediaScreenMax.matches) {
            botAnswerImg.style.opacity = "1";
            botAnswerImg.style.bottom = "166.665px";
            botAnswerImg.style.right = "166.6666666666667px";
            botAnswerImg.style.transition = "0.5s";
          }
          return "papier";
          break;
        case 2:
          if (mediaScreenMin.matches) {
            botAnswerImg.style.opacity = "1";
            botAnswerImg.style.bottom = "204px";
            botAnswerImg.style.right = "408px";
            botAnswerImg.style.transition = "0.5s";
          } else if (mediaScreenMax.matches) {
            botAnswerImg.style.opacity = "1";
            botAnswerImg.style.bottom = "166.665px";
            botAnswerImg.style.right = "333.3333333333333px";
            botAnswerImg.style.transition = "0.5s";
          }
          return "schere";
          break;
      }
    }

    function determineWinner(userChoice, computerChoice) {
      // Win
      if (userChoice === "papier" && computerChoice === "stein") {
        yourWins++;
        youWinTxt.innerHTML = "Deine Siege " + yourWins;

        txtContent.style.display = "flex";
        theTxt.innerHTML = "Du hast gewonnen";
        // Lose
      } else if (userChoice === "stein" && computerChoice === "papier") {
        botWins++;
        botWinTxt.innerHTML = "Bot Siege " + botWins;

        txtContent.style.display = "flex";
        theTxt.innerHTML = "Bot hat gewonnen";
        // Lose
      } else if (userChoice === "papier" && computerChoice === "schere") {
        botWins++;
        botWinTxt.innerHTML = "Bot Siege " + botWins;

        txtContent.style.display = "flex";
        theTxt.innerHTML = "Bot hat gewonnen";
        // Win
      } else if (userChoice === "schere" && computerChoice === "papier") {
        yourWins++;
        youWinTxt.innerHTML = "Deine Siege " + yourWins;

        txtContent.style.display = "flex";
        theTxt.innerHTML = "Du hast gewonnen";
        // Win
      } else if (userChoice === "stein" && computerChoice === "schere") {
        yourWins++;
        youWinTxt.innerHTML = "Deine Siege " + yourWins;

        txtContent.style.display = "flex";
        theTxt.innerHTML = "Du hast gewonnen";
        // Lose
      } else if (userChoice === "schere" && computerChoice === "stein") {
        botWins++;
        botWinTxt.innerHTML = "Bot Siege " + botWins;

        txtContent.style.display = "flex";
        theTxt.innerHTML = "Bot hat gewonnen";
        // XXX
      } else if (
        userChoice === "mrx" ||
        userChoice === "mr x" ||
        userChoice === "mr___x___"
      ) {
        txtContent.style.display = "flex";
        theTxt.innerHTML = "Du hast zu 100% gewonnen";
      } else if (userChoice === computerChoice) {
        txtContent.style.display = "flex";
        theTxt.innerHTML = "Unentschieden ";
      } else {
        return "Es gibt noch kein Sieger ";
      }
    }

    playGame();
  } else if (newRound === false) {
    alert("Starte eine neue Runde");
  } else if (answer === "") {
    txtContent.style.display = "flex";
    theTxt.innerHTML = "Wähle Schere, Stein oder Papier";
  }

  stein.style.boxShadow = "0px 0px 0px 0px rgb(17, 0, 255)";
  schere.style.boxShadow = "0px 0px 0px 0px rgb(17, 0, 255)";
  papier.style.boxShadow = "0px 0px 0px 0px rgb(17, 0, 255)";

  answer = "";
}

// aktiv

schere.addEventListener("click", selectSchere);
stein.addEventListener("click", selectStein);
papier.addEventListener("click", selectPapier);

function selectSchere() {
  if (ready === false) {
    answer = "schere";
    schere.style.boxShadow = "0px 0px 50px 10px rgb(17, 0, 255)";

    stein.style.boxShadow = "0px 0px 0px 0px rgb(17, 0, 255)";
    papier.style.boxShadow = "0px 0px 0px 0px rgb(17, 0, 255)";
  } else {
    alert("Bitte Starte eine Neue Runde.");
  }
}

function selectStein() {
  if (ready === false) {
    answer = "stein";
    stein.style.boxShadow = "0px 0px 50px 10px rgb(255, 0, 0)";

    schere.style.boxShadow = "0px 0px 0px 0px rgb(17, 0, 255)";
    papier.style.boxShadow = "0px 0px 0px 0px rgb(17, 0, 255)";
  } else {
    alert("Bitte Starte eine Neue Runde.");
  }
}

function selectPapier() {
  if (ready === false) {
    answer = "papier";
    papier.style.boxShadow = "0px 0px 50px 10px rgb(255, 238, 0)";

    stein.style.boxShadow = "0px 0px 0px 0px rgb(17, 0, 255)";
    schere.style.boxShadow = "0px 0px 0px 0px rgb(17, 0, 255)";
  } else {
    alert("Bitte Starte eine Neue Runde.");
  }
}

// Hover Effekt

// Schere

schere.addEventListener("mouseover", () => {
  if (mediaScreenMin.matches) {
    schere.style.marginTop = "-100px";
    schere.style.transition =
      "transform 1s , box-shadow 0.3s , margin-top 0.3s";
  }
  if (mediaScreenMax.matches) {
    schere.style.transform = "rotate(360deg)";
    schere.style.transition =
      "transform 1s , box-shadow 0.3s , margin-top 0.3s";
  }
});

schere.addEventListener("mouseout", () => {
  if (mediaScreenMin.matches) {
    schere.style.marginTop = "";
    schere.style.transition =
      "transform 1s , box-shadow 0.3s , margin-top 0.3s";
  }
  if (mediaScreenMax.matches) {
    schere.style.transform = "rotate(0deg)";
    schere.style.transition =
      "transform 1s , box-shadow 0.3s , margin-top 0.3s";
  }
});

// Stein

stein.addEventListener("mouseover", () => {
  if (mediaScreenMin.matches) {
    stein.style.marginTop = "-100px";
    stein.style.transition = "transform 1s , box-shadow 0.3s , margin-top 0.3s";
  }
  if (mediaScreenMax.matches) {
    stein.style.transform = "rotate(360deg)";
    stein.style.transition = "transform 1s , box-shadow 0.3s , margin-top 0.3s";
  }
});

stein.addEventListener("mouseout", () => {
  if (mediaScreenMin.matches) {
    stein.style.marginTop = "";
    stein.style.transition = "transform 1s , box-shadow 0.3s , margin-top 0.3s";
  }
  if (mediaScreenMax.matches) {
    stein.style.transform = "rotate(0deg)";
    stein.style.transition = "transform 1s , box-shadow 0.3s , margin-top 0.3s";
  }
});

// Papier

papier.addEventListener("mouseover", () => {
  if (mediaScreenMin.matches) {
    papier.style.marginTop = "-100px";
    papier.style.transition =
      "transform 1s , box-shadow 0.3s , margin-top 0.3s";
  }
  if (mediaScreenMax.matches) {
    papier.style.transform = "rotate(360deg)";
    papier.style.transition =
      "transform 1s , box-shadow 0.3s , margin-top 0.3s";
  }
});

papier.addEventListener("mouseout", () => {
  if (mediaScreenMin.matches) {
    papier.style.marginTop = "";
    papier.style.transition =
      "transform 1s , box-shadow 0.3s , margin-top 0.3s";
  }
  if (mediaScreenMax.matches) {
    papier.style.transform = "rotate(0deg)";
    papier.style.transition =
      "transform 1s , box-shadow 0.3s , margin-top 0.3s";
  }
});

// let timer = 5s;

// for(let i = 0; i > timer ; i++){

//     if(mediaScreenMin.matches){
//         newRoundFunction
//       }
//   }

// // Drehen

// // Schere
// schere.addEventListener("mouseover", () => {
//   schere.style.transform = "rotate(360deg)";
// });

// schere.addEventListener("mouseout", () => {
//   schere.style.transform = "rotate(-0deg)";
// });

// // Stein

// stein.addEventListener("mouseover", () => {
//   stein.style.transform = "rotate(360deg)";
// });

// stein.addEventListener("mouseout", () => {
//   stein.style.transform = "rotate(-0deg)";
// });

// // Papier

// papier.addEventListener("mouseover", () => {
//   papier.style.transform = "rotate(360deg)";
// });

// papier.addEventListener("mouseout", () => {
//   papier.style.transform = "rotate(-0deg)";
// });
