const questionPool = [
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
  },
  {
    question: "ジャイアンの本名は何でしょう？",
    choices: ["剛田健", "剛田猛", "剛田武", "剛田強"],
    correct: 2,
    explanation: "ジャイアンの本名は「剛田武（ごうだたけし）」です。力持ちで歌が大好きなキャラクターです。"
  },
  {
    question: "しずかちゃんのフルネームは何でしょう？",
    choices: ["泉静香", "水野静香", "源静香", "池田静香"],
    correct: 2,
    explanation: "しずかちゃんのフルネームは「源静香（みなもとしずか）」です。バイオリンとお風呂が大好きです。"
  },
  {
    question: "ドラえもんはもともと何色だったでしょう？",
    choices: ["白色", "黄色", "赤色", "緑色"],
    correct: 1,
    explanation: "ドラえもんはもともと黄色でした。ネズミに耳をかじられてショックで泣き続けたことで、現在の青色になりました。"
  },
  {
    question: "のび太のパパの名前は何でしょう？",
    choices: ["野比のびお", "野比のびき", "野比のびる", "野比のび助"],
    correct: 3,
    explanation: "のび太のパパの名前は「野比のび助（のびのびすけ）」です。会社員でのんびりした性格です。"
  },
  {
    question: "スネ夫のフルネームは何でしょう？",
    choices: ["骨川スネキ", "骨川スネ夫", "骨川スネタ", "骨川スネジ"],
    correct: 1,
    explanation: "スネ夫のフルネームは「骨川スネ夫（ほねかわすねお）」です。自慢話が多く、ジャイアンの子分です。"
  }
];

const QUIZ_SIZE = 5;

let currentIndex = 0;
let score = 0;
let answered = false;
let activeQuestions = [];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function prepareQuiz() {
  return shuffle(questionPool).slice(0, QUIZ_SIZE).map(q => {
    const correctText = q.choices[q.correct];
    const shuffledChoices = shuffle(q.choices);
    return { ...q, choices: shuffledChoices, correct: shuffledChoices.indexOf(correctText) };
  });
}

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
  activeQuestions = prepareQuiz();
  showScreen(questionScreen);
  renderQuestion();
}

function renderQuestion() {
  answered = false;
  const q = activeQuestions[currentIndex];
  const total = activeQuestions.length;

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

  const q = activeQuestions[currentIndex];
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
  nextBtn.textContent = currentIndex < activeQuestions.length - 1 ? "次の問題へ" : "結果を見る";
}

function showNext() {
  currentIndex++;
  if (currentIndex < activeQuestions.length) {
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const total = activeQuestions.length;
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
