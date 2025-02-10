const messages = [
  "repetitive yan mag yes ka na agad! sige ka sayang oras!!!",
  "ehhhh??!!!",
  "okkk...",
  "please...",
  "I'm going to cry sige TT",
  "If you say yes Jhustyn will be happy >_<",
  "Ayaw mo talaga po???",
  "I will be very very very sad and I'm gonna die...",
  "k..... dyan kana bye :(( ...",
  "say yes na ikaw please! 🫵😿❤️"
];

let messageIndex = 0;
let noButtonClickCount = 0; // Track the number of "No" button clicks

function handleNoClick() {
  const noButton = document.querySelector('.no-button');
  const yesButton = document.querySelector('.yes-button');
  
  // Show the next message from the messages array
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  // Increase the font size of the "Yes" button
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.5}px`;

  // Track how many times the "No" button has been clicked
  noButtonClickCount++;

  // After 11 clicks, hide the "No" button
  if (noButtonClickCount >= 11) {
    noButton.style.display = 'none'; // Hide the "No" button after 11 clicks
  }
}

function handleYesClick() {
  window.location.href = "yes_page.html"; // Redirect to yes_page.html
}
