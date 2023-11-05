const changeLocation = document.getElementById("change-location");
const card = document.getElementById("card");
const details = document.getElementById("details");
const weatherIcon = document.getElementById("weather-icon");
const overlay = document.getElementById("overlay");

changeLocation.city.focus();

function updateUI(weather) {
  details.innerHTML = `
<h5 class="mb-3">${weather.name} ${weather.sys.country}</h5>
<p class="mb-3">${weather.weather[0].main}</p>
<div class="display-4 mb-3">
<span>${Math.round(weather.main.temp)}</span>
<span>&deg;C</span>
</div>
`;

  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");

    weatherIcon.src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  }
}
const getWeather = async (city) => {
  updateUI(await getData(city));
};

changeLocation.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = e.target[0].value.trim();

  if (data.length) {
    getWeather(data);

    changeLocation.city.style.border = "";
  } else {
    card.classList.add('d-none')
    changeLocation.city.style.border = "3px solid red";
  }

  changeLocation.reset();
});
