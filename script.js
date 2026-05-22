const questions = [
  {
    question: "ドラえもんの誕生日は何年何月何日でしょう？",
    choices: ["2112年9月3日", "2112年8月3日", "2112年10月3日", "2112年7月3日"],
    correct: 0,
    explanation: "ドラえもんは2112年9月3日生まれです。のび太のひ孫・セワシくんが未来から送り込みました。"
  },
  {
    question: "ドラえもんが大の苦手としているものは何でしょう？",
    choices: ["ゴキブリ", "雷", "ネズミ", "暗闇"],
    correct: 2,
    explanation: "ドラえもんはネズミが大の苦手です。昔、ネコ型ロボットの耳をネズミにかじられてしまったことが原因です。"
  },
  {
    question: "ドラえもんの大好物は次のうちどれでしょう？",
    choices: ["たい焼き", "おはぎ", "まんじゅう", "どら焼き"],
    correct: 3,
    explanation: "ドラえもんの大好物は「どら焼き」です。名前の由来にもなっている説があります。"
  },
  {
    question: "ドラえもんの身長は何cmでしょう？",
    choices: ["120.0cm", "129.3cm", "135.5cm", "125.8cm"],
    correct: 1,
    explanation: "ドラえもんの身長は129.3cmです。体重も同じく129.3kgという設定になっています。"
  },
  {
    question: "ドラえもんの妹ロボットの名前は何でしょう？",
    choices: ["ドラコ", "ドラベル", "ドラミ", "ドラリン"],
    correct: 2,
    explanation: "ドラえもんの妹は「ドラミちゃん」です。ドラえもんよりも高性能で、好物はメロンパンです。"
  }
];

let currentIndex = 0;
let score = 0;
let answered = false;

const startScreen   = document.getElementById("start-screen");
const questionScreen = document.getElementById("question-screen");
const resultScreen  = document.getElementById("result-screen");

const progressBar  = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const questionText = document.getElementById("question-text");
const choicesEl    = document.getElementById("choices");
const feedbackEl   = document.getElementById("feedback");
const nextBtn      = document.getElementById("next-btn");
const scoreText    = document.getElementById("score-text");
const scoreComment = document.getElementById("score-comment");

document.getElementById("start-btn").addEventListener("click", startQuiz);
nextBtn.addEventListener("click", showNext);
document.getElementById("retry-btn").addEventListener("click", resetQuiz);

function showScreen(screen) {
  [startScreen, questionScreen, resultScreen].forEach(s => s.classList.remove("active"));
  screen.classList.add("active");
}

function startQuiz() {
  currentIndex = 0;
  score = 0;
  showScreen(questionScreen);
  renderQuestion();
}

function renderQuestion() {
  answered = false;
  const q = questions[currentIndex];
  const total = questions.length;

  progressBar.style.width = `${(currentIndex / total) * 100}%`;
  progressText.textContent = `第 ${currentIndex + 1} 問 / ${total} 問`;
  questionText.textContent = q.question;

  feedbackEl.className = "feedback hidden";
  feedbackEl.textContent = "";
  nextBtn.classList.add("hidden");

  choicesEl.innerHTML = "";
  q.choices.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = choice;
    btn.addEventListener("click", () => selectAnswer(i));
    choicesEl.appendChild(btn);
  });
}

function selectAnswer(selectedIndex) {
  if (answered) return;
  answered = true;

  const q = questions[currentIndex];
  const buttons = choicesEl.querySelectorAll(".choice-btn");

  buttons.forEach(btn => btn.disabled = true);

  if (selectedIndex === q.correct) {
    score++;
    buttons[selectedIndex].classList.add("correct");
    feedbackEl.className = "feedback correct-fb";
    feedbackEl.textContent = `⭕ 正解！　${q.explanation}`;
  } else {
    buttons[selectedIndex].classList.add("incorrect");
    buttons[q.correct].classList.add("reveal");
    feedbackEl.className = "feedback incorrect-fb";
    feedbackEl.textContent = `❌ 不正解…　正解は「${q.choices[q.correct]}」です。${q.explanation}`;
  }

  nextBtn.classList.remove("hidden");
  nextBtn.textContent = currentIndex < questions.length - 1 ? "次の問題へ" : "結果を見る";
}

function showNext() {
  currentIndex++;
  if (currentIndex < questions.length) {
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const total = questions.length;
  progressBar.style.width = "100%";

  scoreText.textContent = `${total}問中 ${score}問 正解！`;

  if (score === total) {
    scoreComment.textContent = "🎉 満点！ドラえもん博士ですね！";
  } else if (score >= 4) {
    scoreComment.textContent = "👏 すごい！ドラえもんのことをよく知っていますね！";
  } else if (score >= 2) {
    scoreComment.textContent = "😊 もう少し！復習してまた挑戦してみよう！";
  } else {
    scoreComment.textContent = "😅 ドラえもんをもっと見てみよう！";
  }

  showScreen(resultScreen);
}

function resetQuiz() {
  showScreen(startScreen);
}
