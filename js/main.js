const startButton = document.getElementById("start_game")
let selector = document.getElementById("difficulty-selector")

startButton.addEventListener("click",function() {
    const difficulty = selector.value
    console.log(difficulty)
})