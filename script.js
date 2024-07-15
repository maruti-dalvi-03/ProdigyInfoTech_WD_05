async function getWeather() {
    const location = document.getElementById('locationInput').value;
    if (location === '') {
        alert('Please enter a location');
        return;
    }

    const apiKey = 'bd5e378503939ddaee76f12ad7a97608';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Location not found');
        }

        const data = await response.json();
        document.getElementById('locationName').innerText = data.name;
        document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
        document.getElementById('conditions').innerText = `Conditions: ${data.weather[0].description}`;

        document.querySelector('.weather-info').style.display = 'block';
    } catch (error) {
        alert(error.message);
    }
}
