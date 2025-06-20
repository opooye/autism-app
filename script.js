const tips = [
  "Spend quality time with your child each day—even a few minutes can help.",
  "Use visual schedules to help with transitions and routines.",
  "Celebrate small victories like a new word, smile, or gesture.",
  "Always speak gently. Your calm voice is a source of safety.",
  "Use simple toys like blocks to engage in play therapy."
];

window.onload = () => {
  const tipElement = document.getElementById('dailyTip');
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  tipElement.textContent = randomTip;
};
