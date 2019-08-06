// cards!
var cardList = [{
        name: 'jupiter',
        img: "assets/images/jupiter.png",
        
    },
    {
        name: 'luna',
        img: "assets/images/luna.jpg"
        
    },
    {
        name: 'mars',
        img: "assets/images/mars.jpg"
        
    },
    {
        name: 'mercury',
        img: "assets/images/mercury.jpg"
        
    },
    {
        name: 'moon',
        img: "assets/images/moon.jpg"
        
    },
    {
        name: 'neptune',
        img: "assets/images/neptune.jpg"
        
    },
    {
        name: 'uranus',
        img: "assets/images/uranus.jpg"
        
    },
    {
        name: 'venus',
        img: "assets/images/venus.jpg"
        
    },
    {
        name: 'jupiter',
        img: "assets/images/jupiter.png",
        
    },
    {
        name: 'luna',
        img: "assets/images/luna.jpg"
        
    },
    {
        name: 'mars',
        img: "assets/images/mars.jpg"
        
    },
    {
        name: 'mercury',
        img: "assets/images/mercury.jpg"
        
    },
    {
        name: 'moon',
        img: "assets/images/moon.jpg"
        
    },
    {
        name: 'neptune',
        img: "assets/images/neptune.jpg"
        
    },
    {
        name: 'uranus',
        img: "assets/images/uranus.jpg"
        
    },
    {
        name: 'venus',
        img: "assets/images/venus.jpg"
        
    },
];

// Randomize game grid on each load
cardList.sort(() => 0.5 - Math.random());


// Storing the count and guess (to test if two selected cards match)
let firstTry = '';
let secondTry = '';
let originalCounter = 60;
let counter = originalCounter;
let moveCounter = 0;


var resetAll = function() {
    console.log("resetButtonClicked");
    firstTry = '';
    secondTry = '';
    counter = 60;
    moveCounter = 0;
    $("#moves").html("" + moveCounter);
};

document.getElementById("reset-btn").addEventListener("click", resetAll);

// Grab the div with an id of 'game'
const game = document.getElementById('game');
// Create a section with a class of tiles
const tiles = document.createElement('section');
tiles.setAttribute('class', 'tiles');
// Attach the tiles section to the game div
game.appendChild(tiles);

// Game load in body
document.body.onload = startGame();



cardList.forEach((item, index, arr) => {
    // Create a div
    const card = document.createElement('div');
    card.setAttribute('id', "card-" + index);
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
    card.addEventListener('click', function(event) {
        console.log("clicked on card: "+ index);
        let clicked = event.target;
        let count = $(".selected").length;
        console.log("sum of total selected items = "+ count);
        if (count < 2) {
            count++;
            if (count === 1) { // Added a parentNode, since clicking on an inner div (front- or back class) and the data-name is still on the outer div (card).
                firstTry = clicked.parentNode.dataset.name;
                console.log(firstTry);
            } else if (count === 2) {
                secondTry = clicked.parentNode.dataset.name;
                console.log(secondTry);
            }
             clicked.parentNode.classList.add('selected');
        } 
        if(count == 2) {
            moveCounter++;
            let waiter = setTimeout(function() {
                if (firstTry !== '' && secondTry !== '') { // If firstTry and secondGuess do not share equal value or type... 
                    if (firstTry === secondTry) { // The match checker, on success or fail
                        console.log("we found a match");
                        let items = $(".selected");
                        for(let i = 0; i < items.length; i++) {
                            items[i].classList.add('match');
                        }
                    }
                    
                }
                
                let correctCount = $(".match").length;
                if(correctCount === cardList.length) {
                    $('#congrats-modal').modal('show');
                    document.getElementById("finalMove").innerHTML = moveCounter;
                    document.getElementById("totalTime").innerHTML = originalCounter - counter;
                    $('#timesUp-modal').remove();
                }
                
                count = 0;
                firstTry = '';
                secondTry = '';
                var selected = document.querySelectorAll('.selected');
                selected.forEach(card => {
                    card.classList.remove('selected');
                });
            }, 1000);
            
        }
        
        

        
        $("#moves").html("" + moveCounter);
    });
});


function startGame() {
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
            console.log(moveCounter);
            $("#moveCounter").text(moveCounter);

        } else {
            $('#time').text(counter);
            console.log("Timer --> " + counter);
        }

    }, 1000);



}


// Modal on page load (start-modal)
$(window).ready(function() {
    $('#myModal').modal('show');

});

document.getElementById("startUp").addEventListener("click", resetAll);

$(document).ready(function() {
    $(".startAgain").click(function() {
        location.reload(true);
    });
});