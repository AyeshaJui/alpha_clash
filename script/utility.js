function hideElementByID(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementByID(elementIdTow) {
  const element = document.getElementById(elementIdTow);
  element.classList.remove("hidden");
}

function addBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}

function removeBackgroundColor(elementId){
  const element = document.classList.remove("bg-orange-400");
}





function getARandomAlphabet() {
  // get or create an alphabet array
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");
  //   console.log(alphabets);

  // get a random index between 0-25

  const randomNumber = Math.random() * 25;
  const index = parseInt(randomNumber);

  const alphabet = alphabets[index];
  console.log(index, alphabet);
  return alphabet;
}
