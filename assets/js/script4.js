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
let gameTile = cardList.concat(cardList);

// Randomize game grid on each load
gameTile.sort(() => 0.5 - Math.random());

// Storing the count and guess (to test if two selected cards match)
let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = 0;
let delay = 1000;
let counter = 61;
let moveCounter = 0;
// let closeicon = document.querySelector(".close");
// let modal = document.getElementById("timesUp-modal");


var resetAll = function (){
  console.log("resetButtonClicked");
    firstGuess = '';
    secondGuess = '';
    count = 0;
    previousTarget = 0;
    counter = 61;
    moveCounter = 0;
  	$("#moves").html("" + moveCounter);
};

document.getElementById("reset-btn").addEventListener("click", resetAll);

// Grab the div with an id of 'game'
const game = document.getElementById('game');
// Create a section with a class of tiles
const tiles = document.createElement('section');
tiles.setAttribute('class', 'tiles');
// Append the tiles section to the game div
game.appendChild(tiles);

// Game load in body
document.body.onload = startGame();

function startGame(){

// For each item in the cardList array...
// cardList.forEach(item => {
// Changed to double-up cardList amount:

// For each item in the gameGrid array...    
gameTile.forEach(item => {    
  // Create a div
  const card = document.createElement('div');
  // Apply a card class to that div
  card.classList.add('card');
  // Set the data-name attribute of the div to the cardList name
  card.dataset.name = item.name;
  
  // Add functionality and styling to "front"
  const front = document.createElement('div');
  front.classList.add('front');
  
  // Add functionality and styling to "back"
  const back = document.createElement('div');
  back.classList.add('back');
  // Apply the background image of the div to the cardList image
  card.style.backgroundImage = `url(${item.img})`;
  

  // Append the div to the tiles section
  tiles.appendChild(card);
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
// This will reset all counts and guesses back to their original values...
const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;
// ... and removes the CSS of class 'selected'.
  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.remove('selected');
  });
};

// Add event listener to tiles
tiles.addEventListener('click', function(event) {
  // Let's target the event when clicked
  let clicked = event.target;

  // Do not allow the tiles section (html) itself to be selected; only select divs inside <section>. The new flipped (clicked) card (div) may not be clicked twice and seen as a one-card match.
  //if (clicked.nodeName === ('SECTION') || clicked === previousTarget || clicked.parentNode.classList.contains('selected'))  {
    //return;
  //}
 
  if (count < 2) {
    count++;
    if (count === 1) {  // Added a parentNode, since clicking on an inner div (front- or back class) and the data-name is still on the outer div (card).
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);
      clicked.parentNode.classList.add('selected');
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add('selected');
    }
    if (firstGuess !== '' && secondGuess !== '') { // If firstGuess and secondGuess do not share equal value or type... 
      if (firstGuess === secondGuess) {  // The match checker, on success or fail
        setTimeout(match, delay);
        setTimeout(resetGuesses, delay);
        disable(); //NEW, (but doens't work) check line 164
      } else {
        setTimeout(resetGuesses, delay); // ... Reset the cards.
      }
    }
   // previousTarget = clicked;
  }
  
   function disable(){
    // call upon the objects in the array of cardList and disable the cards from performing the selected css-rotation (.selected)
    Array.prototype.filter.call(cardList), function(card){
        card.classList.disabled('selected');
    };
}
  
   moveCounter++;
		$("#moves").html("" + moveCounter);
});


// timesUp modal
// Count-down (storing on line:49 / reset on line: 58)
var interval = setInterval(function() {
    counter--;
    // Display 'counter' wherever you want to.
    if (counter <= -1) {
     		clearInterval(interval);
     		
        // show timesUp modal
        $('#timesUp-modal').modal('show');
        
        // the timesUp-modal must be called upon oonce the timer has reached it's 0-point and show the requested results.

        document.getElementById("finalMove").innerHTML = moveCounter;
        
     		
      //$('.timer').html("");  
       //return;
        
    }else{
    	$('#time').text(counter);
      console.log("Timer --> " + counter);
    }
    
}, 1000);

}

// congrats-modal
 function congrats() {
    if (tiles.length == 16){
        clearInterval(interval);
        
        finalTime = moveCounter.innerHTML;

        // show congrats modal
        $('#congrats-modal').modal('show');
        

        document.getElementById("finalMove").innerHTML = moveCounter;
        document.getElementById("totalTime").innerHTML = finalTime;
     		
      	//$('.move').html("");  
        //return;
    }else{
    	$('#moves').text(moveCounter);
      console.log("Timer --> " + moveCounter);
    }
} 
        //closeicon on modal
        
 /*function closeModal(){
    closeicon.addEventListener("click", function(e){
       // modal.classList.remove("show");
       $('#popup1').modal('show');
        startGame();
    });
}

//congrats();

function playAgain(){
    // modal.classList.remove("show");
    $('#popup1').modal('show');
    startGame();
} */


// Modal on page load (start-modal)
$(window).ready(function(){        
   $('#myModal').modal('show');
   
    }); 
 document.getElementById("startUp").addEventListener("click", resetAll);
 
 $(document).ready(function(){
        $(".startAgain").click(function(){
            location.reload(true);
        });
 });        