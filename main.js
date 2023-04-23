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

function createButton() {
  let key = document.createElement('div');
  key.classList.add('keyButton');
  key.textContent = 'Key';
  document.querySelector('.keyboard-wrapper').append(key);
}

for(let i = 0; i < 32; i++) {
  createButton();
}