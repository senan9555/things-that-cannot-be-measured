const chapter = document.getElementById("chapter");
const mainText = document.getElementById("mainText");
const screen = document.getElementById("screen");

let step = 0;
let busy = false;
let automaticStarted = false;


/* =========================
   INTERACTIVE PHASE
========================= */

const interactiveSteps = [

  {
    chapter: "Where words fall short",
    text: "There are things I could tell you about yourself."
  },

  {
    chapter: "A simple description",
    text: "You are kind."
  },

  {
    chapter: "Another one",
    text: "You are thoughtful."
  },

  {
    chapter: "But...",
    text: "But those are just words."
  },

  {
    chapter: "The limits of words",
    text: "Words can describe a person."
  },

  {
    chapter: "What they can describe",
    text: "Their character. Their work. Their achievements."
  }

];


/* =========================
   AUTOMATIC PHASE
========================= */

const automaticSteps = [

  {
    chapter: "The limits of words",
    text: "But words have their limits.",
    delay: 4200
  },

  {
    chapter: "Because...",
    text: "Because some things are easier to feel than they are to explain.",
    delay: 5200
  },

  {
    chapter: "The things we don't see",
    text: "We notice what people do.",
    delay: 4000
  },

  {
    chapter: "And remember",
    text: "We remember what they say.",
    delay: 4000
  },

  {
    chapter: "And celebrate",
    text: "We celebrate what they achieve.",
    delay: 4000
  },

  {
    chapter: "But what about everything in between?",
    text: "But what about everything in between?",
    delay: 5000
  },

  {
    chapter: "The moments we don't count",
    text: "The moment someone feels a little less alone.",
    delay: 5200
  },

  {
    chapter: "A small difference",
    text: "The day someone smiles because of something you said.",
    delay: 5200
  },

  {
    chapter: "Something unseen",
    text: "The confidence you gave someone without ever realizing it.",
    delay: 5600
  },

  {
    chapter: "A kindness",
    text: "A kindness you may have forgotten five minutes later...",
    delay: 5000
  },

  {
    chapter: "...but",
    text: "...but someone else didn't.",
    delay: 5200
  },


  /* =========================
     IV — ANOTHER WAY TO DEFINE VALUE
  ========================= */

  {
    chapter: "Another way to define value",
    text: "We often measure people by what they accomplish.",
    delay: 5000
  },

  {
    chapter: "By numbers",
    text: "How much they know.",
    delay: 4000
  },

  {
    chapter: "By achievements",
    text: "How much they achieve.",
    delay: 4000
  },

  {
    chapter: "By distance",
    text: "How far they go.",
    delay: 4000
  },

  {
    chapter: "But perhaps...",
    text: "But perhaps that's not the whole story.",
    delay: 4800
  },

  {
    chapter: "Another possibility",
    text: "Perhaps a person's value can also be found in what becomes better simply because they were there.",
    delay: 6200
  },

  {
    chapter: "A conversation",
    text: "A conversation that mattered.",
    delay: 4500
  },

  {
    chapter: "A lesson",
    text: "A lesson someone remembered.",
    delay: 4500
  },

  {
    chapter: "A difficult day",
    text: "A difficult day made a little easier.",
    delay: 5000
  },

  {
    chapter: "And sometimes...",
    text: "Someone who began to believe in themselves...",
    delay: 5000
  },

  {
    chapter: "Because...",
    text: "...because someone believed in them first.",
    delay: 5500
  },


  /* =========================
     V — MORE PERSONAL
  ========================= */

  {
    chapter: "More personal",
    text: "And perhaps you don't notice these things.",
    delay: 5000
  },

  {
    chapter: "Perhaps...",
    text: "Perhaps you don't keep track of them.",
    delay: 4500
  },

  {
    chapter: "Maybe...",
    text: "Perhaps you don't even think they matter.",
    delay: 5000
  },

  {
    chapter: "But...",
    text: "But they do.",
    delay: 4200
  },

  {
    chapter: "More than you know",
    text: "More than you probably realize.",
    delay: 5600
  },


  /* =========================
     VI — WHAT I COULD SAY
  ========================= */

  {
    chapter: "What I could say",
    text: "I could try to tell you all the reasons I think you are valuable.",
    delay: 6000
  },

  {
    chapter: "I could make a list",
    text: "I could make a list.",
    delay: 4200
  },

  {
    chapter: "I could choose the right words",
    text: "I could choose the right words.",
    delay: 4200
  },

  {
    chapter: "I could explain",
    text: "I could try to explain it perfectly.",
    delay: 4800
  },

  {
    chapter: "But...",
    text: "But I would be missing the point.",
    delay: 5200
  },

  {
    chapter: "Something deeper",
    text: "Some people aren't valuable because of one particular thing.",
    delay: 5600
  },

  {
    chapter: "The sum of little things",
    text: "They are valuable because of the sum of all the little things they leave behind.",
    delay: 6500
  },

  {
    chapter: "The conversations",
    text: "The conversations.",
    delay: 3800
  },

  {
    chapter: "The lessons",
    text: "The lessons.",
    delay: 3800
  },

  {
    chapter: "The kindness",
    text: "The kindness.",
    delay: 3800
  },

  {
    chapter: "The patience",
    text: "The patience.",
    delay: 3800
  },

  {
    chapter: "The little moments",
    text: "The little moments.",
    delay: 4200
  },

  {
    chapter: "And the things we never know",
    text: "The things they never knew mattered.",
    delay: 6000
  },


  /* =========================
     FINAL
  ========================= */

  {
    chapter: "If you ever wonder",
    text: "So if you ever find yourself wondering, “Do I really make a difference?”",
    delay: 6500
  },

  {
    chapter: "The answer",
    text: "You do.",
    delay: 5000
  },

  {
    chapter: "More than you know",
    text: "More than you know.",
    delay: 5600
  },

  {
    chapter: "Remember this",
    text: "I hope you always remember that.",
    delay: 6000
  },

  {
    chapter: "And perhaps...",
    text: "And perhaps you should know one more thing...",
    delay: 6500
  },

  {
    chapter: "",
    text: "You are deeply valued.",
    delay: 6000
  },

  {
    chapter: "",
    text: "Not for what you do.",
    delay: 4800
  },

  {
    chapter: "",
    text: "Not for what you achieve.",
    delay: 5000
  },

  {
    chapter: "",
    text: "Simply for who you are.",
    delay: 7500,
    final: true
  }

];


