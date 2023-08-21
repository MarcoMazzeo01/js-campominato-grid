const startButton = document.getElementById("start_game")
let selector = document.getElementById("difficulty-selector")

let grid = document.getElementById("grid")
<<<<<<< HEAD
let rootRules = document.querySelector(":root")

startButton.addEventListener("click",function() {
    grid.innerHTML = ""
    let difficulty = selector.value
    rootRules.style.setProperty("--grid-divisor",selector.value)
    generateGrid(difficulty)
=======

startButton.addEventListener("click",function() {
    const difficulty = selector.value
    generateGrid()
>>>>>>> parent of 24d0f7c (add: difficulty selector)
})

function generateGrid() {

    for (i = 1; i <= 100; i++) {
        let numLi = document.createElement("li")
        numLi.innerHTML = i
        numLi.setAttribute("number",i)
        grid.append(numLi)

        numLi.addEventListener("click",function(){
            console.log(this.getAttribute("number"))
        })
    }
    
}