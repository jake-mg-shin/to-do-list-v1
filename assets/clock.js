const clock = document.querySelector("#js-clock");

getTime = () => {
  // get date
  const date = new Date();
  const hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();
  // avoid all items of time display issue : need 0
  clock.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
};

init = () => {
  // get time
  getTime();
  // time interval every 1s
  setInterval(getTime, 1000);
};

init();
