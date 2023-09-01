document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('weather-form');
    const input = document.querySelector('input[type="text"]');
    const weatherDiv = document.getElementById("weather");

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const city = input.value.trim();

            const apiKey = "60e4c061b78d9b993bf7cd6c2e8ce637"
            fetch(`https://api.openweathermap.org/data/2.5/weather?id=524901&appid=60e4c061b78d9b993bf7cd6c2e8ce637`)
            .then(reponse => reponse.json())
            .then(data => {
                const weather = {
                    city: data.name,
                    description: data.weather[0].description,
                    temperature: data.main.temp,
                    humidity: data.main.humidity,
                    icon: data.weather[0].icon,
                };
                displayWeather(weather);
            })
            .catch(error => console.error(error));
        });
});



function displayWeather(weather){
    let weatherDiv;
    weatherDiv.innerHTML = '';
    const card = document.createElement('div');
    card.classList.add('weather-card');

    const title = document.createElement('h2');
    title.textContent = weather.city;
    card.appendChild(title);

    const icon = document.createElement('img');
    icon.src = `http://openweathermap.org/img/wn/${weather.icon}.png`;
    card.appendChild(icon);

    const description = document.createElement('p');
    description.textContent = weather.description;
    card.appendChild(description);

    const temperature = document.createElement('p');
    temperature.textContent = `Température: ${weather.temperature} °C`;
    card.appendChild(temperature);

    const humidity = document.createElement('p');
    humidity.textContent = `Humidité: ${weather.humidity}%`;
    card.appendChild(humidity);

    weatherDiv.appendChild(card);
    weatherDiv.style.display = 'block';
};