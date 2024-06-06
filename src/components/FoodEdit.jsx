import Nav from './Nav'
import Footer from './Footer'
function FoodEdit() {
  const food = {
    food_id: 1,
    food_title: 'Pizza Margherita ',
    country: 'Italy',
    category: 'main dish',
    ingredients: 'flour, tomato, cheese, basil leaves, olive oil',
    description: 'authentic homemade margarita pizza from Naples',
    available: true,
    images: [
      'https://i1.wp.com/seonkyounglongest.com/wp-content/uploads/2020/09/Easy-Tonkotsu-26-mini.jpg',
      'https://i0.wp.com/www.angsarap.net/wp-content/uploads/2022/03/Tonkotsu-Ramen-Wide.jpg',
      'https://www.seriouseats.com/thmb/IBikLAGkkP2QVaF3vLIk_LeNqHM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rich-and-creamy-tonkotsu-ramen-broth-from-scratch-recipe-Diana-Chistruga-hero-6d318fadcca64cc9ac3e1c40fc7682fb.JPG',
      'https://www.seriouseats.com/thmb/GNFUxllntjgtfQiAd6lofC72JjY=/500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__20120227-tonkotsu-ramen-broth-pork-fat-24-1451c421c7d74cc08b0c2b3e26f1ec8f.jpg'
    ]
  }

  return (
    <>
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-[url('https://preview.codeless.co/picante/default/wp-content/uploads/2018/07/home02_03-compressed.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <Nav />
          <div className="bg-slate-100 p-8 opacity-90 rounded shadow-lg max-w-4xl w-full">
            <h1 className="text-2xl font-bold mb-8 font-serif">
              Edit this Dish
            </h1>
            <form>
              <div className="grid grid-cols-3 gap-8">
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
                    <input
                      type="text"
                      name="category"
                      className="border rounded w-full py-2 px-3"
                      placeholder={food.category}
                    />
                  </div>
                  <div className="mb-4">
                    <label>Availability</label>
                    <select
                      name="availability"
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
                  <input
                    type="text"
                    className="border rounded py-2 px-3 w-full mb-2"
                    placeholder={food.images[0] ? food.images[0] : ''}
                  />
                  <input
                    type="text"
                    className="border rounded py-2 px-3 w-full mb-2"
                    placeholder={food.images[1] ? food.images[1] : ''}
                  />
                  <input
                    type="text"
                    className="border rounded py-2 px-3 w-full mb-2"
                    placeholder={food.images[2] ? food.images[2] : ''}
                  />
                  <input
                    type="text"
                    className="border rounded py-2 px-3 w-full mb-2"
                    placeholder={food.images[3] ? food.images[3] : ''}
                  />
                  <div className="flex justify-end">
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
      <Footer />
    </>
  )
}

export default FoodEdit
