import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import Nav from './Nav'
import Reviews from './Reviews'
import Footer from './Footer'
import Swap from './Swap'

function Food() {
  const [food, setFood] = useState({})
  const [selectedImage, setSelectedImage] = useState('')
  const { id } = useParams()

  const getFood = async () => {
    let { data } = await axios.get(`http://localhost:4000/food/${id}`)
    setFood(data)
  }
  useEffect(() => {
    getFood()
  }, [])
  useEffect(() => {
    if (food.images && food.images.length > 0) {
      setSelectedImage(food.images[0])
    }
  }, [food])
  return (
    <div>
      <div
        className="h-40 bg-center"
        style={{
          backgroundImage: `url(https://preview.codeless.co/picante/default/wp-content/uploads/2018/05/top_shop.jpg)`
        }}
      ></div>
      <Nav />
      <div className="flex justify-center my-14 lg:mx-72 lg:my-24">
        <div className="grid lg:grid-cols-2 mx-4 md:mx-10 lg:mx-36">
          {/* Gallery */}
          <div className="grid grid-rows-3 place-items-start">
            <div className="grid row-span-2 aspect-square">
              <img
                src={selectedImage}
                alt="food pic"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2 mt-3 lg:mt-12">
              {food.images &&
                food.images.slice(1).map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt="food pic"
                      className="w-full h-full object-cover cursor-pointer aspect-square relative z-10"
                      onClick={(event) => {
                        setSelectedImage(image)
                      }}
                    />
                  </div>
                ))}
            </div>
          </div>
          {/* Text */}
          <div className="items-center ml-4 md:ml-6 lg:ml-10">
            <div className="gap-4">
              <div className="text-2xl md:text-4xl font-serif font-extrabold">
                {food.food_title}
              </div>
              <div className="text-xl font-serif font-extrabold text-slate-500">
                {food.country}
              </div>
              <div className="pb-3">{food.description}</div>
              <hr />
            </div>
            <div className="my-2">
              <div className="flex gap-5">
                <div className="text-lg font-serif font-extrabold">RATING</div>
                <div>
                  {[...Array(food.rating)].map((star, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      className=" text-slate-500 pt-1"
                    />
                  ))}
                </div>
              </div>
              <div className="flex gap-5">
                <div className="text-lg font-serif font-extrabold">
                  CATEGORIES
                </div>
                <div>{food.category}</div>
              </div>

              <div className="text-lg font-serif font-extrabold">
                INGREDIENTS
              </div>
              <div className="pt-1">{food.ingredients}</div>
              <hr />
            </div>
            <div className="py-3">
              <Swap foodId={food.food_id} />
            </div>
          </div>
        </div>
      </div>
      <Reviews />
      <Footer />
    </div>
  )
}

export default Food
