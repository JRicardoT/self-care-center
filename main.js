// querySelectors
var sectionImage = document.querySelector('.section-image');
var message = document.querySelector('.message')
var receiveMessageButton = document.querySelector('.receive-message');
var affirmationButton = document.querySelector('#affirmation');
var mantraButton = document.querySelector('#mantra');
var clearMessageButton = document.querySelector('.clear-message');




// variables to store arrays fo affirmations and mantras
var affirmations = [
  "I forgive myself and set myself free.",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom & power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally.",
  "My possibilities are endless.",
  "I am worthy of my dreams.",
  "I am enough.",
  "I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger.",
  "I honor my body by trusting the signals that it sends me.",
  "I manifest perfect health by making smart choices."
];
var mantras = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
  "Don’t let yesterday take up too much of today.",
  "Every day is a second chance.",
  "Tell the truth and love everyone.",
  "I am free from sadness.",
  "I am enough.",
  "In the beginning it is you, in the middle it is you and in the end it is you.",
  "I love myself.",
  "I am present now.",
  "Inhale the future, exhale the past.",
  "This too shall pass.",
  "Yesterday is not today.",
  "The only constant is change.",
  "Onward and upward.",
  "I am the sky, the rest is weather."
];

// eventListeners
receiveMessageButton.addEventListener('click', receiveMessage);
clearMessageButton.addEventListener('click', clearMessage);

// event handlers
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function display(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};

function receiveMessage() {
  if (affirmationButton.checked) {
    message.innerText = affirmations[getRandomIndex(affirmations)];
    hide(sectionImage);
    display(message);
    display(clearMessageButton);
  } else if (mantraButton.checked) {
    message.innerText = mantras[getRandomIndex(mantras)];
    hide(sectionImage);
    display(message);
    display(clearMessageButton);
  } else {
    alert('Please select your type of message.');
  }
};

function clearMessage() {
  hide(message);
  hide(clearMessageButton);
  display(sectionImage);
}
