import Card from './Card'
import Nav from './Nav'
import Footer from './Footer'
import { useState, useEffect } from 'react'
import axios from 'axios'
axios.defaults.withCredentials = true

function Listings() {
  const [listings, setListings] = useState([])
  const [food, createFood] = useState({})
  const [errorMessage, setErrorMessage] = useState('')
  const submitForm = async (e) => {
    try {
      e.preventDefault()
      const formObject = {
        food_title: e.target.food_title.value,
        country: e.target.country.value,
        category: e.target.category.value,
        ingredients: e.target.ingredients.value,
        description: e.target.description.value,
        available: e.target.available.value,
        images: new FormData(e.target).getAll('image')
      }
      console.log(formObject)
      const { data } = await axios.post(
        'http://localhost:4000/food',
        formObject
      )
      createFood(data)
      console.log('response data', data)
      if (data.error) {
        setErrorMessage(data.error)
      }
    } catch (error) {
      console.error(error)
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.error)
      } else {
        setErrorMessage('An unexpected error occurred. Please try again.')
      }
    }
  }
  const getListings = async () => {
    try {
      let { data } = await axios.get('http://localhost:4000/listings')
      if (!data.error && Array.isArray(data)) {
        setListings(data)
      } else {
        setListings([])
      }
    } catch (error) {
      console.error('Error fetching food listings', error)
      setListings([])
    }
  }

  useEffect(() => {
    getListings()
  }, [])

  return (
    <>
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-[url('https://preview.codeless.co/picante/default/wp-content/uploads/2018/07/home02_03-compressed.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <Nav />
          <div className="bg-slate-100 p-8 opacity-90 rounded shadow-lg max-w-4xl w-full">
            <h1 className="text-2xl font-bold mb-8 font-serif">My Dish</h1>
            <form onSubmit={(e) => submitForm(e)}>
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="mb-4">
                    <label className="block mb-2">Dish Name</label>
                    <input
                      type="text"
                      name="food_title"
                      className="border rounded w-full py-2 px-3"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2">Culinary Origin</label>
                    <input
                      type="text"
                      name="country"
                      className="border rounded w-full py-2 px-3"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2">Course Category</label>
                    <select
                      name="category"
                      className="border rounded w-full py-2 px-3"
                    >
                      <option value="">Course Category</option>
                      <option value="breakfasr">breakfast</option>
                      <option value="appetizer">appetizer</option>
                      <option value="main dish">main dish</option>
                      <option value="dessert">dessert</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2">Ingredients</label>
                    <input
                      type="text"
                      name="ingredients"
                      className="border rounded w-full py-2 px-3"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2">Availability</label>
                    <select
                      name="available"
                      className="border rounded w-full py-2 px-3"
                    >
                      <option value="true">Ready to swap</option>
                      <option value="false">Not today</option>
                    </select>
                  </div>
                </div>
                <div className="col-span-2">
                  <label className="block mb-2">Description</label>
                  <input
                    type="text"
                    name="description"
                    className="border rounded py-2 px-3 w-full mb-4 pb-16 pr-16"
                  />
                  <label className="block mb-2 mt-2">Images</label>
                  <input
                    type="text"
                    name="image"
                    className="border rounded py-2 px-3 w-full mb-2"
                  />
                  <input
                    type="text"
                    name="image"
                    className="border rounded py-2 px-3 w-full mb-2"
                  />
                  <input
                    type="text"
                    name="image"
                    className="border rounded py-2 px-3 w-full mb-2"
                  />
                  <input
                    type="text"
                    name="image"
                    className="border rounded py-2 px-3 w-full mb-2"
                  />
                  {errorMessage && (
                    <div className="flex justify-start text-sm text-red-500">
                      {errorMessage}
                    </div>
                  )}
                  <div className="flex justify-end">
                    <button className="bg-orange-500 hover:bg-orange-300 text-white mt-2 py-3 px-8 tracking-widest">
                      ADD THIS DISH
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Cards Session */}
      <div className="text-center bg-slate-100 py-4">
        <div className="grid justify-stretch pb-28 pt-10 px-48">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {listings && listings.length > 0 ? (
              listings.map((food, index) => (
                <Card key={index} food={food} isListing={true} />
              ))
            ) : (
              <>
                <div>No food listed.</div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Listings
