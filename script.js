// function computerInput() {
//   return Math.random();
// }

// let computerChoice = computerInput();

// function computerPlay(inputValue) {
//   let result;
//   if (inputValue < 0.33) {
//     result = "BIG";
//   } else if (inputValue > 0.66) {
//     result = "AIDAN";
//   } else {
//     result = "STANFORD";
//   }
//   return result;
// }

// computerPlay(computerChoice);

// let userInput = prompt(
//   "Honey, you have to choose...is it gonna be Big, Aidan, or Stanford?"
// );

// let userInputCapped = userInput.toUpperCase();

// console.log(computerPlay(computerChoice));
// console.log(userInputCapped);

let humanScore = 0;
let computerScore = 0;

function playRound(userPick, computerPick) {
  let result;
  if (userPick == "BIG" && computerPick == "BIG") {
    result = "You both picked Big.  Honey, nobody wins here.";
  } else if (userPick == "AIDAN" && computerPick == "AIDAN") {
    result =
      "Aidan?  Really?  For both of you?  Well, now I just don't know what to think.";
  } else if (userPick == "STANFORD" && computerPick == "STANFORD") {
    result = "...Stanford?  Nobody wins here, honey, not even him.  You tied.";
  } else if (userPick == "BIG" && computerPick == "AIDAN") {
    result = "You lose, Carrie.  Aidan beats Big.";
    computerScore++;
  } else if (userPick == "BIG" && computerPick == "STANFORD") {
    result = "You win today, honey.  Big could take Stanford in a heartbeat.";
    humanScore++;
  } else if (userPick == "AIDAN" && computerPick == "BIG") {
    result = "I'm so proud of you, honey.  Aidan beats Big.";
    humanScore++;
  } else if (userPick == "AIDAN" && computerPick == "STANFORD") {
    result = "You lose, sweetie.  Stanford could definitely cut up Aidan.";
    computerScore++;
  } else if (userPick == "STANFORD" && computerPick == "BIG") {
    result = "You lost, honey.  But technically Stanford wins style points.";
    computerScore++;
  } else if (userPick == "STANFORD" && computerPick == "AIDAN") {
    result = "You won today, honey.  Stanford could cut up Aidan if he had to.";
    humanScore++;
  } else {
    result = "Stop fooling around.  You're acting like a man.";
  }
  alert(result);
  return result;
}
for (let i = 0; i < 5; i++) {
  let userInput = prompt(
    "Honey, you have to choose...is it gonna be Big, Aidan, or Stanford?"
  );
  let userInputCapped = userInput.toUpperCase();
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
  computerInput();
  console.log(playRound(userInputCapped, computerPlay(computerInput())));
}
if (humanScore > computerScore) {
  alert("You won best of 5!");
}

if (humanScore < computerScore) {
  alert("You lost best of 5!");
}

if (humanScore === computerScore) {
  alert("You tied at best of 5!");
}
