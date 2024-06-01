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
      url: 'https://www.seriouseats.com/thmb/GNFUxllntjgtfQiAd6lofC72JjY=/500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__20120227-tonkotsu-ramen-broth-pork-fat-24-1451c421c7d74cc08b0c2b3e26f1ec8f.jpg'
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
      url: 'https://hips.hearstapps.com/hmg-prod/images/paella-index-64d108cdc9a44.jpg'
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
      url: 'https://www.unileverfoodsolutions.co.th/dam/global-ufs/mcos/SEA/calcmenu/recipes/TH-recipes/pasta-dishes/%E0%B8%9C%E0%B8%B1%E0%B8%94%E0%B9%84%E0%B8%97%E0%B8%A2%E0%B8%81%E0%B8%B8%E0%B9%89%E0%B8%87%E0%B8%AA%E0%B8%94/%E0%B8%9C%E0%B8%B1%E0%B8%94%E0%B9%84%E0%B8%97%E0%B8%A2%E0%B8%81%E0%B8%B8%E0%B9%89%E0%B8%87%E0%B8%AA%E0%B8%94_header.jpg'
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
      url: 'https://japanesetaste.com/cdn/shop/articles/how-to-make-gyoza-japanese-dumplings-at-home-japanese-taste.jpg'
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
      url: 'https://images.food52.com/8ELFPLgqvPrbldfeAtQg7W3bA08=/2016x1344/filters:format(webp)/627abcfd-c1f9-4622-8baa-8a3c7388a28a--630_Sun-Dried_Tomato_Chorizo_Garlic_Shrimp_bright_half_pan_OTE.jpg'
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
      url: 'https://images.food52.com/1BPfI35rInGwMm_E7fRVhfZn6vc=/2016x1344/filters:format(webp)/a5a735bb-4389-4739-b286-180be60ac251--2015-0106_pasta-with-garlic-parmesan-breadcrumbs-331.jpg'
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
      url: 'https://images.food52.com/gXAkKavMTerv--4j3Kbl5b4VVfY=/2016x1344/filters:format(webp)/4af6259a-a896-4b8c-9755-c488ca771852--2021-1019_tempura_3x2_julia-gartland_297.jpg'
    },
    {
      food_id: 9,
      food_title: 'Pad Kra Pow',
      country: 'Thailand',
      category: 'main dish',
      ingredients: 'pork, oyster sauce, holy basil, fish sauce, rice, egg',
      description:
        'Pad kra pao is a Thai holy basil stir fry that I think deserves the title: "National dish of Thailand". It’s a favourite of Thai people and Thai food lovers around the world, and if you\'re getting into Thai food, this has to be on your to-do list.',
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

  const listOfCards = foodlist.map((food, index) => (
    <Card key={index} food={food} />
  ))
  return (
    <div className="container mx-auto">
      <div>
        <Nav />
      </div>

      <Header />
      <Filter />
      <div className="grid justify-stretch pb-28 pt-10 px-48">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {listOfCards}
        </div>
      </div>
    </div>
  )
}

export default FoodList
