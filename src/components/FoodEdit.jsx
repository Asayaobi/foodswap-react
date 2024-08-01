import Nav from './Nav'
import Footer from './Footer'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
axios.defaults.withCredentials = true

function FoodEdit() {
  const [food, setFood] = useState({})
  const params = useParams()
  const navigate = useNavigate()

  const getFood = async () => {
    try {
      let { data } = await axios.get(`http://localhost:4000/food/${params.id}`)
      console.log('response from get edit', data)
      if (!data.error) setFood(data)
    } catch (err) {
      console.error(err.message)
    }
  }

  const deleteFood = async () => {
    try {
      let { data } = await axios.delete(
        `http://localhost:4000/food/${params.id}`
      )
      navigate('/listings')
    } catch (err) {
      console.error(err.message)
    }
  }
  const patchFood = async (e) => {
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
      console.log('patch form object', formObject)
      await axios.patch(`http://localhost:4000/food/${params.id}`, formObject)
      navigate('/listings')
    } catch (err) {
      console.error(err.message)
    }
  }
  useEffect(() => {
    getFood()
  }, [])

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="relative flex-grow">
          <div className="absolute inset-0 bg-[url('https://preview.codeless.co/picante/default/wp-content/uploads/2018/07/home02_03-compressed.jpg')] bg-cover bg-center"></div>
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-center">
            <Nav />
            <div className="bg-slate-100 p-8 opacity-90 rounded shadow-lg max-w-4xl w-full mt-40 mb-8">
              <h1 className="text-2xl font-bold mb-2 md:mb-8 font-serif">
                Edit this Dish
              </h1>
              <form onSubmit={patchFood}>
                <div className="grid md:grid-cols-3 gap-4 lg:gap-8">
                  <div>
                    <div className="mb-4">
                      <label>Dish Name</label>
                      <input
                        type="text"
                        name="food_title"
                        className="border rounded w-full py-2 px-3"
                        placeholder={food.food_title}
                      />
                    </div>
                    <div className="mb-4">
                      <label>Culinary Origin</label>
                      <input
                        type="text"
                        name="country"
                        className="border rounded w-full py-2 px-3"
                        placeholder={food.country}
                      />
                    </div>
                    <div className="mb-4">
                      <label>Course Category</label>
                      <select
                        name="category"
                        className="border rounded w-full py-2 px-3"
                      >
                        <option value="">Course Category</option>
                        <option value="breakfast">Breakfast</option>
                        <option value="appetizer">Appetizer</option>
                        <option value="main dish">Main Dish</option>
                        <option value="dessert">Dessert</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label>Availability</label>
                      <select
                        name="available"
                        className="border rounded w-full py-2 px-3"
                      >
                        <option value="">Choose availability</option>
                        <option value="true">Ready to swap</option>
                        <option value="false">Not today</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <label>Ingredients</label>
                    <input
                      type="text"
                      name="ingredients"
                      className="border rounded w-full py-2 px-3"
                      placeholder={food.ingredients}
                    />
                    <label>Description</label>
                    <input
                      type="text"
                      name="description"
                      className="border rounded py-2 px-3 w-full pb-16 pr-16"
                      placeholder={food.description}
                    />
                    <label className="block mt-2">Images</label>
                    {food.images &&
                      food.images.map((image, index) => (
                        <input
                          key={index}
                          type="text"
                          name="image"
                          className="border rounded py-2 px-3 w-full mb-2"
                          placeholder={image}
                        />
                      ))}
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={deleteFood}
                        className="bg-red-500 hover:bg-orange-300 text-white mt-2 py-3 px-8 tracking-widest rounded-sm"
                      >
                        DELETE THIS DISH
                      </button>
                      <button className="bg-orange-500 hover:bg-orange-300 text-white mt-2 py-3 px-8 tracking-widest rounded-sm">
                        EDIT THIS DISH
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default FoodEdit
