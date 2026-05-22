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
  },
  {
    question: "ドラえもんの体重は何kgでしょう？",
    choices: ["100.0kg", "110.5kg", "129.3kg", "150.0kg"],
    correct: 2,
    explanation: "ドラえもんの体重は129.3kgです。身長と同じ数値という設定になっています。"
  },
  {
    question: "のび太のママの名前は何でしょう？",
    choices: ["野比花子", "野比春子", "野比夏子", "野比玉子"],
    correct: 3,
    explanation: "のび太のママは「野比玉子（のびたまこ）」です。厳しくのび太を叱ることが多い肝っ玉母さんです。"
  },
  {
    question: "ドラえもんのポケットの正式な名前は何でしょう？",
    choices: ["三次元ポケット", "四次元ポケット", "五次元ポケット", "未来のポケット"],
    correct: 1,
    explanation: "「四次元ポケット」が正式名称です。このポケットには無数のひみつ道具が収納されています。"
  },
  {
    question: "ひみつ道具「タケコプター」はどこに装着して使うでしょう？",
    choices: ["耳", "背中", "手首", "頭"],
    correct: 3,
    explanation: "タケコプターは頭に装着して空を飛ぶひみつ道具です。竹とんぼをモチーフにしたデザインです。"
  },
  {
    question: "のび太が5秒以内にできることは何でしょう？",
    choices: ["100メートルを走る", "算数の問題を解く", "眠りにつく", "ご飯を食べる"],
    correct: 2,
    explanation: "のび太は横になってから5秒以内に眠りにつくことができます。これはロボットも驚く特技です。"
  },
  {
    question: "ジャイアンが大好きで、よくリサイタルを開く趣味は何でしょう？",
    choices: ["絵を描くこと", "ダンス", "歌を歌うこと", "楽器演奏"],
    correct: 2,
    explanation: "ジャイアンは歌が大好きでリサイタルをよく開きます。ただし聴衆にはとても辛いと評判です。"
  },
  {
    question: "ドラミちゃんの好物は何でしょう？",
    choices: ["どら焼き", "たい焼き", "クリームパン", "メロンパン"],
    correct: 3,
    explanation: "ドラミちゃんの好物はメロンパンです。お兄ちゃんのドラえもん（どら焼き）とは好物が異なります。"
  },
  {
    question: "しずかちゃんが習っている楽器は何でしょう？",
    choices: ["ピアノ", "フルート", "バイオリン", "チェロ"],
    correct: 2,
    explanation: "しずかちゃんの趣味はバイオリンです。熱心に練習していますが、音色が苦手な人も多いようです。"
  },
  {
    question: "ひみつ道具「どこでもドア」を使うとどうなるでしょう？",
    choices: ["過去に戻れる", "空を飛べる", "透明になれる", "思った場所に移動できる"],
    correct: 3,
    explanation: "「どこでもドア」はドアを開けると思い描いた場所に瞬時に移動できるひみつ道具です。"
  },
  {
    question: "のび太が特に苦手な科目は何でしょう？",
    choices: ["国語", "体育", "音楽", "算数"],
    correct: 3,
    explanation: "のび太は算数が特に苦手で、テストでよく0点を取ります。勉強全般が苦手ですが算数は最も得点が低いです。"
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
