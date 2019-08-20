/*jslint browser */
/*global $, Audio */
let cardList1 = [
    {
        name: "jupiter",
        img: "assets/images/jupiter.png"
    },
    {
        name: "luna",
        img: "assets/images/luna.jpg"
    },
    {
        name: "mars",
        img: "assets/images/mars.jpg"
    },
    {
        name: "mercury",
        img: "assets/images/mercury.jpg"
    },
    {
        name: "moon",
        img: "assets/images/moon.jpg"
    },
    {
        name: "venus",
        img: "assets/images/venus.jpg"
    },
    {
        name: "jupiter",
        img: "assets/images/jupiter.png"
    },
    {
        name: "luna",
        img: "assets/images/luna.jpg"
    },
    {
        name: "mars",
        img: "assets/images/mars.jpg"
    },
    {
        name: "mercury",
        img: "assets/images/mercury.jpg"
    },
    {
        name: "moon",
        img: "assets/images/moon.jpg"
    },
    {
        name: "venus",
        img: "assets/images/venus.jpg"
    }
];

let cardList2 = [
    {
        name: "jupiter",
        img: "assets/images/jupiter.png"
    },
    {
        name: "luna",
        img: "assets/images/luna.jpg"
    },
    {
        name: "mars",
        img: "assets/images/mars.jpg"
    },
    {
        name: "mercury",
        img: "assets/images/mercury.jpg"
    },
    {
        name: "moon",
        img: "assets/images/moon.jpg"
    },
    {
        name: "neptune",
        img: "assets/images/neptune.jpg"
    },
    {
        name: "uranus",
        img: "assets/images/uranus.jpg"
    },
    {
        name: "venus",
        img: "assets/images/venus.jpg"
    },
    {
        name: "jupiter",
        img: "assets/images/jupiter.png"
    },
    {
        name: "luna",
        img: "assets/images/luna.jpg"
    },
    {
        name: "mars",
        img: "assets/images/mars.jpg"
    },
    {
        name: "mercury",
        img: "assets/images/mercury.jpg"
    },
    {
        name: "moon",
        img: "assets/images/moon.jpg"
    },
    {
        name: "neptune",
        img: "assets/images/neptune.jpg"
    },
    {
        name: "uranus",
        img: "assets/images/uranus.jpg"
    },
    {
        name: "venus",
        img: "assets/images/venus.jpg"
    }
];

let cardList3 = [
    {
        name: "jupiter",
        img: "assets/images/jupiter.png"
    },
    {
        name: "luna",
        img: "assets/images/luna.jpg"
    },
    {
        name: "mars",
        img: "assets/images/mars.jpg"
    },
    {
        name: "mercury",
        img: "assets/images/mercury.jpg"
    },
    {
        name: "moon",
        img: "assets/images/moon.jpg"
    },
    {
        name: "chibiusa",
        img: "assets/images/chibiusa.jpg"
    },
    {
        name: "serenity",
        img: "assets/images/serenity.jpg"
    },
    {
        name: "venus",
        img: "assets/images/venus.jpg"
    },
    {
        name: "artemis",
        img: "assets/images/artemis.png"
    },
    {
        name: "tuxedomask",
        img: "assets/images/tuxedomask.jpg"
    },
    {
        name: "jupiter",
        img: "assets/images/jupiter.png"
    },
    {
        name: "luna",
        img: "assets/images/luna.jpg"
    },
    {
        name: "mars",
        img: "assets/images/mars.jpg"
    },
    {
        name: "mercury",
        img: "assets/images/mercury.jpg"
    },
    {
        name: "moon",
        img: "assets/images/moon.jpg"
    },
    {
        name: "chibiusa",
        img: "assets/images/chibiusa.jpg"
    },
    {
        name: "serenity",
        img: "assets/images/serenity.jpg"
    },
    {
        name: "venus",
        img: "assets/images/venus.jpg"
    },
    {
        name: "artemis",
        img: "assets/images/artemis.png"
    },
    {
        name: "tuxedomask",
        img: "assets/images/tuxedomask.jpg"
    }
];

