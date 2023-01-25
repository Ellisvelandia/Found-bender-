alert("Found Bender")

function found() {
  const findTime = new Date().getTime() - window.startTime;
  const findSeconds = findTime / 1000;
  alert('Found in ' + findSeconds + ' seconds');
  newGame();
}
function newGame() {
  window.startTime = new Date().getTime();
  const maxX = document.body.clientWidth - 45;
  const maxY = document.body.clientHeight - 50;
  const x = Math.round(Math.random() * maxX);
  const y = Math.round(Math.random() * maxY);
  document.querySelector('img').style.top = y + 'px';
  document.querySelector('img').style.left = x + 'px';
}
newGame();