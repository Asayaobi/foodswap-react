import Nav from './Nav'
import Header from './Header'
import Filter from './Filter'
import Card from './Card'

function FoodList() {
  let foodlist = [
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
    },
    {
      food_id: 4,
      food_title: 'Pad Thai',
      country: 'Thailand',
      category: 'main dish',
      ingredients:
        'rice noodle, shrimps, tamarind sauce, fish sauce, palm sugar, bean sprouts, lime, peanuts',
      description:
        'Thai noodle stir fry with a sweet-savoury-sour sauce scattered with crushed peanuts.',
      chef_id: 10,
      rating: 4,
      available: true,
      url: 'https://www.seriouseats.com/thmb/IBikLAGkkP2QVaF3vLIk_LeNqHM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rich-and-creamy-tonkotsu-ramen-broth-from-scratch-recipe-Diana-Chistruga-hero-6d318fadcca64cc9ac3e1c40fc7682fb.JPG'
    },
    {
      food_id: 5,
      food_title: 'Gyoza',
      country: 'Japan',
      category: 'appetizer',
      ingredients: 'minced pork, soy sauce, flour, spring onion',
      description:
        'Gyoza are Japanese pan-fried dumplings that are crisp and golden on the bottom and juicy inside. These meat-filled treats are easy to fold using one of the methods I show here. They’re so delicious served with my savory dipping sauce.',
      chef_id: 1,
      rating: 3,
      available: true,
      url: 'https://www.seriouseats.com/thmb/GNFUxllntjgtfQiAd6lofC72JjY=/500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__20120227-tonkotsu-ramen-broth-pork-fat-24-1451c421c7d74cc08b0c2b3e26f1ec8f.jpg'
    },
    {
      food_id: 6,
      food_title: 'Gambas al Ajillo',
      country: 'Spain',
      category: 'appetizer',
      ingredients: 'shrimp, garlic, saffron, olive oil',
      description:
        'Gambas al Ajillo or Spanish garlic shrimp is popular for good reason! Big juicy shrimp, swimming in tasty olive oil and garlic sauce. It is bright, garlicy, spicy and rich in the best way possible. Perfect with some crusty bread!',
      chef_id: 2,
      rating: 5,
      available: true,
      url: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/11/f7/d1/f8.jpg'
    },
    {
      food_id: 7,
      food_title: 'Parmigiano Pasta',
      country: 'Italy',
      category: 'main dish',
      ingredients: 'pasta, garlic, parmigiano, breadcrumbs, olive oil',
      description:
        'Home made linguine with ricotta and milk, plus a topping of bread crumbs, garlic, parsley, butter, and Parmigiano.',
      chef_id: 5,
      rating: 3,
      available: true,
      url: 'https://blog.nannybag.com/wp-content/uploads/2020/02/best-pizzas-Naples-margherita-50-kalo-copie.jpg'
    },
    {
      food_id: 8,
      food_title: 'Shrimp Tempura',
      country: 'Japan',
      category: 'main dish',
      ingredients:
        ' all-purpose flour, sprimp, panko breadcrums, eggs, soy sauce',
      description:
        'Tempura is a typical Japanese dish that usually consists of seafood and vegetables that have been coated in a thin batter and deep fried.',
      chef_id: 2,
      rating: 4,
      available: true,
      url: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/09/99/8d/b7.jpg'
    }
  ]

  const listOfCards = foodlist.map((food, index) => (
    <Card key={index} food={food} />
  ))
  return (
    <div className="container mx-auto">
      <Nav />
      <Header />
      <Filter />
      <div className="grid grid-cols-3 justify-items-center gap-10 bg-pink-100">
        {listOfCards}
      </div>
    </div>
  )
}

export default FoodList
