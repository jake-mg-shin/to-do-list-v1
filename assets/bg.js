const container = document.querySelector("#container");

// Numbers of total pics
const numbersOfImg = 4;

// pick a img to bg img
bgImg = imgNum => {
  container.setAttribute(
    "style",
    `background-image: url("src/images/${imgNum}.jpg")`
  );
  container.classList.add("bgImg");
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
