// cards!
var cardList = [
    {
    name: 'jupiter',    
    img: "assets/images/jupiter.png",
    },
    {
    name: 'luna',    
    img: "assets/images/luna.jpg",
    },
    {
    name: 'mars',
    img: "assets/images/mars.jpg"
    },
    {
    name: 'mercury',    
    img: "assets/images/mercury.jpg",
    },
    {
    name: 'moon',    
    img: "assets/images/moon.jpg",
    },
    {
    name: 'neptune',    
    img: "assets/images/neptune.jpg",
    },
    {
    name: 'uranus',    
    img: "assets/images/uranus.jpg",
    },
    {
    name: 'venus',    
    img: "assets/images/venus.jpg",
    },
];

// Duplicate array to create a match for each card
let gameGrid = cardList.concat(cardList);

// Randomize game grid on each load
gameGrid.sort(() => 0.5 - Math.random());

// Storing the count and guess (to test if two selected cards match)
let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1200;

// Grab the div with an id of root
const game = document.getElementById('game');
// Create a section with a class of grid
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
// Append the grid section to the game div
game.appendChild(grid);


// For each item in the cardList array...
// cardList.forEach(item => {
// Changed to double-up cardList amount:

// For each item in the gameGrid array...    
gameGrid.forEach(item => {    
  // Create a div
  const card = document.createElement('div');
  // Apply a card class to that div
  card.classList.add('card');
  // Set the data-name attribute of the div to the cardList name
  card.dataset.name = item.name;
  
  const front = document.createElement('div');
  front.classList.add('front');
  
  const back = document.createElement('div');
  back.classList.add('back');
  // Apply the background image of the div to the cardList image
  card.style.backgroundImage = `url(${item.img})`;

  // Append the div to the grid section
  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

// Loop through all selected elements when called, then add the match class.
const match = () => {
  let selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.add('match');
  });
};

const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;

  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.remove('selected');
  });
};

// Add event listener to grid
grid.addEventListener('click', function(event) {
  // Let's target the event when clicked
  let clicked = event.target;

  // Do not allow the grid section (html) itself to be selected; only select divs inside the grid
  if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected')) {
    return;
  }
  
  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);
      clicked.parentNode.classList.add('selected');
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add('selected');
    }
    if (firstGuess !== '' && secondGuess !== '') {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
        setTimeout(resetGuesses, delay);
      } else {
        setTimeout(resetGuesses, delay);
      }
    }
    previousTarget = clicked;
  }
});