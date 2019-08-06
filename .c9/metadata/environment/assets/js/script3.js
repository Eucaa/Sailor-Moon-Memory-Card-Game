{"filter":false,"title":"script3.js","tooltip":"/assets/js/script3.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":243,"column":2},"action":"remove","lines":["// cards array holds all cards","let card = document.getElementsByClassName(\"card\");","let cards = [...card];  // Loop through each card till the full length of the cards array is covered.","console.log(cards);","","// deck of all cards in game","const deck = document.getElementById(\"card-deck\");","","// declaring move variable","let moves = 0;","let counter = document.querySelector(\".moves\");","","// declare variables for star icons","const stars = document.querySelectorAll(\".fa-star\");","","// declaring variable of matchedCards","let matchedCard = document.getElementsByClassName(\"match\");",""," // stars list"," let starsList = document.querySelectorAll(\".stars li\");",""," // close icon in modal"," let closeicon = document.querySelector(\".close\");",""," // declare modal"," let modal = document.getElementById(\"popup1\")",""," // array for opened cards","var openedCards = [];","","","// @description shuffles cards","// @param {array}","// @returns shuffledarray","function shuffle(array) {","    var currentIndex = array.length, temporaryValue, randomIndex;","","    while (currentIndex !== 0) {","        randomIndex = Math.floor(Math.random() * currentIndex);","        currentIndex -= 1;","        temporaryValue = array[currentIndex];","        array[currentIndex] = array[randomIndex];","        array[randomIndex] = temporaryValue;","    }","","    return array;","};","","","// @description shuffles cards when page is refreshed / loads","document.body.onload = startGame();","","","// @description function to start a new play ","function startGame(){","    // shuffle deck","    cards = shuffle(cards);","    // remove all exisiting classes from each card","    for (var i = 0; i < cards.length; i++){","        deck.innerHTML = \"\";","        [].forEach.call(cards, function(item) {","            deck.appendChild(item);","        });","        cards[i].classList.remove(\"show\", \"open\", \"match\", \"disabled\");","    }","    // reset moves","    moves = 0;","    counter.innerHTML = moves;","    // reset rating","    for (var i= 0; i < stars.length; i++){","        stars[i].style.color = \"#FFD700\";","        stars[i].style.visibility = \"visible\";","    }","    //reset timer","    second = 0;","    minute = 0; ","    hour = 0;","    var timer = document.querySelector(\".timer\");","    timer.innerHTML = \"0 mins 0 secs\";","    clearInterval(interval);","}","","","// @description toggles open and show class to display cards","var displayCard = function (){","    this.classList.toggle(\"open\");","    this.classList.toggle(\"show\");","    this.classList.toggle(\"disabled\");","};","","","// @description add opened cards to OpenedCards list and check if cards are match or not","function cardOpen() {","    openedCards.push(this);","    var len = openedCards.length;","    if(len === 2){","        moveCounter();","        if(openedCards[0].type === openedCards[1].type){","            matched();","        } else {","            unmatched();","        }","    }","};","","","// @description when cards match","function matched(){","    openedCards[0].classList.add(\"match\", \"disabled\");","    openedCards[1].classList.add(\"match\", \"disabled\");","    openedCards[0].classList.remove(\"show\", \"open\", \"no-event\");","    openedCards[1].classList.remove(\"show\", \"open\", \"no-event\");","    openedCards = [];","}","","","// description when cards don't match","function unmatched(){","    openedCards[0].classList.add(\"unmatched\");","    openedCards[1].classList.add(\"unmatched\");","    disable();","    setTimeout(function(){","        openedCards[0].classList.remove(\"show\", \"open\", \"no-event\",\"unmatched\");","        openedCards[1].classList.remove(\"show\", \"open\", \"no-event\",\"unmatched\");","        enable();","        openedCards = [];","    },1100);","}","","","// @description disable cards temporarily","function disable(){","    Array.prototype.filter.call(cards, function(card){","        card.classList.add('disabled');","    });","}","","","// @description enable cards and disable matched cards","function enable(){","    Array.prototype.filter.call(cards, function(card){","        card.classList.remove('disabled');","        for(var i = 0; i < matchedCard.length; i++){","            matchedCard[i].classList.add(\"disabled\");","        }","    });","}","","","// @description count player's moves","function moveCounter(){","    moves++;","    counter.innerHTML = moves;","    //start timer on first click","    if(moves == 1){","        second = 0;","        minute = 0; ","        hour = 0;","        startTimer();","    }","    // setting rates based on moves","    if (moves > 8 && moves < 12){","        for( i= 0; i < 3; i++){","            if(i > 1){","                stars[i].style.visibility = \"collapse\";","            }","        }","    }","    else if (moves > 13){","        for( i= 0; i < 3; i++){","            if(i > 0){","                stars[i].style.visibility = \"collapse\";","            }","        }","    }","}","","","// @description game timer","var second = 0, minute = 0; hour = 0;","var timer = document.querySelector(\".timer\");","var interval;","function startTimer(){","    interval = setInterval(function(){","        timer.innerHTML = minute+\"mins \"+second+\"secs\";","        second++;","        if(second == 60){","            minute++;","            second=0;","        }","        if(minute == 60){","            hour++;","            minute = 0;","        }","    },1000);","}","","","// @description congratulations when all cards match, show modal and moves, time and rating","function congratulations(){","    if (matchedCard.length == 16){","        clearInterval(interval);","        finalTime = timer.innerHTML;","","        // show congratulations modal","        modal.classList.add(\"show\");","","        // declare star rating variable","        var starRating = document.querySelector(\".stars\").innerHTML;","","        //showing move, rating, time on modal","        document.getElementById(\"finalMove\").innerHTML = moves;","        document.getElementById(\"starRating\").innerHTML = starRating;","        document.getElementById(\"totalTime\").innerHTML = finalTime;","","        //closeicon on modal","        closeModal();","    };","}","","","// @description close icon on modal","function closeModal(){","    closeicon.addEventListener(\"click\", function(e){","        modal.classList.remove(\"show\");","        startGame();","    });","}","","","// @desciption for user to play Again ","function playAgain(){","    modal.classList.remove(\"show\");","    startGame();","}","","","// loop to add event listeners to each card","for (var i = 0; i < cards.length; i++){","    card = cards[i];","    card.addEventListener(\"click\", displayCard);","    card.addEventListener(\"click\", cardOpen);","    card.addEventListener(\"click\",congratulations);","};"],"id":2},{"start":{"row":0,"column":0},"end":{"row":240,"column":3},"action":"insert","lines":["// cards!","var cardList = [{","        name: 'jupiter',","        img: \"assets/images/jupiter.png\",","        ","    },","    {","        name: 'luna',","        img: \"assets/images/luna.jpg\"","        ","    },","    {","        name: 'mars',","        img: \"assets/images/mars.jpg\"","        ","    },","    {","        name: 'mercury',","        img: \"assets/images/mercury.jpg\"","        ","    },","    {","        name: 'moon',","        img: \"assets/images/moon.jpg\"","        ","    },","    {","        name: 'neptune',","        img: \"assets/images/neptune.jpg\"","        ","    },","    {","        name: 'uranus',","        img: \"assets/images/uranus.jpg\"","        ","    },","    {","        name: 'venus',","        img: \"assets/images/venus.jpg\"","        ","    },","    {","        name: 'jupiter',","        img: \"assets/images/jupiter.png\",","        ","    },","    {","        name: 'luna',","        img: \"assets/images/luna.jpg\"","        ","    },","    {","        name: 'mars',","        img: \"assets/images/mars.jpg\"","        ","    },","    {","        name: 'mercury',","        img: \"assets/images/mercury.jpg\"","        ","    },","    {","        name: 'moon',","        img: \"assets/images/moon.jpg\"","        ","    },","    {","        name: 'neptune',","        img: \"assets/images/neptune.jpg\"","        ","    },","    {","        name: 'uranus',","        img: \"assets/images/uranus.jpg\"","        ","    },","    {","        name: 'venus',","        img: \"assets/images/venus.jpg\"","        ","    },","];","","// Randomize game grid on each load","cardList.sort(() => 0.5 - Math.random());","","","// Storing the count and guess (to test if two selected cards match)","let firstTry = '';","let secondTry = '';","let originalCounter = 60;","let counter = originalCounter;","let moveCounter = 0;","","","var resetAll = function() {","    console.log(\"resetButtonClicked\");","    firstTry = '';","    secondTry = '';","    counter = 60;","    moveCounter = 0;","    $(\"#moves\").html(\"\" + moveCounter);","};","","document.getElementById(\"reset-btn\").addEventListener(\"click\", resetAll);","","// Grab the div with an id of 'game'","const game = document.getElementById('game');","// Create a section with a class of tiles","const tiles = document.createElement('section');","tiles.setAttribute('class', 'tiles');","// Attach the tiles section to the game div","game.appendChild(tiles);","","// Game load in body","document.body.onload = startGame();","","","","cardList.forEach((item, index, arr) => {","    // Create a div","    const card = document.createElement('div');","    card.setAttribute('id', \"card-\" + index);","    // Apply a card class to that div","    card.classList.add('card');","    // Set the data-name attribute of the div to the cardList name","    card.dataset.name = item.name;","","    // Add functionality and styling to \"front\"","    const front = document.createElement('div');","    front.classList.add('front');","","    // Add functionality and styling to \"back\"","    const back = document.createElement('div');","    back.classList.add('back');","    // Apply the background image of the div to the cardList image","    card.style.backgroundImage = `url(${item.img})`;","","","    // Append the div to the tiles section","    tiles.appendChild(card);","    card.appendChild(front);","    card.appendChild(back);","    card.addEventListener('click', function(event) {","        console.log(\"clicked on card: \"+ index);","        let clicked = event.target;","        let count = $(\".selected\").length;","        console.log(\"sum of total selected items = \"+ count);","        if (count < 2) {","            count++;","            if (count === 1) { // Added a parentNode, since clicking on an inner div (front- or back class) and the data-name is still on the outer div (card).","                firstTry = clicked.parentNode.dataset.name;","                console.log(firstTry);","            } else if (count === 2) {","                secondTry = clicked.parentNode.dataset.name;","                console.log(secondTry);","            }","             clicked.parentNode.classList.add('selected');","        } ","        if(count == 2) {","            moveCounter++;","            let waiter = setTimeout(function() {","                if (firstTry !== '' && secondTry !== '') { // If firstTry and secondGuess do not share equal value or type... ","                    if (firstTry === secondTry) { // The match checker, on success or fail","                        console.log(\"we found a match\");","                        let items = $(\".selected\");","                        for(let i = 0; i < items.length; i++) {","                            items[i].classList.add('match');","                        }","                    }","                    ","                }","                ","                let correctCount = $(\".match\").length;","                if(correctCount === cardList.length) {","                    $('#congrats-modal').modal('show');","                    document.getElementById(\"finalMove\").innerHTML = moveCounter;","                    document.getElementById(\"totalTime\").innerHTML = originalCounter - counter;","                    $('#timesUp-modal').remove();","                }","                ","                count = 0;","                firstTry = '';","                secondTry = '';","                var selected = document.querySelectorAll('.selected');","                selected.forEach(card => {","                    card.classList.remove('selected');","                });","            }, 1000);","            ","        }","        ","        ","","        ","        $(\"#moves\").html(\"\" + moveCounter);","    });","});","","","function startGame() {","    // timesUp modal","    // Count-down (storing on line:49 / reset on line: 58)","    var interval = setInterval(function() {","        counter--;","        // Display 'counter' wherever you want to.","        if (counter <= -1) {","            clearInterval(interval);","","            // show timesUp modal","            $('#timesUp-modal').modal('show');","","            // the timesUp-modal must be called upon oonce the timer has reached it's 0-point and show the requested results.","            console.log(moveCounter);","            $(\"#moveCounter\").text(moveCounter);","","        } else {","            $('#time').text(counter);","            console.log(\"Timer --> \" + counter);","        }","","    }, 1000);","","","","}","","","// Modal on page load (start-modal)","$(window).ready(function() {","    $('#myModal').modal('show');","","});","","document.getElementById(\"startUp\").addEventListener(\"click\", resetAll);","","$(document).ready(function() {","    $(\".startAgain\").click(function() {","        location.reload(true);","    });","});"]}]]},"ace":{"folds":[],"scrolltop":2348.625,"scrollleft":0,"selection":{"start":{"row":240,"column":3},"end":{"row":240,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":258,"mode":"ace/mode/javascript"}},"timestamp":1565098520034,"hash":"25561e4ff20e1186c61e1f60e92f634f75991f42"}