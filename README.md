# Sailor Moon Memory Card Game

To view and play the game, please click on the following link: https://eucaa.github.io/Sailor-Moon-Memory-Card-Game/

This game has been created for leisurely entertainment for multiple ages. The genre is from the international well-know and renouded Japanese manga- and animation sereis Sailor Moon.
The game lets people find a match of two cards of the same image. Two turned cards count as one move. It's best to make as less moves as possible. 
If all matches are found before the countdown timer expires, they will be able to enjoy a unique image of small animation of the main charater Sailor Moon.
Clearance of a higher stage will result into a nicer animated reward.


## UX 
Since the game is aiming for the enjoyment of multiple ages, the page has been created to keep it's appearance as simple and clean as possible.
The game will allow fans of the genre or the series to enjoy "looking" for their favorite charater and let other people get introduced with the concept of Japanese animations and these popular icons.
A background animation has been added to make the game look more interactive and appealing. But will not take your interest of from finishing the game.
On page load a modal will activate with instructions on how to play the game. To start the actual game the button on the bottom right of this modal can be clicked.
The game counts three stages of difficulties. The completion of the individual stages of the game will show the player an unique animation of the the main character of the series.
All different popups include a "Try again" button to redo or retry the game. If you complete the sage there will be another button to try the next stage. At last there's a close (X) option which will not start a new game but just let you stay on the page.
If not all tiles are turned correctly within the countdown of the timer, a separate popup will be shown and will allow you to start a new game.
All popups available in the game include an overview of how many moves were made with the amount of seconds it took.
All popups of the three stages include an unique animation. The higher stages will include a better looking animation to make clearing it more exciting.
New images are added into the game at the higher stages to let the user get introduced to new characters.  
A "mute sound" option was added to the top left of the screen to make it possible to mute the background music. To unmute the sound simply click the button again.
If you leave the site and come back later it'll remember if you muted the sound or not and will use that setting again.

## General User Stories

* As a type of user, I would like to be able to enjoy a simple memory card game with a visually appealing lay-out.
* As a type of user, I would like to be able to find small rewards when completing a stage level.
* As a type of user, I would like to play a game that doens take too long to finsish but does include some kind of a challenge.

## Real Life User Stories

* User 1: I have some time on my hands and would like to play a small game.
* User 2: I'm interested (or want to be interested) in playing game from one of my all-time favorite Japanese anime/manga series.
* User 3: When I play a game, I would like to have a small stimulation (a "reward") to start and complete other levels.

## Features
How-to-Play function - Showing a popup with instructions on how to play the game, what NOT to do to prevent unnecessary move-loss and what reward can be expected with completion. Pressing "start game" will (re)start the game.

Time-is-up function - Shows the user how many moves have been made within the time limit, including a "try-again" to reload the game and start again.

Success function - This popup will only show if all tiles have been matched within the time limit. Each stage will have a different image. The last stage will include a nice little gif with a special animation.

Tile block - Prevents from clicking on more than two cards at once.

Stage leves - The game includes different levels (stages) that will include more tiles with every stage (level).

Mute sound - This button mutes the sound which can be unmuted aswell. The setting will be saved and loaded the next time you try this game again.

## Existing Features
Side stress clicking is blocked. If user click aside from the cards instead of on it, the game will not stress will not respond. 

While it is not possible to stress the game out when clicking aside from the tiles, there is still some difficulties when clicking too many times on a tile itself. 
A note for this has been given in the shape of a penalty in the How-to-Play feature.

A "mute sound" option has been provided to mute the sound of the tune at the start of the game.

## Future features
* Adding different backgrounds for every stage level and including other background-overlay animations.
* Adding more stage levels.
* Improving the functionality of the tiles itself when monkey testing.
* Adding a limited amount moves to be made per game, for every stage.

### CSS
CSS3 has been used for styling the game.

### JavaScript
JavaScript has been used to implement the functionalities of the tile creation, shuffling the tiles and showing the correct popups when the count-down timer has ended.

### JQuery
JQuery has been used to show my understanding of this library and to simplify the DOM tree traversal and manipulation.

### Bootstrap
The project uses Bootstrap to allow for extra responsiveness of the html5- and JavaScript files.

### Google Fonts
The project uses Google Fonts to apply fonts "Great Vibes" and "Oswald" to the webpage.

### Testing
1. The HTML and CSS coding was tested by using the W3C Mark Validator Service by direct input. 
2. To test the responsiveness of the website in phones, tablets, and desktops screens, I have used the Chrome Developer Tools, verifying how the site reacts in different screen sizes.
3. The JavaScript files were tested using https://jslint.com/ by direct input of the files on the validator, allowing the global variables `$` of `jQuery` and `Audio`.
4. The game has been tested by some of my friends with the question if the game was clear, easy to use and understandable.

### Bugs
The following issues were found when perfoming tests:
1. CSS was clean and showed no problems. In HTML the stage buttons were taken out of the achor <a> tag and were made source references. The modal images, for clearing the stages, are loaded within the 
   script.js file. The image tag needed a src attribute to get through the validtor so it was given the hash as source.
2. Had some issues with the re-sizing of the tiles on smaller devices. Since these kind of games are not made for small mobile devices, I kept iPad size in mind as the smallest easy accesible play-size.
3. The syntax order of the script.js file was re-adjusted in accordance to the jslint validator. If a match was made the matched cards were still able to get clicked. This has been resolved by turning off the connected CSS animation class.

### Deployment
The project was developed using the AWS IDE. New features or changes made to the code, were added and committed to the local repository.
The local commits were later pushed to my GitHub repository. The project was deployed using GitHub.

Step 1: Go to the settings tab of the repo, scrolled down to GitHub Pages

Step 2: Under GitHub Pages -> Source is a scrolldown box titled None. Click it and you can select a source.

Step 3: Click master branch

Step 4: You will  be automatically taken to the top of the page where in a light blue bar will be stated "Github Pages source saved".

Step 5: You then scroll down to GitHub Pages where will be stated "Your site is ready to be published at "https://eucaa.github.io/Sailor-Moon-Memory-Card-Game/"

Step 6: Click on the url and you will be auto-referred to the published webpage.

Step 7: When returning to the github repository settings, scroll down to GitHub Pages and you will see a light green block stating "Your site is published at https://..."

### The repository can be found on:
https://github.com/Eucaa/Sailor-Moon-Memory-Card-Game

The site has been deployed using GitHub Pages and is available to visit here:
https://eucaa.github.io/Sailor-Moon-Memory-Card-Game/

### Credits
I would to credit the following sources for their inspiration: <br> 
Stack Overflow community <br>
Marina Ferreira <br>
Tania Rascia <br>
Matteo Sisti Sette <br>
CodePen community <br>

### Media
Background image was taken from [getwallpapers](https://www.getwallpapers.com/). <br>
Tile images were taken from [wikipedia](https://en.wikipedia.org/wiki/Main_Page) van [wiki Fandom](https://sailormoon.fandom.com/wiki/Sailor_Moon_Wiki). <br>
Overlayer and modal image Stage One were taken from [giphy](https://giphy.com/). <br>
Stage Two modal gif was taken from [Tumblr](https://www.tumblr.com/search/sailor%20moon%20transparent%20gif). <br>
Stage Three modal gif was taken from [picsart](https://picsart.com/i/gif-anime-kawaii-cute-chibi-sailormoon-transformation-186507977002202).

### Acknowledgement
I especially would like to thank my mentor Anthony Ngene, Arjan Speiard and the tutors of Code Institute for their support throughout this project.