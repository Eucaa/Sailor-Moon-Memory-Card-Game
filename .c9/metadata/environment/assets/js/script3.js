{"filter":false,"title":"script3.js","tooltip":"/assets/js/script3.js","undoManager":{"mark":19,"position":19,"stack":[[{"start":{"row":0,"column":0},"end":{"row":164,"column":7},"action":"insert","lines":["// All usefull objects and shortcuts to simplify coding","let objects = ['bicycle', 'bicycle', 'leaf', 'leaf', 'cube', 'cube', 'anchor', 'anchor', 'paper-plane-o', 'paper-plane-o', 'bolt', 'bolt', 'bomb', 'bomb', 'diamond', 'diamond'],","","    // Useful selectors shortened","    $container = $('.container'),","    $scorePanel = $('.score-panel'),","    $rating = $('.fa-star'),","    $moves = $('.moves'),","    $timer = $('.timer'),","    $restart = $('.restart'),","    $deck = $('.deck'),","","    // Set variables to shorten code","    nowTime,","    allOpen = [],","    match = 0,","    second = 0,","    moves = 0,","    wait = 420,","    totalCard = objects.length / 2,","","    // Scoring system from 1 to 3 stars to shorten code","    stars3 = 14,","    stars2 = 16,","    star1 = 20;","","// Shuffling function: enables that no two games have the same card arrangement ","function shuffle(array) {","    let currentIndex = array.length, temporaryValue, randomIndex;","","    while (currentIndex !== 0) {","        randomIndex = Math.floor(Math.random() * currentIndex);","        currentIndex -= 1;","        temporaryValue = array[currentIndex];","        array[currentIndex] = array[randomIndex];","        array[randomIndex] = temporaryValue;","    }","    return array;","}","","// The function init() enables the game to begin","function init() {","","    // The shuffle function shuffles the objects array","    let allCards = shuffle(objects);","    $deck.empty();","","    // The game starts with no matching cards and zero moves ","    match = 0;","    moves = 0;","    $moves.text('0');","","    // A for loop creates 16  <li> tags with the class of card for every <i> tag","    // A class of fa fa- and a name of each object from the objects=[] array","    for (let i = 0; i < allCards.length; i++) {","        $deck.append($('<li class=\"card\"><i class=\"fa fa-' + allCards[i] + '\"></i></li>'))","    }","    addCardListener();","","    // Enables the timer to reset to 0 when the game is restarted","    resetTimer(nowTime);","    second = 0;","    $timer.text(`${second}`)","    initTime();","}","","// Adds a score from 1 to 3 stars depending on the amount of moves done","function rating(moves) {","    let rating = 3;","    if (moves > stars3 && moves < stars2) {","        $rating.eq(3).removeClass('fa-star').addClass('fa-star-o');","    } else if (moves > stars2 && moves < star1) {","        $rating.eq(2).removeClass('fa-star').addClass('fa-star-o');","    } else if (moves > star1) {","        $rating.eq(1).removeClass('fa-star').addClass('fa-star-o');","        rating = 1;","    }","    return { score: rating };","}","","// Add boostrap modal alert window showing time, moves, score it took to finish the game, toggles when all pairs are matched.","function gameOver(moves, score) {","    $('#winnerText').text(`In ${second} seconds, you did a total of ${moves} moves with a score of ${score}. Well done!`);","    $('#winnerModal').modal('toggle');","}","","// Clicking on the button located on the top right of the game, enables the cards too be reset","$restart.bind('click', function (confirmed) {","    if (confirmed) {","        $rating.removeClass('fa-star-o').addClass('fa-star');","        init();","    }","});","","// This function allows each card to be validated that is an equal match to another card that is clicked on to stay open.","// If cards do not match, both cards are flipped back over.","let addCardListener = function () {","","    // With the following, the card that is clicked on is flipped","    $deck.find('.card').bind('click', function () {","        let $this = $(this);","","        if ($this.hasClass('show') || $this.hasClass('match')) { return true; }","","        let card = $this.context.innerHTML;","        $this.addClass('open show');","        allOpen.push(card);","","        // Compares cards if they matched","        if (allOpen.length > 1) {","            if (card === allOpen[0]) {","                $deck.find('.open').addClass('match');","                setTimeout(function () {","                    $deck.find('open').removeClass('open show');","                }, wait);","                match++;","","                // If cards are not matched, there is a delay of 630ms, and the cards will turn back cover up.","            } else {","                $deck.find('.open').addClass('notmatch');","                setTimeout(function () {","                    $deck.find('.open').removeClass('open show');","                }, wait / 1.5);","            }","","            // The allOpen array specifies all added cards facing up","            allOpen = [];","","            // Increments the number of moves by one only when two cards are matched or not matched","            moves++;","","            // The number of moves is added to the rating() function that will determine the star score","            rating(moves);","","            // The number of moves are added to the modal HTML alert","            $moves.html(moves);","        }","","        // The game is finished once all cards have been matched, with a short delay","        if (totalCard === match) {","            rating(moves);","            let score = rating(moves).score;","            setTimeout(function () {","                gameOver(moves, score);","            }, 500);","        }","    });","}","","// Initiates the timer as soon as the game is loaded","function initTime() {","    nowTime = setInterval(function () {","        $timer.text(`${second}`)","        second = second + 1","    }, 1000);","}","","// Resets the timer when the game ends or is restarted","function resetTimer(timer) {","    if (timer) {","        clearInterval(timer);","    }","}","","init();"],"id":1}],[{"start":{"row":62,"column":28},"end":{"row":62,"column":29},"action":"insert","lines":[";"],"id":2}],[{"start":{"row":147,"column":1},"end":{"row":147,"column":2},"action":"insert","lines":[";"],"id":3}],[{"start":{"row":152,"column":32},"end":{"row":152,"column":33},"action":"insert","lines":[";"],"id":4}],[{"start":{"row":153,"column":27},"end":{"row":153,"column":28},"action":"insert","lines":[";"],"id":5}],[{"start":{"row":0,"column":0},"end":{"row":164,"column":7},"action":"remove","lines":["// All usefull objects and shortcuts to simplify coding","let objects = ['bicycle', 'bicycle', 'leaf', 'leaf', 'cube', 'cube', 'anchor', 'anchor', 'paper-plane-o', 'paper-plane-o', 'bolt', 'bolt', 'bomb', 'bomb', 'diamond', 'diamond'],","","    // Useful selectors shortened","    $container = $('.container'),","    $scorePanel = $('.score-panel'),","    $rating = $('.fa-star'),","    $moves = $('.moves'),","    $timer = $('.timer'),","    $restart = $('.restart'),","    $deck = $('.deck'),","","    // Set variables to shorten code","    nowTime,","    allOpen = [],","    match = 0,","    second = 0,","    moves = 0,","    wait = 420,","    totalCard = objects.length / 2,","","    // Scoring system from 1 to 3 stars to shorten code","    stars3 = 14,","    stars2 = 16,","    star1 = 20;","","// Shuffling function: enables that no two games have the same card arrangement ","function shuffle(array) {","    let currentIndex = array.length, temporaryValue, randomIndex;","","    while (currentIndex !== 0) {","        randomIndex = Math.floor(Math.random() * currentIndex);","        currentIndex -= 1;","        temporaryValue = array[currentIndex];","        array[currentIndex] = array[randomIndex];","        array[randomIndex] = temporaryValue;","    }","    return array;","}","","// The function init() enables the game to begin","function init() {","","    // The shuffle function shuffles the objects array","    let allCards = shuffle(objects);","    $deck.empty();","","    // The game starts with no matching cards and zero moves ","    match = 0;","    moves = 0;","    $moves.text('0');","","    // A for loop creates 16  <li> tags with the class of card for every <i> tag","    // A class of fa fa- and a name of each object from the objects=[] array","    for (let i = 0; i < allCards.length; i++) {","        $deck.append($('<li class=\"card\"><i class=\"fa fa-' + allCards[i] + '\"></i></li>'))","    }","    addCardListener();","","    // Enables the timer to reset to 0 when the game is restarted","    resetTimer(nowTime);","    second = 0;","    $timer.text(`${second}`);","    initTime();","}","","// Adds a score from 1 to 3 stars depending on the amount of moves done","function rating(moves) {","    let rating = 3;","    if (moves > stars3 && moves < stars2) {","        $rating.eq(3).removeClass('fa-star').addClass('fa-star-o');","    } else if (moves > stars2 && moves < star1) {","        $rating.eq(2).removeClass('fa-star').addClass('fa-star-o');","    } else if (moves > star1) {","        $rating.eq(1).removeClass('fa-star').addClass('fa-star-o');","        rating = 1;","    }","    return { score: rating };","}","","// Add boostrap modal alert window showing time, moves, score it took to finish the game, toggles when all pairs are matched.","function gameOver(moves, score) {","    $('#winnerText').text(`In ${second} seconds, you did a total of ${moves} moves with a score of ${score}. Well done!`);","    $('#winnerModal').modal('toggle');","}","","// Clicking on the button located on the top right of the game, enables the cards too be reset","$restart.bind('click', function (confirmed) {","    if (confirmed) {","        $rating.removeClass('fa-star-o').addClass('fa-star');","        init();","    }","});","","// This function allows each card to be validated that is an equal match to another card that is clicked on to stay open.","// If cards do not match, both cards are flipped back over.","let addCardListener = function () {","","    // With the following, the card that is clicked on is flipped","    $deck.find('.card').bind('click', function () {","        let $this = $(this);","","        if ($this.hasClass('show') || $this.hasClass('match')) { return true; }","","        let card = $this.context.innerHTML;","        $this.addClass('open show');","        allOpen.push(card);","","        // Compares cards if they matched","        if (allOpen.length > 1) {","            if (card === allOpen[0]) {","                $deck.find('.open').addClass('match');","                setTimeout(function () {","                    $deck.find('open').removeClass('open show');","                }, wait);","                match++;","","                // If cards are not matched, there is a delay of 630ms, and the cards will turn back cover up.","            } else {","                $deck.find('.open').addClass('notmatch');","                setTimeout(function () {","                    $deck.find('.open').removeClass('open show');","                }, wait / 1.5);","            }","","            // The allOpen array specifies all added cards facing up","            allOpen = [];","","            // Increments the number of moves by one only when two cards are matched or not matched","            moves++;","","            // The number of moves is added to the rating() function that will determine the star score","            rating(moves);","","            // The number of moves are added to the modal HTML alert","            $moves.html(moves);","        }","","        // The game is finished once all cards have been matched, with a short delay","        if (totalCard === match) {","            rating(moves);","            let score = rating(moves).score;","            setTimeout(function () {","                gameOver(moves, score);","            }, 500);","        }","    });","};","","// Initiates the timer as soon as the game is loaded","function initTime() {","    nowTime = setInterval(function () {","        $timer.text(`${second}`);","        second = second + 1;","    }, 1000);","}","","// Resets the timer when the game ends or is restarted","function resetTimer(timer) {","    if (timer) {","        clearInterval(timer);","    }","}","","init();"],"id":6},{"start":{"row":0,"column":0},"end":{"row":243,"column":2},"action":"insert","lines":["// cards array holds all cards","let card = document.getElementsByClassName(\"card\");","let cards = [...card]","console.log(cards);","","// deck of all cards in game","const deck = document.getElementById(\"card-deck\");","","// declaring move variable","let moves = 0;","let counter = document.querySelector(\".moves\");","","// declare variables for star icons","const stars = document.querySelectorAll(\".fa-star\");","","// declaring variable of matchedCards","let matchedCard = document.getElementsByClassName(\"match\");",""," // stars list"," let starsList = document.querySelectorAll(\".stars li\");",""," // close icon in modal"," let closeicon = document.querySelector(\".close\");",""," // declare modal"," let modal = document.getElementById(\"popup1\")",""," // array for opened cards","var openedCards = [];","","","// @description shuffles cards","// @param {array}","// @returns shuffledarray","function shuffle(array) {","    var currentIndex = array.length, temporaryValue, randomIndex;","","    while (currentIndex !== 0) {","        randomIndex = Math.floor(Math.random() * currentIndex);","        currentIndex -= 1;","        temporaryValue = array[currentIndex];","        array[currentIndex] = array[randomIndex];","        array[randomIndex] = temporaryValue;","    }","","    return array;","};","","","// @description shuffles cards when page is refreshed / loads","document.body.onload = startGame();","","","// @description function to start a new play ","function startGame(){","    // shuffle deck","    cards = shuffle(cards);","    // remove all exisiting classes from each card","    for (var i = 0; i < cards.length; i++){","        deck.innerHTML = \"\";","        [].forEach.call(cards, function(item) {","            deck.appendChild(item);","        });","        cards[i].classList.remove(\"show\", \"open\", \"match\", \"disabled\");","    }","    // reset moves","    moves = 0;","    counter.innerHTML = moves;","    // reset rating","    for (var i= 0; i < stars.length; i++){","        stars[i].style.color = \"#FFD700\";","        stars[i].style.visibility = \"visible\";","    }","    //reset timer","    second = 0;","    minute = 0; ","    hour = 0;","    var timer = document.querySelector(\".timer\");","    timer.innerHTML = \"0 mins 0 secs\";","    clearInterval(interval);","}","","","// @description toggles open and show class to display cards","var displayCard = function (){","    this.classList.toggle(\"open\");","    this.classList.toggle(\"show\");","    this.classList.toggle(\"disabled\");","};","","","// @description add opened cards to OpenedCards list and check if cards are match or not","function cardOpen() {","    openedCards.push(this);","    var len = openedCards.length;","    if(len === 2){","        moveCounter();","        if(openedCards[0].type === openedCards[1].type){","            matched();","        } else {","            unmatched();","        }","    }","};","","","// @description when cards match","function matched(){","    openedCards[0].classList.add(\"match\", \"disabled\");","    openedCards[1].classList.add(\"match\", \"disabled\");","    openedCards[0].classList.remove(\"show\", \"open\", \"no-event\");","    openedCards[1].classList.remove(\"show\", \"open\", \"no-event\");","    openedCards = [];","}","","","// description when cards don't match","function unmatched(){","    openedCards[0].classList.add(\"unmatched\");","    openedCards[1].classList.add(\"unmatched\");","    disable();","    setTimeout(function(){","        openedCards[0].classList.remove(\"show\", \"open\", \"no-event\",\"unmatched\");","        openedCards[1].classList.remove(\"show\", \"open\", \"no-event\",\"unmatched\");","        enable();","        openedCards = [];","    },1100);","}","","","// @description disable cards temporarily","function disable(){","    Array.prototype.filter.call(cards, function(card){","        card.classList.add('disabled');","    });","}","","","// @description enable cards and disable matched cards","function enable(){","    Array.prototype.filter.call(cards, function(card){","        card.classList.remove('disabled');","        for(var i = 0; i < matchedCard.length; i++){","            matchedCard[i].classList.add(\"disabled\");","        }","    });","}","","","// @description count player's moves","function moveCounter(){","    moves++;","    counter.innerHTML = moves;","    //start timer on first click","    if(moves == 1){","        second = 0;","        minute = 0; ","        hour = 0;","        startTimer();","    }","    // setting rates based on moves","    if (moves > 8 && moves < 12){","        for( i= 0; i < 3; i++){","            if(i > 1){","                stars[i].style.visibility = \"collapse\";","            }","        }","    }","    else if (moves > 13){","        for( i= 0; i < 3; i++){","            if(i > 0){","                stars[i].style.visibility = \"collapse\";","            }","        }","    }","}","","","// @description game timer","var second = 0, minute = 0; hour = 0;","var timer = document.querySelector(\".timer\");","var interval;","function startTimer(){","    interval = setInterval(function(){","        timer.innerHTML = minute+\"mins \"+second+\"secs\";","        second++;","        if(second == 60){","            minute++;","            second=0;","        }","        if(minute == 60){","            hour++;","            minute = 0;","        }","    },1000);","}","","","// @description congratulations when all cards match, show modal and moves, time and rating","function congratulations(){","    if (matchedCard.length == 16){","        clearInterval(interval);","        finalTime = timer.innerHTML;","","        // show congratulations modal","        modal.classList.add(\"show\");","","        // declare star rating variable","        var starRating = document.querySelector(\".stars\").innerHTML;","","        //showing move, rating, time on modal","        document.getElementById(\"finalMove\").innerHTML = moves;","        document.getElementById(\"starRating\").innerHTML = starRating;","        document.getElementById(\"totalTime\").innerHTML = finalTime;","","        //closeicon on modal","        closeModal();","    };","}","","","// @description close icon on modal","function closeModal(){","    closeicon.addEventListener(\"click\", function(e){","        modal.classList.remove(\"show\");","        startGame();","    });","}","","","// @desciption for user to play Again ","function playAgain(){","    modal.classList.remove(\"show\");","    startGame();","}","","","// loop to add event listeners to each card","for (var i = 0; i < cards.length; i++){","    card = cards[i];","    card.addEventListener(\"click\", displayCard);","    card.addEventListener(\"click\", cardOpen);","    card.addEventListener(\"click\",congratulations);","};"]}],[{"start":{"row":2,"column":21},"end":{"row":2,"column":22},"action":"insert","lines":[";"],"id":7}],[{"start":{"row":2,"column":22},"end":{"row":2,"column":23},"action":"insert","lines":[" "],"id":8},{"start":{"row":2,"column":23},"end":{"row":2,"column":24},"action":"insert","lines":[" "]},{"start":{"row":2,"column":24},"end":{"row":2,"column":25},"action":"insert","lines":["/"]},{"start":{"row":2,"column":25},"end":{"row":2,"column":26},"action":"insert","lines":["/"]}],[{"start":{"row":2,"column":26},"end":{"row":2,"column":27},"action":"insert","lines":[" "],"id":9}],[{"start":{"row":2,"column":27},"end":{"row":2,"column":201},"action":"insert","lines":["to spread over the adrian object and get all its properties, then overwrite the existing properties with the ones we're passing. It copies the properties of the adrian object"],"id":10}],[{"start":{"row":2,"column":30},"end":{"row":2,"column":31},"action":"remove","lines":["s"],"id":11},{"start":{"row":2,"column":29},"end":{"row":2,"column":30},"action":"remove","lines":[" "]},{"start":{"row":2,"column":28},"end":{"row":2,"column":29},"action":"remove","lines":["o"]},{"start":{"row":2,"column":27},"end":{"row":2,"column":28},"action":"remove","lines":["t"]}],[{"start":{"row":2,"column":27},"end":{"row":2,"column":28},"action":"insert","lines":["S"],"id":12}],[{"start":{"row":2,"column":48},"end":{"row":2,"column":49},"action":"remove","lines":["n"],"id":13},{"start":{"row":2,"column":47},"end":{"row":2,"column":48},"action":"remove","lines":["a"]},{"start":{"row":2,"column":46},"end":{"row":2,"column":47},"action":"remove","lines":["i"]},{"start":{"row":2,"column":45},"end":{"row":2,"column":46},"action":"remove","lines":["r"]},{"start":{"row":2,"column":44},"end":{"row":2,"column":45},"action":"remove","lines":["d"]},{"start":{"row":2,"column":43},"end":{"row":2,"column":44},"action":"remove","lines":["a"]}],[{"start":{"row":2,"column":43},"end":{"row":2,"column":44},"action":"insert","lines":["c"],"id":14},{"start":{"row":2,"column":44},"end":{"row":2,"column":45},"action":"insert","lines":["a"]},{"start":{"row":2,"column":45},"end":{"row":2,"column":46},"action":"insert","lines":["r"]},{"start":{"row":2,"column":46},"end":{"row":2,"column":47},"action":"insert","lines":["d"]},{"start":{"row":2,"column":47},"end":{"row":2,"column":48},"action":"insert","lines":["s"]}],[{"start":{"row":2,"column":128},"end":{"row":2,"column":150},"action":"remove","lines":["the ones we're passing"],"id":15},{"start":{"row":2,"column":128},"end":{"row":2,"column":129},"action":"insert","lines":["c"]},{"start":{"row":2,"column":129},"end":{"row":2,"column":130},"action":"insert","lines":["a"]},{"start":{"row":2,"column":130},"end":{"row":2,"column":131},"action":"insert","lines":["r"]},{"start":{"row":2,"column":131},"end":{"row":2,"column":132},"action":"insert","lines":["d"]}],[{"start":{"row":2,"column":27},"end":{"row":2,"column":179},"action":"remove","lines":["Spread over the cards object and get all its properties, then overwrite the existing properties with card. It copies the properties of the adrian object"],"id":16},{"start":{"row":2,"column":27},"end":{"row":2,"column":96},"action":"insert","lines":["loop through each card till the full length of cards array is covered"]}],[{"start":{"row":2,"column":27},"end":{"row":2,"column":28},"action":"remove","lines":["l"],"id":17}],[{"start":{"row":2,"column":27},"end":{"row":2,"column":28},"action":"insert","lines":["L"],"id":18}],[{"start":{"row":2,"column":73},"end":{"row":2,"column":74},"action":"insert","lines":[" "],"id":19},{"start":{"row":2,"column":74},"end":{"row":2,"column":75},"action":"insert","lines":["t"]},{"start":{"row":2,"column":75},"end":{"row":2,"column":76},"action":"insert","lines":["h"]},{"start":{"row":2,"column":76},"end":{"row":2,"column":77},"action":"insert","lines":["e"]}],[{"start":{"row":2,"column":100},"end":{"row":2,"column":101},"action":"insert","lines":["."],"id":20}]]},"ace":{"folds":[],"scrolltop":2820,"scrollleft":0,"selection":{"start":{"row":231,"column":10},"end":{"row":231,"column":10},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":187,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1563264199557,"hash":"ca2b5ee030e8dff90c0cfbb3747bf70dedbba33f"}