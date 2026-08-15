// innit board
let board = [
  ["r","n","b","q","k","b","n","r"],
  ["p","p","p","p","p","p","p","p"],
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null],
  ["P","P","P","P","P","P","P","P"],
  ["R","N","B","Q","K","B","N","R"]
];

const boardEl = document.getElementById("board");

for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.classList.add((row + col) % 2 === 0 ? "light" : "dark");
    square.classList.add(board[row][col] || "blank");
    square.addEventListener("click", () => handleClick(row, col));

    boardEl.appendChild(square);
  }
}

let selected = null;

function renderBoard() {
    boardEl.innerHTML = "";
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.classList.add((row + col) % 2 === 0 ? "light" : "dark");
            square.classList.add(board[row][col] || "blank");
            square.addEventListener("click", () => handleClick(row, col));

            boardEl.appendChild(square);
        }
    }
}

function handleClick(row, col) {
  if (selected === null) {
    // only select if there's actually a piece there
    if (board[row][col]) {
        selected = { row, col };
        const index = selected.row * 8 + selected.col;
        boardEl.children[index].classList.add("selected");
    }
  } else {
    // move the piece from selected 
    board[row][col] = board[selected.row][selected.col];
    board[selected.row][selected.col] = null;
    selected = null;
    renderBoard(); // redraw
  }
}