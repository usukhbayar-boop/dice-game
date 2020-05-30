// Togloomiin tuluviig shalgah huvisagch
var isNewGame;

// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
var activePlayer;
// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores;
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore;

var diceDOM = document.querySelector(".dice");
// togloomiig ehluulne
initGame();

function initGame() {
  isNewGame = true;
  activePlayer = 0;
  scores = [0, 0];
  roundScore = 0;
  // Програм эхлэхэд бэлтгэе
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  // toglogchdiin neriig butsaaj gargaj irne
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  diceDOM.style.display = "none";
}

document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame) {
    var diceNumber = Math.floor(Math.random() * 6 + 1);
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + diceNumber + ".png";
    // Hervee buusan too 1ees yalgaatai bol eeljiin onoog nemegduulne
    if (diceNumber !== 1) {
      roundScore = roundScore + diceNumber;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      // herev negtei tentsuu bol eeljiin onoog 0 bolgoj daraagiin toglogchiin eeljind shiljuulne
      switchToNextPlayer();
    }
  } else {
    alert("NEW GAME товчийг дарж тоглоомыг шинээр эхлүүлнэ үү!");
  }
});
// HOLD tovchiig darj eeljiin onoog golbal onoon deer nemne
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
    // eeljiin onoog global onoon deer nemne
    scores[activePlayer] = scores[activePlayer] + roundScore;
    //delgets deer onoog oorchilno
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    // toglogchiin eeljiig solino

    if (scores[activePlayer] >= 20) {
      isNewGame = false;
      document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      switchToNextPlayer();
    }
  } else {
    alert("NEW GAME товчийг дарж тоглоомыг шинээр эхлүүлнэ үү!");
  }
});

// idevhitei toglogchiin eeljiig daraagiin toglogchid shiljuulne
function switchToNextPlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  // idevhitei toglogch 0 baival 1 harin 1 baival 0 bolgono
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  // shoog tur alga bolgoh
  diceDOM.style.display = "none";
}

// NEW GAME button oor togloomiig shineer ehluulne
document.querySelector(".btn-new").addEventListener("click", initGame);
