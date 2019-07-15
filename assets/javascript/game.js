/*
pseudocode:
math.random a score number
math. random a number for each crystl div
borrow code for wins and losses code from psychic game
make score variable and have it ++ or -- depending on other conditions

*/

var gameScore = Math.floor(Math.random() * 100) + 25 //sets the score the player must match to random

var crystalOneValue = Math.floor(Math.random() * 25) + 1 //sets crystal 1 value to random

var crystalTwoValue = Math.floor(Math.random() * 25) + 1 //sets crystal 2 value to random

var crystalThreeValue = Math.floor(Math.random() * 25) + 1 //sets crystal 3 value to random

var crystalFourValue = Math.floor(Math.random() * 25) + 1 //sets crystal 4 value to random

var usersScore = 0 //global value of START user score 

var wins = 0 //global value of user wins 

var losses = 0 //global value of user losses 

var reset = function () { //global function for resetting
    gameScore = Math.floor(Math.random() * 100) + 25

    crystalOneValue = Math.floor(Math.random() * 25) + 1

    crystalTwoValue = Math.floor(Math.random() * 25) + 1

    crystalThreeValue = Math.floor(Math.random() * 25) + 1

    crystalFourValue = Math.floor(Math.random() * 25) + 1

    userScore = 0
}

$("#goalScore").html(gameScore)//adds gameScore to the html div
$("#scoreBox").html(usersScore) // adds user score to the html div
$("#crystal1").on("click", function () { usersScore = usersScore + crystalOneValue; $("#scoreBox").html(usersScore) })
$("#crystal2").on("click", function () { usersScore = usersScore + crystalTwoValue; $("#scoreBox").html(usersScore) })
$("#crystal3").on("click", function () { usersScore = usersScore + crystalThreeValue; $("#scoreBox").html(usersScore) })
$("#crystal4").on("click", function () { usersScore = usersScore + crystalFourValue; $("#scoreBox").html(usersScore) })

if (usersScore === gameScore) {
    wins++
    usersScore = 0
    $("#winsText").html("Wins: " + wins)
    $("#scoreBox").html(usersScore)

    if (usersScore > gameScore) {
        losses++
        $("#loseText").html("Losses: " + losses)

        $("#scoreBox").html(usersScore)

    }

}