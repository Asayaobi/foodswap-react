import axios from 'axios'
import { useState, useEffect } from 'react'
function Filter() {
  const [cities, setCities] = useState([])
  const [country, setCountry] = useState([])
  const getCities = async () => {
    let { data } = await axios.get(`http://localhost:4000/city`)
    setCities(data)
  }
  const getCountry = async () => {
    let { data } = await axios.get(`http://localhost:4000/country`)
    setCountry(data)
  }
  useEffect(() => {
    getCountry()
  }, [])
  useEffect(() => {
    getCities()
  }, [])
  return (
    <>
      <form>
        <div className="bg-slate-50 flex justify-center gap-4 px-48">
          {/* location */}
          <select
            name="location"
            className="border border-gray-300 rounded ps-9 w-full p-2"
          >
            <option value="">Any Location</option>
            {cities &&
              cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
          </select>
          {/* country */}
          <select
            name="country"
            className="border border-gray-300 rounded ps-9 w-full p-2"
          >
            <option value="">Cuisine Type</option>
            {country &&
              country.map((c, index) => (
                <option key={index} value={c}>
                  {c}
                </option>
              ))}
          </select>
          {/* category */}
          <select
            name="category"
            className="border border-gray-300 rounded ps-9 w-full p-2"
          >
            <option value="">Course Category</option>
          </select>
          {/* keyword */}
          <input
            name="keyword"
            className="border border-gray-300 rounded ps-9 w-full p-2"
            type="text"
            placeholder="keywords..."
          />
          {/* button */}
          <button className="flex relative bg-slate-100 items-center p-5 border h-11 sm:w-full lg:w-40">
            Search
          </button>
        </div>
      </form>
    </>
  )
}

export default Filter
