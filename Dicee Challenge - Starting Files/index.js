var randomNumber1 = Math.floor(Math.random()*6)+1
var randomNumber2 = Math.floor(Math.random()*6)+1

console.log(randomNumber1)

document.querySelector('.img1').setAttribute('src', "images/dice" + randomNumber1 +".png");

document.querySelector('.img2').setAttribute('src', `images/dice${randomNumber2}.png`);


var resultText = document.querySelector('h1');


if (randomNumber1 === randomNumber2) {
    resultText.textContent = "Draw"
}
else if (randomNumber2 > randomNumber1) {
    resultText.textContent = "Player 2 wins"
}
else {
    resultText.textContent = "Player 1 wins"
}