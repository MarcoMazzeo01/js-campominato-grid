const startButton = document.getElementById("start_game")
let selector = document.getElementById("difficulty-selector")

let grid = document.getElementById("grid")

startButton.addEventListener("click",function() {
    const difficulty = selector.value
    generateGrid()
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