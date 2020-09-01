// challenge 1: Your age in days

function ageInDays(){
    let birthYear = prompt('Which year were you born..?');
    let age_days = (2020 - birthYear) * 365;

    let h1 = document.createElement('h1');
    let text = document.createTextNode('You are '+age_days+' days old.');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(text);
    document.getElementById('flex-box-result').appendChild(h1);
}

function resetText(){
    document.getElementById('ageInDays').remove();
}

// Challenge 2: Cat Generator

function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif";
    div.appendChild(image);
}

// Challenge 3: Rock, Paper, Scissors

function playGame() {
    document.getElementById("start-button").remove();

    let d = document.getElementById('flex-box-rps-div');

    let paperImg = document.createElement('div');
    let rockImg = document.createElement('div');
    let scissorsImg = document.createElement('div');
    // let test = document.createElement('img');

    // proper way to add attributes to elements
    // test.id = 'test';
    // test.src = 'test/test';
    // test.height = 150;
    
    // can avoid this next time
    paperImg.innerHTML = "<img id='paper' src='https://pngimage.net/wp-content/uploads/2018/06/paper-cartoon-png-6.png' height=150 width=150 onclick='rpsGame(this)'>";
    rockImg.innerHTML = "<img id='rock' src='https://cdn0.iconfinder.com/data/icons/rock-paper-scissors-emoji/792/rock-paper-scissors-emoji-cartoon-016-512.png' height=150 width=150 onclick='rpsGame(this)'>";
    scissorsImg.innerHTML = "<img id='scissors' src='https://icon-library.com/images/rock-paper-scissors-icon/rock-paper-scissors-icon-15.jpg' height=150 width=150 onclick='rpsGame(this)'>";
    
    d.appendChild(paperImg);
    d.appendChild(rockImg);
    d.appendChild(scissorsImg);
}

function rpsGame(yourChoice){

    var humanChoice, botChoice, playerScore, botScore;

    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randInt());

    results = decideWinner(humanChoice, botChoice);

    message = finalMessage(results, playerScore, botScore);

    rpsFrontEnd(humanChoice, botChoice, message);
}

function randInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return ['rock','paper','scissors'][number];
}

function decideWinner(yourChoice, botChoice) {
    var rpsdatabase = {
        "rock": {"rock": 0.5, "paper": 0, "scissors": 1},
        "paper": { "rock": 1, "paper": 0.5, "scissors": 0 },
        "scissors": { "rock": 0, "paper": 1, "scissors": 0.5 },
    }

    var yourScore = rpsdatabase[yourChoice][botChoice];
    var botScore = rpsdatabase[botChoice][yourChoice];

    return [yourScore, botScore];
}

function finalMessage([yourScore, botScore], playerScr, botScr){
    if (yourScore === 0) {
        botScr = botScr + 1;
        return {"message":"YOU LOSE", "color":"red", "playerScore":playerScr, "botScore":botScr};
    }
    else if (yourScore === 0.5) {
        return { "message": "YOU DRAW", "color": "yellow", "playerScore": playerScr, "botScore": botScr };
    } 
    else {
        playerScr = playerScr + 1;
        return { "message": "YOU WIN", "color": "green", "playerScore": playerScr, "botScore": botScr };
    }
}

function rpsFrontEnd (yourChoiceImg, botChoiceImg, finalMessage){
    var rpsImgDatabase = {
        "rock": document.getElementById("rock").src,
        "paper": document.getElementById("paper").src,
        "scissors": document.getElementById("scissors").src,
    }

    // once clicked, remove all images
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();

    // create div to place selected Images in them
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + rpsImgDatabase[yourChoiceImg] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(32, 69, 236, 0.931);'>";
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage["color"]+"; font-size=60px; padding:30px; '>"+finalMessage["message"]+"</h1>"
    botDiv.innerHTML = "<img src='" + rpsImgDatabase[botChoiceImg] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(241, 32, 32, 0.924)'>";
    

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

function rpsReset(){
    location.reload();
}

// Challenge 4: Change the color of all buttons

let all_buttons = document.getElementsByTagName('button');

let copyAllButtons = []

for (let index = 0; index < all_buttons.length; index++) {
    copyAllButtons.push(all_buttons[index].classList[1]);
}

// check if working
//console.log(copyAllButtons); // working

function buttonColorChange(buttonThingy) {
    if (buttonThingy.value === 'red') {
        buttonsRed();
    } 
    else if (buttonThingy.value === 'green') {
        buttonsGreen();
    } 
    else if (buttonThingy.value === 'reset'){
        buttonColorReset();
    } 
    else if (buttonThingy.value === 'random') {
        randomColors();
    }
}

function buttonsRed() {
    for (let index = 0; index < all_buttons.length; index++) {
        all_buttons[index].classList.remove(all_buttons[index].classList[1]);
        all_buttons[index].classList.add("btn-danger");
        
    }
}

function buttonsGreen() {
    for (let index = 0; index < all_buttons.length; index++) {
        all_buttons[index].classList.remove(all_buttons[index].classList[1]);
        all_buttons[index].classList.add("btn-success");
        
    }
}

function buttonColorReset() {
    for (let index = 0; index < all_buttons.length; index++) {
        all_buttons[index].classList.remove(all_buttons[index].classList[1]);
        all_buttons[index].classList.add(copyAllButtons[index]);
        
    }
}

function randomColors() {

    let colors = ['btn-primary', 'btn-secondary', 'btn-success', 'btn-danger','btn-warning',
        'btn-info', 'btn-light', 'btn-dark','btn-link'];

    for (let index = 0; index < all_buttons.length; index++) {
        let randomClr = Math.floor(Math.random() * colors.length);
        all_buttons[index].classList.remove(all_buttons[index].classList[1]);
        all_buttons[index].classList.add(colors[randomClr]);
    }
}