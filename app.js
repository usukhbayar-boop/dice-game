// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.

var activePlayer = 0;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч

var score = [0, 0];
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч

var roundScore = 0;
// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
//var diceNumber = Math.floor(Math.random() * 6 + 1);
// document.getElementById("score-0").textContent = dice;

// Програм эхлэхэд бэлтгэе
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDOM = document.querySelector(".dice");
diceDOM.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6 + 1);
  diceDOM.style.display = "block";
  diceDOM.src = "dice-" + diceNumber + ".png";
  // Hervee buusan too 1ees yalgaatai bol eeljiin onoog nemegduulne
  if (diceNumber !== 1) {
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // herev negtei tentsuu bol eeljiin onoog 0 bolgoj daraagiin toglogchiin eeljind shiljuulne
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;
    // idevhitei toglogch 0 baival 1 harin 1 baival 0 bolgono
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    diceDOM.style.display = "none";
  }
});
