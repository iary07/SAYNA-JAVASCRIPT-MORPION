let items = document.querySelectorAll(".grid-item");
items = Array.from(items);
let player = "X" ? "O" : "X";
let very = [];
const condition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];
startGame()

function startGame() {
    for (var i = 0; i < items.length; i++) {
        items[i].textContent = ''
        very = []
    }

    document.getElementById("overlay").style.display = "none"
    document.getElementById("boite").style.display = "none"
    document.getElementById("text").innerHTML = ""
}
items.forEach(function(item) {
    item.addEventListener("click", function() {
        if (item.innerText.trim() != "") return
        item.innerText = player
        winner()
        player = player == "X" ? "O" : "X"
        if (very.length <=9)
            very.push(player)
    })

})

function winner() {
    condition.forEach(function(c) {
        let verify = c.every(index => items[index].innerText.trim() == player)
        if (verify) {
            document.getElementById("overlay").style.display = "block"
            document.getElementById("boite").style.display = "block"
            document.getElementById("text").innerHTML = player + " GAGNE "
            
        }  if (!verify && very.length >=8) {
            document.getElementById("overlay").style.display = "block"
            document.getElementById("boite").style.display = "block"
            document.getElementById("text").innerHTML = "DRAW "
            

        }
    })
}

// // Vide le contenu de toute les cases
function rest() {
    for (var i = 0; i < items.length; i++) {
        items[i].textContent = ''
    }
    startGame()
}