let winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
// //  write an array of arrays with EVERY win combination (starting at 0, NOT 1)for example:
// // let winCombos = [
// //   [0, 1, 2],
// //   [3, 4, 5]
// // ]

let cells = document.querySelectorAll('.cell');
//  grabs all HTML elements with class of "cell" and
//  puts them in an array

let currentPlayer = 'X';
//start player with 'X'

let moves = 0;
//counting number of moves

cells.forEach(function (cell) {
  cell.addEventListener('click', cellClicked);
});

function cellClicked(e) {
  moves++
  //add 1 to moves every time a cell is clicked

  let cell = e.target;
  cell.textContent = currentPlayer
  checkWin();

  togglePlayer();
}

function togglePlayer() {
  //alternating between X and O
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
}

function checkWin() {
  loop1: for (let i = 0; i < winCombos.length; i++) {
    let sum = 0;
    for (let j = 0; j < winCombos[i].length; j++) {
      if (cells[winCombos[i][j]].textContent === currentPlayer) {
        sum++
      }

      if(sum === 3) {
        alert(currentPlayer + ' Wins!')
      }

      if(sum != 3 && moves === 9) {
        alert('Draw!')
        break loop1;
      }
    }
  }

  // if (cells[0].textContent === currentPlayer && cells[1].textContent === currentPlayer && cells[2].textContent === currentPlayer) {
  //   alert(currentPlayer + " Wins!!!");
  // }
  // if (cells[3].textContent === currentPlayer && cells[4].textContent === currentPlayer && cells[5].textContent === currentPlayer) {
  //   alert(currentPlayer + " Wins!!!");
  // }
  // if (cells[6].textContent === currentPlayer && cells[7].textContent === currentPlayer && cells[8].textContent === currentPlayer) {
  //   alert(currentPlayer + " Wins!!!");
  // }
  // if (cells[0].textContent === currentPlayer && cells[3].textContent === currentPlayer && cells[6].textContent === currentPlayer) {
  //   alert(currentPlayer + " Wins!!!");
  // }
  // if (cells[1].textContent === currentPlayer && cells[4].textContent === currentPlayer && cells[7].textContent === currentPlayer) {
  //   alert(currentPlayer + " Wins!!!");
  // }
  // if (cells[2].textContent === currentPlayer && cells[5].textContent === currentPlayer && cells[8].textContent === currentPlayer) {
  //   alert(currentPlayer + " Wins!!!");
  // }
  // if (cells[0].textContent === currentPlayer && cells[4].textContent === currentPlayer && cells[8].textContent === currentPlayer) {
  //   alert(currentPlayer + " Wins!!!");
  // }
  // if (cells[2].textContent === currentPlayer && cells[4].textContent === currentPlayer && cells[6].textContent === currentPlayer) {
  //   alert(currentPlayer + " Wins!!!");
  // }
}
