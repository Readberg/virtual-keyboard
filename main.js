const body = document.querySelector('.body');
createMain();
createHeader();

function createHeader() {
  let header = document.createElement('header');
  header.classList.add('header');
  body.prepend(header);
}

const header = document.querySelector('.header');

function createTitle () {
  let title = document.createElement('h1');
  title.textContent = 'Virtual Keyboard';
  header.append(title);
}
createTitle();

function createMain () {
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

function createKeyboard () {
  let section = document.createElement('section');
  section.classList.add('keyboard-wrapper');
  main.append(section);
}
createKeyboard();

import keys from './keyboard-en.json' assert {type: "json"};
function createButton() {
  for(let i = 0; i < keys.length; i++) {
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

  virtualKeys.forEach((key) => {
    if (key.textContent.toLowerCase() === pressedKey) {
      key.classList.add('active');
      const textArea = document.querySelector('.textarea');
      textArea.value += pressedKey;
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
  const key = event.target.textContent;
  const textArea = document.querySelector('.textarea');
  textArea.value += key;
}
document.querySelectorAll('.keyButton').forEach(btn => {
  btn.addEventListener('click', inputKey);
})