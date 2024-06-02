import Card from './Card'
import Nav from './Nav'
import Footer from './Footer'
function Listings() {
  const listings = [
    {
      food_id: 9,
      food_title: 'Pad Kra Pow',
      country: 'Thailand',
      category: 'main dish',
      ingredients: 'pork, oyster sauce, holy basil, fish sauce, rice, egg',
      description: `Pad kra pao is a Thai holy basil stir fry that I think deserves the title: "National dish of Thailand". It’s a favourite of Thai people and Thai food lovers around the world, and if you\'re getting into Thai food, this has to be on your to-do list.`,
      chef_id: 10,
      rating: 3,
      available: true,
      url: 'https://thejournalistclub.com/wp-content/uploads/2022/06/1-%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%81%E0%B8%B0%E0%B9%80%E0%B8%9E%E0%B8%A3%E0%B8%B2-.jpeg'
    },
    {
      food_id: 10,
      food_title: 'Mango Sticky Rice',
      country: 'Thailand',
      category: 'dessert',
      ingredients:
        'rice, mango, coconut milk, palm sugar, pandan, dried soy beans',
      description:
        'Thai Mango Sticky Rice with glutinous coconut rice and fresh, sweet ripe mangoes with a coconut sauce. A delicious Thai dessert!',
      chef_id: 10,
      rating: 4,
      available: true,
      url: 'https://www.allrecipes.com/thmb/yeUwoCu2irwqGDb-3PHJHnaX2C4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-150313-thai-sweet-sticky-rice-with-mango-khao-neeo-mamuang-ddmfs-4x3-hero-0da7a9b26cce4d07aea44f2f2b6abd95.jpg'
    }
  ]

  const listOfCards = listings.map((food, index) => (
    <Card key={index} food={food} isListing={true} />
  ))

  return (
    <>
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-[url('https://preview.codeless.co/picante/default/wp-content/uploads/2018/07/home02_03-compressed.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-slate-100 p-8 opacity-90 rounded shadow-lg">
            <h1 className="text-2xl font-bold mb-8 font-serif">My Dish</h1>
            <form className=" opacity-100">
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="mb-4">
                    <label>Dish Name</label>
                    <input
                      type="text"
                      name="food_title"
                      className="border rounded w-full py-2 px-3"
                    />
                  </div>
                  <div className="mb-4">
                    <label>Culinary Origin</label>
                    <input
                      type="text"
                      name="country"
                      className="border rounded w-full py-2 px-3"
                    />
                  </div>
                  <div className="mb-4">
                    <label>Course Category</label>
                    <input
                      type="text"
                      name="category"
                      className="border rounded w-full py-2 px-3"
                    />
                  </div>
                  <label>Ingredients</label>
                  <input
                    type="text"
                    name="ingredients"
                    className="border rounded w-full py-2 px-3"
                  />
                </div>
                <div className=" col-span-2">
                  <label className="block">Description</label>
                  <input
                    type="text"
                    name="description"
                    className="border rounded py-2 px-3 w-full pb-16 pr-16"
                  />
                  <label className="block mt-2">Images</label>
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
                    className="border rounded  py-2 px-3 w-full mb-2"
                  />
                  <input
                    type="text"
                    className="border rounded  py-2 px-3 w-full mb-2"
                  />
                  <div className="flex justify-end">
                    <button className="bg-orange-500 text-white mt-2 py-3 px-8 tracking-widest hover:bg-orange-300">
                      ADD THIS DISH
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Nav />
      </div>
      {/* Cards Session */}
      <div className=" text-center bg-slate-100 py-4">
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
