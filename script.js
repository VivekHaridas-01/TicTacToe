var game = document.querySelectorAll(".cell");
var h2 = document.getElementById("winner");
// All cases where the player wins
const win_case = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];
// Starts with X turn
var turn = true;
// Keeps track if all 9 cells have been clicked
var c = 0;

function enable_game() {
  game.forEach((cell) => {
    cell.innerText = "";
    cell.disabled = false;
  });
}

// Checks if a player has won
function player_win() {
  for (let i of win_case) {
    let t1 = game[i[0]].innerText;
    let t2 = game[i[1]].innerText;
    let t3 = game[i[2]].innerText;

    if (t1 != "" && t2 != "" && t3 != "" && t1 == t2 && t2 == t3) {
      game.forEach((cell) => (cell.disabled = true));
      h2.innerHTML = t1 + " is the Winner!!";
    }
  }
}

// Checks if the game ends in a Draw
const draw = (c) => {
  if (c == 9) {
    game.forEach((element) => (element.disabled = true));
    h2.innerHTML = "The Game ends in a Draw!";
  }
};

game.forEach((cell) => {
  cell.addEventListener("click", function () {
    if (turn == true) {
      turn = false;
      cell.innerText = "X";
      cell.disabled = true;
    } else {
      turn = true;
      cell.innerText = "O";
      cell.disabled = true;
    }
    c += 1;
    draw(c);
    player_win();
  });
});

//Reset Button
var res = document.getElementById("res");
res.addEventListener("click", function () {
  c = 0;
  h2.innerHTML = "";
  enable_game();
});

window.onload = enable_game;
