import Card from './Card'
import Nav from './Nav'
import Footer from './Footer'
import { useState, useEffect } from 'react'
import axios from 'axios'
axios.defaults.withCredentials = true

function Listings() {
  const [listings, setListings] = useState([])

  const getListings = async () => {
    let { data } = await axios.get('http://localhost:4000/listings')
    setListings(data)
  }

  useEffect(() => {
    getListings()
  }, [])

  const listOfCards = listings.map((food, index) => (
    <Card key={index} food={food} isListing={true} />
  ))

  return (
    <>
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-[url('https://preview.codeless.co/picante/default/wp-content/uploads/2018/07/home02_03-compressed.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <Nav />
          <div className="bg-slate-100 p-8 opacity-90 rounded shadow-lg max-w-4xl w-full">
            <h1 className="text-2xl font-bold mb-8 font-serif">My Dish</h1>
            <form>
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
                    <input
                      type="text"
                      name="category"
                      className="border rounded w-full py-2 px-3"
                    />
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
                      name="availability"
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
                    className="border rounded py-2 px-3 w-full mb-2"
                  />
                  <input
                    type="text"
                    className="border rounded py-2 px-3 w-full mb-2"
                  />
                  <input
                    type="text"
                    className="border rounded py-2 px-3 w-full mb-2"
                  />
                  <input
                    type="text"
                    className="border rounded py-2 px-3 w-full mb-2"
                  />
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
            {listOfCards}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Listings
