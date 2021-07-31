const Gameboard = (() => {
    const gameboard = [
        "", "", "",
        "", "", "",
        "", "", "",
                    ]

    let turn = 0
    

    const checkValid = () => {
        //check if a move is valid 
        //(whether there is already a marker in the chosen position)
        //if valid return true, else return false
    }

    const checkWinner = () => {
        //check who won, or if it's a tie
        //if no winner and not a tie return false, else return a string saying who won
    }

    const alertWinner = winner => {
        //announce who won the game
    }

    const playTurn = () => {
        //use checkValid() to see if a move is allowed
        //if it is place a marker on the chosen square else return function
        //use checkWinner() to see if the game should end
        //if the game should end use alertWinner()
    }
    return { gameboard, playTurn }
})();

const DisplayController = (() => {
    const updateDisplay = gameboard => {
        //update display
    }

    return { updateDisplay }
})();

const Player = marker => {
    this.marker = marker

    this.placeMarker = () => {
        //place the player's marker into the gameboard
    }

    return { placeMarker }
}