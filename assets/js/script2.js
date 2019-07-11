// cards!
var cards = [
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
    
    var gameGrid = cards.concat(cards).sort(function () {
        return 0.5 - Math.random();
    });
    // prelaoding images
    /*$(cards).each(function() {
    var image = $('<images/>').attr('src', this);
    });*/
    
    // An empty array where values of open cards are pushed to compare.
    var OpenCards= [];
    //An empty array of cards where shuffled cards are stored.
    var shuffleCards=[];
    var tilesFlipped=0;
    var numOfmoves=0;
    // Function to shuffle an array of cards.
    function shuffle(array) {
    var currentIndex = array.length, tempValue, randomIndex;
    while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    tempValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = tempValue;
    }
    return array;
    }
    
    // shuffle the cards array
    shuffleCards = shuffle(cards);
    
    // Timer code start
    var clearTime; 
    var seconds = 0, minutes = 0, hours = 0;
    var secs, mins, gethours ; 
    
    //Timer start function  
    function startWatch( ) {
    /* check if seconds is equal to 60 and add a +1 to minutes, and set seconds to 0 */ 
    if ( seconds === 60 ) { seconds = 0; minutes = minutes + 1; }
    /* you use the javascript tenary operator to format how the minutes should look and add 0 to minutes if less than 10 */ 
    mins = ( minutes < 10 ) ? ( '0' + minutes + ': ' ) : ( minutes + ': ' );
    /* check if minutes is equal to 60 and add a +1 to hours set minutes to 0 */ 
    if ( minutes === 60 ) { minutes = 0; hours = hours + 1; }
    /* you use the javascript tenary operator to format how the hours should look and add 0 to hours if less than 10 */
    gethours = ( hours < 10 ) ? ( '0' + hours + ': ' ) : ( hours + ': ' );
    secs = ( seconds < 10 ) ? ( '0' + seconds ) : ( seconds ); 
    // display the stopwatch 
    var time =gethours + mins + secs;
    $('.container').find('.timer').html(time);
    /* call the seconds counter after displaying the stop watch and increment seconds by +1 to keep it counting */
    seconds++; 
    /* call the setTimeout( ) to keep the timer alive ! */ 
    clearTime = setTimeout( "startWatch( )", 1000 ); } 
    // Function used to start the timer
    function startTime( ) { 
    /* check if seconds, minutes, and hours are equal to zero and start the timer*/ 
    if ( seconds === 0 && minutes === 0 && hours === 0 ) {  
    startWatch( );
    } }

// function to stop the time 
    function stopTime( ) { 
    /* check if seconds, minutes and hours are not equal to 0 */ 
    if ( seconds !== 0 || minutes !== 0 || hours !== 0 ) { 
    /* display the full time before reseting the stop watch */ 
    var time = gethours + mins + secs;     
    $('.container').find('.timer').html(time);
    /*Add the time,moves and star rating to the congratulation modal only after game is complete*/
    var StarsModalElem=$('.modal-element').eq(2);
    var MovesModalElem=$('.modal-element').eq(1);
    var TimerModalElem=$('.modal-element').eq(0);
    $('.stars').clone().appendTo(StarsModalElem);
    $('.moves').clone().appendTo(MovesModalElem);
    $('.timer').clone().appendTo(TimerModalElem);
    /* clear the stop watch using the setTimeout( ) return value 'clearTime' as ID */ 
    clearTimeout( clearTime ); }}  
    //Timer code end

    // HTML elements creation for deck and cards
    $('.container').append('<ul class="deck"></ul>');
    for (var i = 0;i < cards.length;i++) {
    $('.deck').prepend('<li class="card"></li>'); 
    }
    $('.card').prepend('<i></i>');

    for (var i = 0;i < cards.length;i++) {
    $('.card').eq(i).find('i').addClass(shuffleCards[i]);    
    }

    // Click event to restart the game
    $('.restart').click(function(){
    location.reload();
    });

    //Event listener for flipping the cards when clicked on 
    $('.deck').on('click','.card',function (event) {
    /*Start the timer when a card is clicked*/
    startTime();
    /*Essential condition for flipping a card i.e. a card may be flipped only if class='card' is present which is true always and only one other card is open.*/
    if ($(this).attr('class')==='card' && OpenCards.length<2){
    /*Class name of a open card is pushed to opencards array when only one card is opened.*/
    if (OpenCards.length===0) {
    $(this).toggleClass('open');
    OpenCards.push($(this).children().attr('class'));
    }
    /*If a card is open and next card is clicked */
    else if (OpenCards.length===1) {
    $(this).toggleClass('open');
    OpenCards.push($(this).children().attr('class'));
    /*Comparison of two open cards-If matched */
    if (OpenCards[0]=== OpenCards[1]) {
    $('.card').filter($('.open')).toggleClass('open match');
    //Increment the number of tiles flipped and number of moves if a pair is made.
    tilesFlipped=tilesFlipped + 2;
    numOfmoves=numOfmoves+1;
    $('.moves').text(numOfmoves);
    //Empty the array for comparison of next two cards.
    OpenCards= [];
    }
    else {
    // To avoid flipping of more than two cards at a time and used to flip back cards that are not matching
    function flipBack () {
    $('.card').filter($('.open')).toggleClass('open');
    OpenCards = [];
    numOfmoves=numOfmoves+1;
    $('.moves').text(numOfmoves);
    }
    setTimeout(flipBack, 600);
    }
    }
    // Star rating
    if (numOfmoves >16 && numOfmoves < 25) {
    var star3 =$('.stars').find('li').eq(2);
    star3.css('color','black');
    }
    if (numOfmoves > 25) {
    var star2 =$('.stars').find('li').eq(1);
    star2.css('color','black');
    }
    // After all tiles are matched reload the game
    if (tilesFlipped === cards.length) {
    stopTime();
    $('.modal').css('display','block');
    }     
    }
    });