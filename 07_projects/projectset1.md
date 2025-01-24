# project releted to dom

## project link
[click here](
https://stackblitz.com/edit/
js-2br6e9bv?file=index.html
)

# solution code

## project 1

```javascript
console.log("chandan")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id; //(grey)
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id; //(white)
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id; //(blue)
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id; //(yellow)
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id; //(purple)
    }
    if (e.target.id === 'black') {
      body.style.backgroundColor = e.target.id; //(black)
    }
    if (e.target.id === 'red') {
      body.style.backgroundColor = e.target.id; //(red)
    }
  });
});

```

## project 2 solution

```javascript
const form = document.querySelector('form');

//this usecase will give you empty
//const height=parseInt(document.querySelector('#height').value);
// const weight=parseInt(document.querySelector('#weight').value);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});


```
## project 3 solution code

```javascript
const clock = document.getElementById('clock');
//const clock = document.querySelector('clock');

//let date = new Date();
//console.log(date.toLocaleTimeString());
// normal time disel curently pan  ek da ek value mag refresh karava lagel

//aplya kade ek function ahe tya mule current calue aplya ke yeil
setInterval(function () {
  let date = new Date();
  //console.log(date.toLocaleTimeString()
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```
##project 4 soltion code
```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  // yat value hi server la jate mhanun pan aplyala server cha kam nai so value aplya pahije
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //chaeck user gues is between 100 to 0 or value is real or not
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('please enter a valid number more than one');
  } else if (guess > 100) {
    alert('please enter a valid number less then humberd');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayguess(guess);
      displaymassage(`game over.random number was ${randomNumber}`);
      endgame();
    } else {
      displayguess(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess) {
  //value random number chya equal tar nahi ye na
  //vaue jar equal asel tar display method cha vapar karun te sanga ki you win
  // value jar low ael tar low heigh asel ta r height
  if (guess === randomNumber) {
    displaymassage(`you guess right`);
    endgame();
  } else if (guess < randomNumber) {
    displaymassage(`number is too low`);
  } else if (guess > randomNumber) {
    displaymassage(`number is too heigh`);
  }
}

function displayguess(guess) {
  //clean the old value karn navin value pan ghen ahe
  //update remainung guess or value
  userInput.value = '';
  guessSlot.innerHTML += `${guess},  `;
  // yat guess chya value update nahi push karat ahe
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displaymassage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endgame() {
  //
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="new-game"> start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newgame();
}

function newgame() {
  const newgamebutton = document.querySelector('#new-game');
  newgamebutton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```