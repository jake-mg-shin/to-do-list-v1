const body = document.querySelector("body");

// Numbers of total pics
const numbersOfImg = 4;

// pick a img to bg img
function bgImg(imgNum) {
  const img = new Image();
  img.src = `src/images/${imgNum}.jpg`;
  img.classList.add("bgImg");
  body.appendChild(img);
}

// make a random number among 1, 2, 3 and 4
function genNum() {
  const getNum = Math.ceil(Math.random() * numbersOfImg);
  return getNum;
}

function init() {
  // randomly pick img
  const randomNum = genNum();
  // set up the img to bg
  bgImg(randomNum);
}

init();
