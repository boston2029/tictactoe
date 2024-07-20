// CONDITIONALS

const row1filled = (piece) => board[0].every(a=>a==piece)
const row2filled = (piece) => board[0].every(a=>a==piece)
const row3filled = (piece) => board[0].every(a=>a==piece)

const column1filled = (piece) => {
  if (board[0][0]==piece&&board[1][0]==piece&&board[2][0]==piece) {
    return true
  }
}
const column2filled = (piece) => {
  if (board[0][1]==piece&&board[1][1]==piece&&board[2][1]==piece) {
    return true
  }
}
const column3filled = (piece) => {
  if (board[0][2]==piece&&board[1][2]==piece&&board[2][2]==piece) {
    return true
  }
}

const leftDiagonal = (piece) => {
  if (board[2][0]==piece&&board[1][1]==piece&&board[0][2]==piece) {
    return true
  }
}
const rightDiagonal = (piece) => {
  if (board[0][0]==piece&&board[1][1]==piece&&board[2][2]==piece) {
    return true
  }
}

const boardFilled = () => {
  if (board[0].indexOf('')==-1&&board[1].indexOf('')==-1&&board[2].indexOf('')==-1) {
    return true
  }
}

const someoneWon = (p) => {
  if (row1filled(p) || row2filled(p) || row3filled(p) || column1filled(p) || column2filled(p) || column3filled(p) || leftDiagonal(p) || rightDiagonal(p)) {
    return true
  }
}

// END



let board = [
  ['','',''],
  ['','',''],
  ['','','']
]

let currentPlayer = ['X', 'O'][Math.floor(Math.random()*2)]

document.querySelector('h1').innerText=currentPlayer+' goes'

function updateBoardArray() {
  let spots = Array.from(document.querySelector('.board').children).map(a=>a.innerText.trim())
  board = [
    [spots[0], spots[1], spots[2]],
    [spots[3], spots[4], spots[5]],
    [spots[6], spots[7], spots[8]]
  ]
}

let playable = true

Array.from(document.querySelector('.board').children).forEach(spot => {
  spot.onclick=function(){
    if (!playable) {return}
    if (spot.innerText.trim()!='') {return}
    spot.classList.add(currentPlayer.toLowerCase())
    spot.innerText=currentPlayer
    updateBoardArray()
    if (someoneWon(currentPlayer)) {
      document.querySelector('h1').innerText=currentPlayer+" won!"
      playable=false
    } else if (boardFilled()) {
      document.querySelector('h1').innerText="It's a tie!"
      playable=false
    } else {
      currentPlayer=currentPlayer=='X'?'O':'X'
      document.querySelector('h1').innerText=currentPlayer+' goes'
    }
  }
})