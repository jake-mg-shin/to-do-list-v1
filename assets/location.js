const coords_LS = "coords";
const api_key = "a339da6f28089d15cee7a8cb54084f1d";
const js_city = document.querySelector("#js-location"),
  js_temp = document.querySelector("#js-temp");

function autoRefresh() {
  // temp updates every 5 min
  setTimeout(() => {
    location.reload(true);
  }, 600000);
}

function getWeather(lat, lon) {
  // get temp at current location
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`
  )
    .then(res => {
      // read the data as json
      return res.json();
    })
    .then(json => {
      // get city and temp
      const city = json.name;
      const temp = json.main.temp;
      // add icons
      const icon1 = document.createElement("i");
      const icon2 = document.createElement("i");
      // add span tag => temp colour
      const span = document.createElement("span");

      // add icon1 as location while get city
      js_city.appendChild(icon1);
      icon1.setAttribute("class", "fas fa-map-marker-alt");
      icon1.innerHTML = ` ${city}`;

      // add icon2 in span while get temp
      js_temp.appendChild(span);
      span.appendChild(icon2);
      icon2.setAttribute("class", "fas fa-thermometer-half");

      span.setAttribute("id", "color");
      const color = document.querySelector("#color");
      // display above zero and sub-zero
      if (temp > 0) {
        // above zero
        color.setAttribute("class", "red");
      } else {
        // sub-zero
        color.setAttribute("class", "blue");
      }
      icon2.innerHTML = ` ${temp}`;
    });
}

function saveCoords(coordsObj) {
  // save data to local storage : setItem
  // json => string
  localStorage.setItem(coords_LS, JSON.stringify(coordsObj));
}

function handleGeoErr(err) {
  console.log(err);
}

function handleGeoSuccess(position) {
  // get lat and lon
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude: latitude,
    longitude: longitude
  };

  // saves geo data
  saveCoords(coordsObj);
  // get weather
  getWeather(latitude, longitude);
}

function askForCoords() {
  // need coordinates : latitude, longitude
  // location API
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoErr);
}

function loadCoords() {
  // loads saved data of coords : getItem
  const loadedCoords = localStorage.getItem(coords_LS);
  if (loadedCoords === null) {
    // if no data
    askForCoords();
  } else {
    // has data => get weather
    // string => json
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  // get location => weather(temperature)
  loadCoords();
  // page refresh for updating temp
  autoRefresh();
}

init();
