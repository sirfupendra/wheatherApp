import { useState } from "react"
import axios from "axios"
import SearchBar from "./components/Search-bar"
import WeatherCard from "./components/Weather-card"
import { Loader2 } from "lucide-react"

export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const searchWeather = async (location) => {
    setLoading(true)
    setError("")

    try {
      // Append the location directly to the URL path
      const response = await axios.get(`http://localhost:3000/weather/${encodeURIComponent(location)}`)
      setWeatherData(response.data)
    } catch (err) {
      setError("Failed to fetch weather data. Please try again.")
      console.error("Error fetching weather:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-sky-50 flex flex-col items-center p-4 sm:p-8">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-sky-800 mb-8 mt-10">Weather Forecast</h1>

        <SearchBar onSearch={searchWeather} />

        <div className="mt-10 w-full flex justify-center">
          {loading ? (
            <div className="flex flex-col items-center">
              <Loader2 className="h-12 w-12 text-sky-600 animate-spin" />
              <p className="mt-4 text-sky-700">Fetching weather data...</p>
            </div>
          ) : error ? (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">{error}</div>
          ) : weatherData ? (
            <WeatherCard data={weatherData} />
          ) : (
            <div className="text-center text-gray-500">
              <p>Enter a location to see the weather forecast</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}