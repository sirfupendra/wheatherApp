export default function WeatherCard({ data }) {
    if (!data) {
        return (
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-center">
                <p className="text-red-500">Weather data is unavailable.</p>
            </div>
        );
    }

    return (
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-center">
            <h2 className="text-2xl font-bold text-sky-800 mb-2">{data.city}</h2>
            <p className="text-xl text-gray-700 mb-1">
                {data.description}
            </p>
            <p className="text-3xl text-sky-700 font-semibold mb-1">
                {data.temperature}°C
            </p>
            <p className="text-gray-600">
                Humidity: {data.humidity}% | Wind: {data.windSpeed} m/s
            </p>
        </div>
    );
}