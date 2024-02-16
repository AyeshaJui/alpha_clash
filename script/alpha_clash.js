// function play() {
//   //    step-1 hide the home screen. to hide the screen add the class hidden to the home section.
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");

//   // console.log(homeSection. classList)
//   // show the playground

//   const playGroundSection = document.getElementById("play-ground");

//   playGroundSection.classList.remove("hidden");

// }

function continueGame() {
  const alphabet = getARandomAlphabet();
  console.log("Your random alphabet", alphabet);

  // set randomly generated alphabet to the screen (show it)
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;
  addBackgroundColorById(alphabet);
}

function play() {
  hideElementByID("home-screen");
  showElementByID("play-ground");
  continueGame();
}
