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