//When entering the website...
$(document).ready(function () {
    function startLevel(level) {
        window.location.hash = level;
        window.location.reload(true);
    }

    $("#button1").click(function (e) {
        e.preventDefault();
        startLevel("#1");
    });

    $("#button2").click(function (e) {
        e.preventDefault();
        startLevel("#2");
    });

    $("#button3").click(function (e) {
        e.preventDefault();
        startLevel("#3");
    });

    let originalCounter;
    let cardList;
    if (window.location.hash === "#2") {
        cardList = cardList2;
        originalCounter = 55;
    } else if (window.location.hash === "#3") {
        cardList = cardList3;
        originalCounter = 60;
        $("body").addClass("wide-view");
    } else {
        cardList = cardList1;
        originalCounter = 50;
    }

    cardList.sort(() => 0.5 - Math.random());


    let firstTry = "";
    let secondTry = "";
    let counter = originalCounter;
    let moveCounter = 0;


    let resetAll = function () {
        firstTry = "";
        secondTry = "";
        counter = originalCounter;
        moveCounter = 0;
        $("#moves").html(moveCounter);
    };

    $("#congrats-btn").click(function () {
        if (window.location.hash === "" || window.location.hash === "#1") {
            startLevel("#2");
        } else if (window.location.hash === "#2") {
            startLevel("#3");
        }

        resetAll();
    });

    $("#reset-btn").click(resetAll);

    const game = document.getElementById("game");

    const tiles = document.createElement("section");
    tiles.setAttribute("class", "tiles");

    game.appendChild(tiles);

    function startGame() {
        let interval = window.setInterval(function () {
            counter -= 1;
            if (counter <= -1) {
                clearInterval(interval);

                $("#timesUp-modal").modal("show");

                $("#moveCounter").text(moveCounter);

            } else {
                $("#time").text(counter);
            }
        }, 1000);
    }

    document.body.onload = startGame();

    cardList.forEach(function (item, index) {
        const card = document.createElement("div");
        card.setAttribute("id", "card-" + index);

        card.classList.add("card");

        card.dataset.name = item.name;

        const front = document.createElement("div");
        front.classList.add("front");

        const back = document.createElement("div");
        back.classList.add("back");

        card.style.backgroundImage = `url(${item.img})`;

        tiles.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);

        function getImg(name) {
            return "assets/images/" + name;
        }

        $(card).on("click", function (event) {

            let clicked = event.target;
            let count = $(".selected").length;

            if (count < 2) {
                count += 1;
                if (count === 1) {
                    firstTry = clicked.parentNode.dataset.name;

                } else if (count === 2) {
                    secondTry = clicked.parentNode.dataset.name;
                }
                clicked.parentNode.classList.add("selected");
            }
            if (count === 2) {
                moveCounter += 1;
                window.setTimeout(function () {
                    if (firstTry !== "" && secondTry !== "") {
                        if (firstTry === secondTry) {
                            $(".selected").off("click");
                            // ignore is a keyword reserverd by jslint
                            // to ignore a variable.
                            $(".selected").each(function (ignore, item) {
                                $(item).addClass("match");
                            });
                        }
                    }

                    let correctCount = $(".match").length;
                    if (correctCount === cardList.length) {

                        if (window.location.hash === "" || window.location.hash === "#1") {
                            $("#img").attr("src", getImg("sailor-smile.png"));
                        } else if (window.location.hash === "#2") {
                            $("#img").attr("src", getImg("giggle.gif"));
                        } else if (window.location.hash === "#3") {
                            $("#img").attr("src", getImg("transformation.gif"));
                            $("#congrats-btn").hide();
                        }

                        $("#finalMove").html(moveCounter);
                        $("#totalTime").html(originalCounter - counter);

                        $("#congrats-modal").modal("show");
                        $("#timesUp-modal").remove();
                    }

                    count = 0;
                    firstTry = "";
                    secondTry = "";
                    let selected = document.querySelectorAll(".selected");
                    selected.forEach(function (card) {
                        card.classList.remove("selected");
                    });
                }, 1000);
            }

            $("#moves").html(moveCounter);
        });
    });

    $("#myModal").modal("show");
    $("#startUp").click(resetAll);

    let backgroundMusic = new Audio();
    backgroundMusic.src = "assets/audio/sailor-moon-tune.mp3";
    backgroundMusic.volume = 0.3;
    backgroundMusic.loop = true;


    $(".startAgain").click(function () {
        window.location.reload(true);
    });

    let isMusicMuted = window.localStorage.getItem("mute_music");

    if (isMusicMuted === undefined) {
        window.localStorage.setItem("mute_music", "false");
        $("#toggleMute").html("Disable Sound");
        backgroundMusic.play();
    } else if (isMusicMuted === "false") {
        backgroundMusic.play();
        $("#toggleMute").html("Disable Sound");
    } else if (isMusicMuted === "true") {
        $("#toggleMute").html("Enable Sound");
    } else {
        window.localStorage.setItem("mute_music", "false");
        $("#toggleMute").html("Disable Sound");
        backgroundMusic.play();
    }

    $("#toggleMute").css("font-family", "Oswald,sans-serif");

    //ignore is a keyword reserverd by jslint to ignore a variable.
    $("#timesUp-modal").on("hidden.bs.modal", function (ignore) {
        window.location.reload(true);
    });

    $("#toggleMute").click(function () {
        let mutedMusic = window.localStorage.getItem("mute_music");

        if (mutedMusic === "true") {
            window.localStorage.setItem("mute_music", "false");
            backgroundMusic.play();
            $("#toggleMute").html("Disable Sound");

        } else if (mutedMusic === "false") {
            window.localStorage.setItem("mute_music", "true");
            backgroundMusic.pause();
            backgroundMusic.currentTime = 0;
            $("#toggleMute").html("Enable Sound");
        }
    });
});