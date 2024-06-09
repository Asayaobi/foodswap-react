import axios from 'axios'
import { useState, useEffect } from 'react'
function Filter({ setFoodList }) {
  const [cities, setCities] = useState([])
  const [countries, setCountries] = useState([])
  const [categories, setCategories] = useState([])
  const getCities = async () => {
    let { data } = await axios.get(`http://localhost:4000/city`)
    setCities(data)
  }
  const getCountries = async () => {
    let { data } = await axios.get(`http://localhost:4000/country`)
    setCountries(data)
  }
  const getCategories = async () => {
    let { data } = await axios.get(`http://localhost:4000/category`)
    setCategories(data)
  }
  //function to prevent default then get data to api
  const submitForm = async (e) => {
    try {
      e.preventDefault()
      //making query for url
      //encodeURIComponent removes spaces between values
      let queryArray = []
      if (e.target.city.value) {
        queryArray.push(`city=${encodeURIComponent(e.target.city.value)}`)
      }
      if (e.target.country.value) {
        queryArray.push(`country=${e.target.country.value}`)
      }
      if (e.target.category.value) {
        queryArray.push(`category=${e.target.category.value}`)
      }
      if (e.target.search.value) {
        queryArray.push(`search=${e.target.search.value}`)
      }
      let url = `http://localhost:4000/food?${queryArray.join('&')}`
      const { data } = await axios.get(url)
      setFoodList(data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getCities()
  }, [])
  useEffect(() => {
    getCountries()
  }, [])

  useEffect(() => {
    getCategories()
  }, [])
  return (
    <>
      <form onSubmit={submitForm}>
        <div className="bg-slate-50 flex justify-center gap-4 px-48">
          {/* city */}
          <select
            name="city"
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
