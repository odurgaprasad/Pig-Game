const score1 = document.getElementById("score-0");
const score2 = document.getElementById("score-1");
const diceEl = document.querySelector(".dice");
diceEl.classList.add("hidden");

const btnRoll = document.querySelector(".btn-roll");
const btnReset = document.querySelector(".btn-reset");
const btnHold = document.querySelector(".btn-hold");
const current1 = document.getElementById("current-0");
const current2 = document.getElementById("current-1");
const player1 = document.querySelector(".player-0");
const player2 = document.querySelector(".player-1");
score1.textContent = 0;
score2.textContent = 0;
let currentScore = 0;
let activeplayer = 0;
let scores = [0, 0];
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current-${activeplayer}`).textContent = 0;
  currentScore = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  player1.classList.toggle("player-active");
  player2.classList.toggle("player-active");
};

btnRoll.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `dice--(${dice}).png`;
    diceEl.classList.remove("hidden");
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current-${activeplayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activeplayer] += currentScore;
    document.getElementById(`score-${activeplayer}`).textContent =
      scores[activeplayer];
    if (scores[activeplayer] >= 100) {
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player-${activeplayer}`)
        .classList.add("player-winner");
      document
        .querySelector(`.player-${activeplayer}`)
        .classList.remove("player-active");
    } else {
      switchPlayer();
    }
  }
});

btnReset.addEventListener("click", function () {
  score1.textContent = 0;
  score2.textContent = 0;
  currentScore = 0;
  scores[activeplayer] = 0;
  current1.textContent = 0;
  current2.textContent = 0;
});
