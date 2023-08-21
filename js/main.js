const startButton = document.getElementById("start_game")
let selector = document.getElementById("difficulty-selector")

let grid = document.getElementById("grid")
let rootRules = document.querySelector(":root")

startButton.addEventListener("click",function() {
    grid.innerHTML = ""
    let difficulty = selector.value
    rootRules.style.setProperty("--grid-divisor",selector.value)
    generateGrid(difficulty)
})

function generateGrid(difficulty) {

    for (i = 1; i <= difficulty; i++) {
        let numLi = document.createElement("li")
        numLi.innerHTML = i
        numLi.setAttribute("number",i)
        grid.append(numLi)

        numLi.addEventListener("click",function(){
            console.log(this.getAttribute("number"))
        })
    }
    
}