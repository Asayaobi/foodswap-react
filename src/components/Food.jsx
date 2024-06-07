import { useState } from 'react'
import Nav from './Nav'
import Reviews from './Reviews'
import Footer from './Footer'
import Swap from './Swap'

function Food() {
  const food = {
    food_id: 2,
    food_title: 'Tonkatsu Ramen',
    country: 'Japan',
    category: 'main dish',
    ingredients:
      'egg noodle, pork, seaweed, green onion, mushroom, soy sause, tare seasoning.',
    description: `This ramen features a rich, savory broth made from pork bones. The name "tonkotsu" literally means "pork bones" in Japanese. The broth gets its deep, flavorful taste and creamy, cloudy appearance from boiling the pork bones for up to eighteen hours. This slow cooking process results in a hearty, satisfying bowl of ramen that's sure to warm you up and leave you craving more.`,
    chef_id: 2,
    rating: 3,
    available: true,
    chef: {
      user_id: 2,
      profile_image: 'url',
      firstname: 'Justin',
      lastname: 'Bieber'
    },
    images: [
      'https://i1.wp.com/seonkyounglongest.com/wp-content/uploads/2020/09/Easy-Tonkotsu-26-mini.jpg',
      'https://i0.wp.com/www.angsarap.net/wp-content/uploads/2022/03/Tonkotsu-Ramen-Wide.jpg',
      'https://www.seriouseats.com/thmb/IBikLAGkkP2QVaF3vLIk_LeNqHM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rich-and-creamy-tonkotsu-ramen-broth-from-scratch-recipe-Diana-Chistruga-hero-6d318fadcca64cc9ac3e1c40fc7682fb.JPG',
      'https://www.seriouseats.com/thmb/GNFUxllntjgtfQiAd6lofC72JjY=/500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__20120227-tonkotsu-ramen-broth-pork-fat-24-1451c421c7d74cc08b0c2b3e26f1ec8f.jpg'
    ]
  }

  const [selectedImage, setSelectedImage] = useState(food.images[0])
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
        <div className="grid grid-rows-2 lg:grid-cols-2 my-10 mx-10 w-2/3 justify-start space-x-5">
          {/* Gallery */}
          <div className=" grid grid-rows-4 gap-2 bg-pink-300">
            <div className="grid row-span-3 aspect-square">
              <img
                src={selectedImage}
                alt="food pic"
                className=" w-full h-full object-cover"
              />
            </div>
            <div className=" grid grid-cols-3 gap-5 mt-3">
              {food.images.slice(1).map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt="food pic"
                    className=" w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Text */}
          <div className="grid grid-rows-5 items-center bg-purple-200">
            <div className="grid row-span-2 gap-4">
              <div className=" text-4xl font-serif font-extrabold">
                {food.food_title}
              </div>
              <div className=" text-2xl font-serif font-extrabold text-slate-400">
                {food.country}
              </div>
              <div className=" pb-3">{food.description}</div>
              <hr />
            </div>
            <div className="grid row-span-2 gap-4">
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
