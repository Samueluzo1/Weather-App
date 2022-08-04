let weather = {
  apikey: "4960b1910bf9f38618a753c61195502c",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apikey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    // console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(" .city").innerText = "Weather in " + name;
    document.querySelector(" .icon").src =
      "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h ";
    document.querySelector(".weather").classList.remove("loading");
    // document.body.style.backgroundImage =
    // "url('./img/fd311c46fc22e9f7ecc35cdb40741462.jpg" + name + "')";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

// To make the button work //
document.querySelector(".search button").addEventListener("click", function () {
  weather.search(); // Automatically get the content of the searchbar and then search for it
});

// Adding event listener to the input box for when I press the enter key
document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("London");
