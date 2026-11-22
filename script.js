let card = document.querySelector("#card");
let questionText = document.querySelector("#question-text");
let answerText = document.querySelector("#answer-text");
let progressText = document.querySelector("#progress-text");
let practiceBtn = document.querySelector("#practice-btn");
let masterBtn = document.querySelector("#masterd-btn");

const cards = [
  {
    question: "What is a closure?",
    answer: "A function that remembers variables from its lexical scope."
  },
  {
    question: "What does `===` check?",
    answer: "Both value and type without type coercion."
  },
  {
    question: "Where do Promise callbacks go?",
    answer: "The microtask queue."
  }
];

let isFlipped = false;
let currentIndex = 0;

function render() {
  isFlipped = false;
  card.classList.remove("flipped");

  if (currentIndex >= cards.length) {
    questionText.textContent = "finish";
    answerText.textContent = "";
    return;
  }

  const currentQuestion = cards[currentIndex];
  questionText.textContent = currentQuestion.question;
  answerText.textContent = currentQuestion.answer;
}

card.addEventListener("click", function () {
  if (currentIndex >= cards.length) return;

  isFlipped = !isFlipped;
  card.classList.toggle("flipped", isFlipped);
});
practiceBtn.addEventListener("click", function () {
  if (currentIndex >= cards.length) return;

  // Recycle current card to the back of the active deck
  cards.push(cards[currentIndex]);
  currentIndex++;
  render();
});

masterBtn.addEventListener("click", function () {
  currentIndex++;
  render();
});

render();