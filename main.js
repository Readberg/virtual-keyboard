const body = document.querySelector('.body');

createMain();
createHeader();

function createHeader() {
  let header = document.createElement('header');
  header.classList.add('header');
  body.prepend(header);
}

const header = document.querySelector('.header');

function createTitle() {
  let title = document.createElement('h1');
  title.textContent = 'Virtual Keyboard';
  header.append(title);
}
createTitle();

function createMain() {
  let main = document.createElement('main');
  main.classList.add('main');
  body.prepend(main);
}

const main = document.querySelector('.main');

function createTextArea() {
  let textArea = document.createElement('textarea');
  textArea.classList.add('textarea');
  main.append(textArea);
}
createTextArea();

const textArea = document.querySelector('.textarea');

function createKeyboard() {
  let section = document.createElement('section');
  section.classList.add('keyboard-wrapper');
  main.append(section);
}
createKeyboard();

import keys from './keyboard-en.json' assert {type: "json"};
function createButton() {
  for (let i = 0; i < keys.length; i++) {
    let key = document.createElement('div');
    key.classList.add('keyButton');
    key.textContent = keys[i].key;
    document.querySelector('.keyboard-wrapper').append(key);
  }
}
createButton();

document.addEventListener('keydown', (event) => {
  const pressedKey = event.key.toLowerCase();
  const virtualKeys = document.querySelectorAll('.keyButton');
  textArea.focus();

  virtualKeys.forEach((key) => {
    if (key.textContent.toLowerCase() === pressedKey) {
      key.classList.add('active');      
    }
  });
});

document.addEventListener('keyup', (event) => {
  const pressedKey = event.key.toLowerCase();
  const virtualKeys = document.querySelectorAll('.keyButton');

  virtualKeys.forEach((key) => {
    if (key.textContent.toLowerCase() === pressedKey) {
      key.classList.remove('active');
    }
  });
});

function inputKey(event) {
  textArea.focus();
  
  const key = event.target.textContent;
  console.log(key);
  switch (key) {
    case 'Enter':
      textArea.value += '\n';
      break;
    case 'Backspace':
      textArea.value = textArea.value.slice(0, -1);
      break;
    case 'Shift':
    case 'Control':
    case 'Alt':
      break;
    case 'Space':
      textArea.value = textArea.value + ' ';
      break;
    default:
      textArea.value += key;
  }
}

document.querySelectorAll('.keyButton').forEach(btn => {
  btn.addEventListener('click', inputKey);
})