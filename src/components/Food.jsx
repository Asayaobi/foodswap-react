import { useState, useEffect } from 'react'
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

  const getFood = async () => {
    let { data } = await axios.get('http://localhost:4000/food/1')
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
    <div className="container mx-auto">
      <div
        className="h-40 bg-center"
        style={{
          backgroundImage: `url(https://preview.codeless.co/picante/default/wp-content/uploads/2018/05/top_shop.jpg)`
        }}
      ></div>
      <Nav />
      <div className="flex justify-center">
        <div className="flex justify-start space-x-5 mx-32 my-28">
          {/* Gallery */}
          <div className=" grid grid-rows-4 gap-2 w-2/3">
            <div className="grid row-span-3 aspect-square">
              <img
                src={selectedImage}
                alt="food pic"
                className=" w-full h-full object-cover"
              />
            </div>
            <div className=" grid grid-cols-3 gap-2 mt-3">
              {food.images &&
                food.images.slice(1).map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt="food pic"
                      className=" w-full h-full object-cover cursor-pointer"
                      onClick={(event) => {
                        setSelectedImage(image)
                      }}
                    />
                  </div>
                ))}
            </div>
          </div>
          {/* Text */}
          <div className="grid grid-rows-5 items-center w-2/3">
            <div className="grid row-span-2 gap-4">
              <div className=" text-4xl font-serif font-extrabold">
                {food.food_title}
              </div>
              <div className=" text-2xl font-serif font-extrabold text-slate-500">
                {food.country}
              </div>
              <div className=" pb-3">{food.description}</div>
              <hr />
            </div>
            <div className="grid row-span-2 gap-4">
              <div className=" text-2xl font-serif font-extrabold">RATING</div>
              <div>
                {[...Array(food.rating)].map((star, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    className=" text-slate-500"
                  />
                ))}
              </div>
              <div className=" text-2xl font-serif font-extrabold">
                INGREDIENTS
              </div>
              <div>{food.ingredients}</div>
              <div className=" text-2xl font-serif font-extrabold">
                CATEGORIES
              </div>
              <div className="pb-3">{food.category}</div>
              <hr />
            </div>
            <Swap />
          </div>
        </div>
      </div>
      <Reviews />
      <Footer />
    </div>
  )
}

export default Food
