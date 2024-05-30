import Nav from './Nav'
import Header from './Header'
import Filter from './Filter'
import Card from './Card'

function FoodList() {
  let food = [
    {
      food_id: 1,
      food_title: 'Pizza Margherita ',
      country: 'Italy',
      category: 'main dish',
      ingredients: 'flour, tomato, cheese, basil leaves, olive oil',
      description: 'authentic homemade margarita pizza from Naples',
      chef_id: 1,
      rating: 5,
      available: true,
      url: 'https://imagevars.gulfnews.com/2022/09/12/margherita-pizza_18330f9d21a_large.JPG'
    },
    {
      food_id: 2,
      food_title: 'Tonkatsu Ramen',
      country: 'Japan',
      category: 'main dish',
      ingredients:
        'egg noodle, pork, seaweed, green onion, mushroom, soy sause, tare seasoning.',
      description:
        'a popular Japanese ramen noodle soup known for its rich and creamy pork-based broth. ',
      chef_id: 2,
      rating: 3,
      available: true,
      url: 'https://visit.marketing-italia.eu/uploads/visitnaples/uploads_articoli/paragrafo/2018020515GINO0027-min.jpg'
    },
    {
      food_id: 3,
      food_title: 'Paella de Valencia',
      country: 'Spain',
      category: 'main dish',
      ingredients:
        'rice, shrimps, mussels, squid, saffron, olive oil, tomato paste',
      description:
        "classic Spanish dish originating from the Valencia region. It's a flavorful and colorful rice dish traditionally cooked in a wide, shallow pan, known as a paellera.",
      chef_id: 3,
      rating: 5,
      available: true,
      url: 'https://i0.wp.com/www.angsarap.net/wp-content/uploads/2022/03/Tonkotsu-Ramen-Wide.jpg'
    }
  ]
  return (
    <>
      <Nav />
      <Header />
      <Filter />
      <div className="container mx-auto grid grid-cols-3 justify-items-center gap-10 bg-pink-100">
        <div className=" bg-pink-400 w-80 h-64">
          <Card />
        </div>
        <div className=" bg-pink-400 w-80 h-64">card2</div>
        <div className=" bg-pink-400 w-80 h-64">card3</div>
        <div className=" bg-pink-400 w-80 h-64">card4</div>
        <div className=" bg-pink-400 w-80 h-64">card5</div>
        <div className=" bg-pink-400 w-80 h-64">card6</div>
      </div>
    </>
  )
}

export default FoodList
