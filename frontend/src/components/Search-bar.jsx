import { useState } from "react"

export default function SearchBar({ onSearch }) {
  const [location, setLocation] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (location.trim()) {
      onSearch(location)
      setLocation("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex justify-center gap-2">
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter location"
        className="border border-gray-300 rounded-lg p-2 w-full sm:w-2/3"
      />
      <button
        type="submit"
        className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700"
      >
        Search
      </button>
    </form>
  )
}
