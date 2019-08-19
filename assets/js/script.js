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

cardList.sort(() => 0.5 - Math.random());


let firstTry = '';
let secondTry = '';
let originalCounter = 55;
let counter = originalCounter;
let moveCounter = 0;


var resetAll = function() {
    firstTry = '';
    secondTry = '';
    counter = 55;
    moveCounter = 0;
    $("#moves").html("" + moveCounter);
};

document.getElementById("reset-btn").addEventListener("click", resetAll);

const game = document.getElementById('game');

const tiles = document.createElement('section');
tiles.setAttribute('class', 'tiles');

game.appendChild(tiles);


document.body.onload = startGame();

cardList.forEach((item, index, arr) => {
    const card = document.createElement('div');
    card.setAttribute('id', "card-" + index);

    card.classList.add('card');

    card.dataset.name = item.name;

    const front = document.createElement('div');
    front.classList.add('front');

    const back = document.createElement('div');
    back.classList.add('back');

    card.style.backgroundImage = `url(${item.img})`;

    tiles.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
    card.addEventListener('click', function(event) {

        let clicked = event.target;
        let count = $(".selected").length;

        if (count < 2) {
            count++;
            if (count === 1) {
                firstTry = clicked.parentNode.dataset.name;

            }
            else if (count === 2) {
                secondTry = clicked.parentNode.dataset.name;

            }
            clicked.parentNode.classList.add('selected');
        }
        if (count == 2) {
            moveCounter++;
            let waiter = setTimeout(function() {
                if (firstTry !== '' && secondTry !== '') {
                    if (firstTry === secondTry) {

                        let items = $(".selected");
                        for (let i = 0; i < items.length; i++) {
                            items[i].classList.add('match');
                        }
                    }

                }

                let correctCount = $(".match").length;
                if (correctCount === cardList.length) {
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

        /* function flipLock () {
            if (firstTry === secondTry) {
            $('.card').filter($('.match'));
            cardList = [];
            moveCounter=moveCounter+1;
            }        
        } */

        $("#moves").html("" + moveCounter);
    });
});


function startGame() {

    var interval = setInterval(function() {
        counter--;
        if (counter <= -1) {
            clearInterval(interval);

            $('#timesUp-modal').modal('show');

            $("#moveCounter").text(moveCounter);

        }
        else {
            $('#time').text(counter);
        }

    }, 1000);

}

$(window).ready(function() {
    $('#myModal').modal('show');

});

document.getElementById("startUp").addEventListener("click", resetAll);

backgroundMusic = new Audio();
backgroundMusic.src = "assets/audio/sailor-moon-tune.mp3";
backgroundMusic.volume = 0.3;
backgroundMusic.loop = true;

$(document).ready(function() {
    $(".startAgain").click(function() {
        location.reload(true);
    });

    let isMusicMuted = localStorage.getItem("mute_music");

    if (isMusicMuted == undefined) {
        localStorage.setItem("mute_music", 'false');
        $('#toggleMute').text('Disable Sound');
        backgroundMusic.play();
    }
    else if (isMusicMuted === 'false') {
        backgroundMusic.play();
        $('#toggleMute').text('Disable Sound');
    }
    else if (isMusicMuted === 'true') {
        $('#toggleMute').text('Enable Sound');

    }
    else {
        localStorage.setItem("mute_music", 'false');
        $('#toggleMute').text('Disable Sound');
        backgroundMusic.play();
    }
    document.getElementById("tune-btn").style.fontFamily = "Oswald,sans-serif";
});

$('#tune-btn').click(function() {

    let mutedMusic = localStorage.getItem("mute_music");

    if (mutedMusic === 'true') {
        localStorage.setItem("mute_music", 'false');
        backgroundMusic.play();
        $('#toggleMute').text('Disable Sound');

    }
    else if (mutedMusic === 'false') {
        localStorage.setItem("mute_music", 'true');
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;
        $('#toggleMute').text('Enable Sound');
    }
});