let players = ['x', 'o'];
let activePlayer = 0;
let count = 0;
let board;

function startGame() {
  board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
  count = 0;
  renderBoard(board);
};

function checkWin() {
  let tap = players[activePlayer];
  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
     if (board[i][0] === tap && board[i][1] === tap && board[i][2] === tap) {
        showWinner(activePlayer);
      } else if (board[0][j] === tap && board[1][j] === tap && board[2][j] === tap) {
        showWinner(activePlayer);
      } else if (board[0][0] === tap && board[1][1] === tap && board[2][2] === tap) {
        showWinner(activePlayer);
      } else if (board[0][2] === tap && board[1][1] === tap && board[2][0] === tap) {
        showWinner(activePlayer);
      };
    }
  }
};

function click(row, col) {
   if (count % 2 == 0) {
    activePlayer = 0;
  } else {
    activePlayer = 1;
  };
  board[row][col] = players[activePlayer];
  count++;
  renderBoard(board);
  checkWin();
}
