function hideElementByID(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementByID(elementIdTow) {
  const element = document.getElementById(elementIdTow);
  element.classList.remove("hidden");
}

function getARandomAlphabet() {
  // get or create an alphabet array
  const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
  const alphabets = alphabetString.split('');
  //   console.log(alphabets);

  // get a random index between 0-25

  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);

  const alphabet = alphabets[index];
  console.log(index, alphabet);
  return alphabet;
}
