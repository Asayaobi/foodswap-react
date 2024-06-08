import axios from 'axios'
import { useState, useEffect } from 'react'
function Filter() {
  const [countries, setCountries] = useState([])
  const [categories, setCategories] = useState([])

  const getCountries = async () => {
    let { data } = await axios.get(`http://localhost:4000/country`)
    setCountries(data)
  }
  const getCategories = async () => {
    let { data } = await axios.get(`http://localhost:4000/category`)
    setCategories(data)
  }

  useEffect(() => {
    getCountries()
  }, [])

  useEffect(() => {
    getCategories()
  }, [])
  return (
    <>
      <form>
        <div className="bg-slate-50 flex justify-center gap-4 px-48">
          {/* country */}
          <select
            name="country"
            className="border border-gray-300 rounded ps-9 w-full p-2"
          >
            <option value="">Cuisine Type</option>
            {countries &&
              countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
          </select>
          {/* category */}
          <select
            name="category"
            className="border border-gray-300 rounded ps-9 w-full p-2"
          >
            <option value="">Course Category</option>
            {categories &&
              categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
          </select>
          {/* search */}
          <input
            name="search"
            className="border border-gray-300 rounded ps-9 w-full p-2"
            type="text"
            placeholder="keywords..."
          />
          {/* button */}
          <button className="flex relative bg-slate-700 text-white rounded-md items-center p-5 border h-11 sm:w-full lg:w-40">
            Search
          </button>
        </div>
      </form>
    </>
  )
}

export default Filter
