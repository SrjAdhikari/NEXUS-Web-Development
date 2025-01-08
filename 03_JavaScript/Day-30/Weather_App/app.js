const button = document.querySelector("button");
const input = document.querySelector("input");
const weatherInfo = document.querySelector(".weather-info");

const showWeather = (data) => {
    weatherInfo.innerHTML = `
        <hr>
        <h2>${data.location.name}</h2>
        <p>Temperature : ${data.current.temp_c} °C</p>
        <p>Condition : ${data.current.condition.text}</p>
        <p>Humidity : ${data.current.humidity}%</p>
        <p>Wind Speed : ${data.current.wind_kph} km/h</p>
    `;
}

button.addEventListener("click", () => {
    const location = input.value;
    const forcastURL = fetch(`http://api.weatherapi.com/v1/current.json?key=cb6538f8a8fc4df1be492634250201&q=${location}&aqi=yes`);

    // Consume the promise using ".then()" method
    forcastURL
        .then ((response) => {
            return response.json();
        })
        .then((data) => {
            showWeather(data);
        });
});