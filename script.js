async function getWeather() {

    const city = document.getElementById("city").value.trim();

    if (!city) {
        alert("Please enter a city");
        return;
    }

    const apiKey = "7f062daf0fb08bc3030508ddba57fe45";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.cod != 200) {
            document.getElementById("result").style.display = "block";
            document.getElementById("result").innerHTML =
                `❌ ${data.message}`;
            return;
        }

        document.getElementById("result").style.display = "block";

        document.getElementById("result").innerHTML = `
            <h2>${data.name}</h2>
            <p>🌡 Temperature: <b>${data.main.temp} °C</b></p>
            <p>🌥 Weather: <b>${data.weather[0].main}</b></p>
            <p>💧 Humidity: <b>${data.main.humidity}%</b></p>
            <p>🌬 Wind: <b>${data.wind.speed} m/s</b></p>
        `;

    } catch (err) {
        document.getElementById("result").style.display = "block";
        document.getElementById("result").innerHTML = "Error ❌";
    }
}