const Gameboard = (() => {
    const gameboard = [
        "", "", "",
        "", "", "",
        "", "", "",
                    ]

    let turn = 0
    

    const checkValid = square => {
        if (!gameboard[square]) {
            return true
        }
        else {
            return false
        }
    }

    const checkTopLeft = () => {
        if ((gameboard[0] === gameboard[1] && gameboard[0] === gameboard[2]) ||
        (gameboard[0] === gameboard[3] && gameboard[0] === gameboard[6])) {
            if (gameboard[0] === "X") {
                return "Player One"
            } if (gameboard[0] === "O") {
                return "Player Two"
            }
        }
    }

    const checkBottomRight = () => {
        if ((gameboard[8] === gameboard[7] && gameboard[8] === gameboard[6]) ||
            (gameboard[8] === gameboard[5] && gameboard[8] === gameboard[2])) {
                if (gameboard[8] === "X") {
                    return "Player One"
                } if (gameboard[8] === "O") {
                    return "Player Two"
                }
            }
    }

    const checkCenter = () => {
        if ((gameboard[4] === gameboard[3] && gameboard[4] == gameboard[5]) ||
        (gameboard[4] === gameboard[1] && gameboard[4] === gameboard[7]) ||
        (gameboard[4] === gameboard[0] && gameboard[4] === gameboard[8]) ||
        (gameboard[4] === gameboard[6] && gameboard[4] === gameboard[2])) {
            if (gameboard[4] === "X") {
                return "Player One"
            } if (gameboard[4] === "O") {
                return "Player Two"
            }
        }
    }

    const checkGameEnd = () => {
        if (gameboard.every(square => square)) {
            return "tie"
        } 

        return checkTopLeft() ? checkTopLeft() : 
        checkBottomRight() ? checkBottomRight() : 
        checkCenter() ? checkCenter() : false
    
        }

    const alertWinner = winner => {
        alert(winner)
    }

    const playTurn = e => {
        let square = e.target.id
        if (!checkValid(square)) {
            console.log("hi")
            return
        }
        if (turn % 2 === 0) {
            playerOne.placeMarker(square)
        } else {
            playerTwo.placeMarker(square)
        }
        DisplayController.updateDisplay()

        let winner = checkGameEnd()

        if (winner) {
            alertWinner(winner)
        }

        turn++
    }
    return { gameboard, playTurn }
})();

const DisplayController = (() => {
    const updateDisplay = () => {
        for(let i = 0; i < 9; i++) {
            let square = document.getElementById(i)
            square.textContent = Gameboard.gameboard[i]
        }
    }

    return { updateDisplay }
})();

const Player = marker => {
    this.marker = marker

    this.placeMarker = square => {
        Gameboard.gameboard[square] = marker
    }

    return { placeMarker }
}

for (let i = 0; i < 9; i++) {
    document.getElementById(i).addEventListener("click", Gameboard.playTurn)
}

const playerOne = Player("X")
const playerTwo = Player("O")