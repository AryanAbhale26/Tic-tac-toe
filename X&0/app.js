let boxes = document.querySelectorAll(".bt");
let reset = document.querySelector(".res");
let result = document.querySelector(".result");
let newgame = document.querySelector(".newgame");
const win = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
var turn1 = { value: 1 }; //for player these will  be true and for player 2 it will be false

const winner = () => {
  for (let pattern of win) {
    let c1 = boxes[pattern[0]].innerHTML;
    let c2 = boxes[pattern[1]].innerHTML;
    let c3 = boxes[pattern[2]].innerHTML;
    if (c1 != "" && c2 != "" && c3 != "") {
      if (c1 == c2 && c1 == c3) {
        result.innerHTML = `we found the winner ${c1}`;
        clear();
      } else if (c1 != c2 && c1 != c3) {
        result.innerHTML = `Its a DRAW`;
        clear();
      }
    }
  }
};
//adding event listner
function play(e) {
  if (turn1.value == 1) {
    e.innerHTML = "x";
    turn1.value = 0;
    console.log(turn1);
  } else if (turn1.value == 0) {
    e.innerHTML = "o";
    turn1.value = 1;
  }
}

boxes.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.innerHTML == "") {
      play(e);
      winner();
    }
  });
});

const clear = () => {
  boxes.forEach((e) => {
    e.innerHTML = "";
  });
};
reset.addEventListener("click", () => {
  boxes.forEach((e) => {
    e.innerHTML = "";
  });
});

newgame.addEventListener("click", () => {
  boxes.forEach((e) => {
    e.innerHTML = "";
  });
  result.innerHTML = "";
});
