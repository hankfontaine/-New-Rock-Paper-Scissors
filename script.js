let humanScore = 0;
let computerScore = 0;

function computerInput() {
  return Math.random();
}

function computerPlay(inputValue) {
  let result;
  if (inputValue < 0.33) {
    result = "BIG";
  } else if (inputValue > 0.66) {
    result = "AIDAN";
  } else {
    result = "STANFORD";
  }
  return result;
}

const userBig = document.querySelector(".big");
const userAidan = document.querySelector(".aidan");
const userStanford = document.querySelector(".stanford");

userBig.addEventListener("click", (e) => {
  playRound("BIG", computerPlay(computerInput()));
});
userAidan.addEventListener("click", (e) => {
  playRound("AIDAN", computerPlay(computerInput()));
});
userStanford.addEventListener("click", (e) => {
  playRound("STANFORD", computerPlay(computerInput()));
});

let playCount = 0;
document.getElementById("roundNumber").innerHTML = playCount;

function playRound(userPick, computerPick) {
  let result;
  if (userPick == "BIG" && computerPick == "BIG") {
    result = "You both picked Big.  Honey, nobody wins here.";
    playCount++;
  } else if (userPick == "AIDAN" && computerPick == "AIDAN") {
    result =
      "Aidan?  Really?  For both of you?  Well, now I just don't know what to think.";
    playCount++;
  } else if (userPick == "STANFORD" && computerPick == "STANFORD") {
    result = "...Stanford?  Nobody wins here, honey, not even him.  You tied.";
    playCount++;
  } else if (userPick == "BIG" && computerPick == "AIDAN") {
    result = "You lose, Carrie.  Aidan beats Big.";
    computerScore++;
    playCount++;
  } else if (userPick == "BIG" && computerPick == "STANFORD") {
    result = "You win today, honey.  Big could take Stanford in a heartbeat.";
    humanScore++;
    playCount++;
  } else if (userPick == "AIDAN" && computerPick == "BIG") {
    result = "I'm so proud of you, honey.  Aidan beats Big.";
    humanScore++;
    playCount++;
  } else if (userPick == "AIDAN" && computerPick == "STANFORD") {
    result = "You lose, sweetie.  Stanford could definitely cut up Aidan.";
    computerScore++;
    playCount++;
  } else if (userPick == "STANFORD" && computerPick == "BIG") {
    result = "You lost, honey.  But technically Stanford wins style points.";
    computerScore++;
    playCount++;
  } else if (userPick == "STANFORD" && computerPick == "AIDAN") {
    result = "You won today, honey.  Stanford could cut up Aidan if he had to.";
    humanScore++;
    playCount++;
  } else {
    result = "Stop fooling around.";
    return result;
  }
  // console.log(humanScore, computerScore, playCount);
  document.getElementById("resultsUpdate").innerHTML = result;
  document.getElementById("roundNumber").innerHTML = playCount;
  document.getElementById("playerWinTotal").innerHTML =
    "Player wins: " + humanScore;
  document.getElementById("computerWinTotal").innerHTML =
    "Computer wins: " + computerScore;
  endGame();
  // console.log(endGame());
}

function endGame() {
  let outCome;
  console.log({ humanScore, computerScore, playCount });
  if (playCount === 5 && humanScore > computerScore) {
    outCome = "You Win!";
  } else if (playCount === 5 && humanScore < computerScore) {
    outCome = "You lose!";
  } else outCome = " ";

  console.log({ outCome });
  document.getElementById("gameTime").innerHTML = outCome;
}
