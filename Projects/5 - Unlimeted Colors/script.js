// * generate random colors

const randomColors = function () {
  const hexCode = "0123456789ABCDEF";
  let colors = "#";
  for (let i = 0; i < 6; i++) {
    colors += hexCode[parseInt(Math.random() * 16)];
  }
  return colors;
};

let stopIntervalID;

const startChangingColor = function () {
  if (!stopIntervalID) {
    stopIntervalID = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColors();
  }
};

const stopChangingColor = function () {
  clearInterval(stopIntervalID);
  stopIntervalID = null;
};

document
  .getElementById("start")
  .addEventListener("click", startChangingColor, 1000);

document.getElementById("stop").addEventListener("click", stopChangingColor);
