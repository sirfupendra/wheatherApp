const axios = require('axios');

exports.getWeatherByCity = async (req, res) => {
    const city = req.params.city;
    const apikey = process.env.weather_api_key; // Ensure this matches your .env file
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    console.log(`API URL: ${apiUrl}`);

    try {
        const response = await axios.get(apiUrl); // Renamed `res` to `response` to avoid conflict
        const data = response.data;
        console.log(data);

        const weatherData = {
            city: data.name, // Corrected access to city name
            temperature: (data.main.temp - 273.15).toFixed(2), // Convert Kelvin to Celsius
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
        };

        console.log(weatherData);
        res.status(200).json(weatherData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error fetching weather data' });
    }
};