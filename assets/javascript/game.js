/*
pseudocode:
math.random a score number
math. random a number for each crystl div
borrow code for wins and losses code from psychic game
make score variable and have it ++ or -- depending on other conditions

*/

var gameScore = Math.floor(Math.random() * 100) + 25

var crystalOneValue = Math.floor(Math.random() * 25) + 1

var crystalTwoValue = Math.floor(Math.random() * 25) + 1

var crystalThreeValue = Math.floor(Math.random() * 25) + 1

var crystalFourValue = Math.floor(Math.random() * 25) + 1

var usersScore = 0

var wins = 0

var losses = 0

console.log(gameScore)
console.log(crystalOneValue)
console.log(crystalTwoValue)
console.log(crystalThreeValue)
console.log(crystalFourValue)

$("#goalScore").html(gameScore)
$("#scoreBox").html(usersScore)
$("#crystal1").on("click", function () { usersScore = usersScore + crystalOneValue; $("#scoreBox").html(usersScore) })
$("#crystal2").on("click", function () { usersScore = usersScore + crystalTwoValue; $("#scoreBox").html(usersScore) })
$("#crystal3").on("click", function () { usersScore = usersScore + crystalThreeValue; $("#scoreBox").html(usersScore) })
$("#crystal4").on("click", function () { usersScore = usersScore + crystalFourValue; $("#scoreBox").html(usersScore) })
if (usersScore > gameScore) {
    losses++
    usersScore = 0
    $("#loseText").html("Losses: " + losses)
    $("#scoreBox").html(usersScore)

}
if (usersScore = gameScore) {
    wins++
    usersScore = 0
    $("#winsText").html("Wins: " + wins)
    $("#scoreBox").html(usersScore)
}