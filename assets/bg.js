const bg = document.querySelector("#bg");

// Numbers of total pics
const numbersOfImg = 4;

// pick a img to bg img
bgImg = imgNum => {
  bg.setAttribute("style", `background-image: url("src/images/${imgNum}.jpg")`);
  bg.classList.add("bgImg");
  // const img = new Image();
  // img.src = `src/images/${imgNum}.jpg`;
  // img.classList.add("bgImg");
  // body.appendChild(img);
};

// make a random number among 1, 2, 3 and 4
genNum = () => {
  const getNum = Math.ceil(Math.random() * numbersOfImg);
  return getNum;
};

init = () => {
  // randomly pick img
  const randomNum = genNum();
  // set up the img to bg
  bgImg(randomNum);
};

init();
