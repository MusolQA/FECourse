
$('body').one("keypress", nextSequence)


var gamePattern = []
var userClickedPattern = []
var buttonColours = ["red", "blue", "green", "yellow"]
var level = 0;


function nextSequence() {
    
    $("h1").text("Level " +level)
    randomNumber = Math.round(Math.random()*3)
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour)
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour)
    level++;
    $("h1").text("Level " +level)
}


$(".btn").on("click", function(e) {
   
    userChosenColour = e.target.id
    userClickedPattern.push(userChosenColour)
    playSound(userChosenColour)
    animatePress(userChosenColour)
})


function playSound(name) {
    var audio = new Audio('sounds/'+ name + '.mp3');
    audio.play();
}

function animatePress(currentColour) {
    $("#"+currentColour).addClass("pressed")

    setTimeout(() => {
        $("#"+currentColour).removeClass("pressed")
    }, 100)
}