/* =========================
   HELPERS
========================= */

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function changeText(element, text) {

  element.classList.remove("fade-in");
  element.classList.add("fade-out");

  await sleep(650);

  element.textContent = text;

  element.classList.remove("fade-out");
  element.classList.add("fade-in");

}


async function changeChapter(text) {

  chapter.classList.add("fade-out");

  await sleep(500);

  chapter.textContent = text;

  chapter.classList.remove("fade-out");
  chapter.classList.add("fade-in");

}


/* =========================
   INTERACTIVE STEPS
========================= */

async function nextStep() {

  if (busy || automaticStarted) return;

  busy = true;

  step++;

  if (step < interactiveSteps.length) {

    const current = interactiveSteps[step];

    await Promise.all([
      changeChapter(current.chapter),
      changeText(mainText, current.text)
    ]);

    await sleep(500);

    busy = false;

    return;
  }


  /* Start automatic phase */

  automaticStarted = true;

  await startAutomaticSequence();

}


/* =========================
   AUTOMATIC SEQUENCE
========================= */

async function startAutomaticSequence() {

  screen.classList.add("automatic");

  await sleep(1200);


  for (let i = 0; i < automaticSteps.length; i++) {

    const current = automaticSteps[i];


    await Promise.all([
      changeChapter(current.chapter),
      changeText(mainText, current.text)
    ]);


    if (current.final) {

      await sleep(current.delay);

      break;

    }


    await sleep(current.delay);

  }

}


/* =========================
   START
========================= */

chapter.textContent = interactiveSteps[0].chapter;
mainText.textContent = interactiveSteps[0].text;


/* Tap anywhere */

screen.addEventListener("click", nextStep);