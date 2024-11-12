const outputLines = [
  "I Love You :3",
  "You're the best!",
  "My kocicka <3",
  "You're my wife!",
  "Kiss Kiss :3",
  "Wow so great!",
  "You're my sunshine!",
  "Forever yours <3",
  "You make me smile!",
  "My heart belongs to you",
  "You're my everything!",
  "Sweetheart <3",
  "You're my dream come true",
  "Love you to the moon and back",
  "You're my angel",
  "You're my world",
  "You're my star",
  "You're my treasure",
  "You're my soulmate",
  "You're my one and only"
];

function generateRandomHex() {
  const r = 255; // Red component is always high for pink/rosa
  const g = generateRandomNumber(0, 192); // Green component is low to medium
  const b = generateRandomNumber(128, 255); // Blue component is medium to high
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

function generateRandomNumber(from, to) {
  return Math.floor(Math.random() * (to - from + 1)) + from;
}

function getLuminance(hex) {
  const rgb = parseInt(hex.slice(1), 16); // Convert hex to RGB
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;
  // Normalize RGB values to 0-1 range
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;
  // Calculate luminance
  const luminance = 0.2126 * rNorm + 0.7152 * gNorm + 0.0722 * bNorm;
  return luminance;
}

function changeBackgroundColor() {
  const newColor = generateRandomHex();
  document.body.style.backgroundColor = newColor;
  const luminance = getLuminance(newColor);
  document.body.style.color = luminance > 0.5 ? '#000000' : '#FFFFFF'; // Set text color based on luminance
}

function changeText() {
  const randomIndex = generateRandomNumber(0, outputLines.length - 1);
  const newText = outputLines[randomIndex];
  document.getElementById('out').innerText = newText;
}

function updateClickCount() {
  let clickCount = localStorage.getItem('clickCount');
  clickCount = clickCount ? parseInt(clickCount) + 1 : 1;
  localStorage.setItem('clickCount', clickCount);
  document.getElementById('clickCount').innerText = `Button clicked ${clickCount} times`;
}

document.getElementById('btn').addEventListener('click', () => {
  changeBackgroundColor();
  changeText();
  updateClickCount();
});

// Initialize click count on page load
window.addEventListener('load', () => {
  const clickCount = localStorage.getItem('clickCount') || 0;
  document.getElementById('clickCount').innerText = `Button clicked ${clickCount} times`;
});
