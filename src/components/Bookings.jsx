import Card from './Card'
import Nav from './Nav'
import Footer from './Footer'
function Bookings() {
  const request = [
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

  const RequestCards = request.map((food, index) => (
    <Card key={index} food={food} isRequested={true} />
  ))

  const bookings = [
    {
      booking_id: 5,
      food_id: 1,
      user_id: 12,
      message: 'big portion please',
      booking_date: '2024-06-14T22:00:00.000Z',
      swap: false,
      food_title: 'Pizza Margherita ',
      country: 'Italy',
      chef_id: 11,
      rating: 5,
      available: true,
      url: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/09/99/8d/b7.jpg'
    }
  ]
  const BookingCards = bookings.map((food, index) => (
    <Card key={index} food={food} isBooking={true} />
  ))

  return (
    <>
      <Nav />
      {/* Incoming Request Section */}
      <div
        className="py-40"
        style={{
          backgroundImage: `url(https://preview.codeless.co/picante/default/wp-content/uploads/2018/07/home02-compressed.jpg)`
        }}
      >
        <div className="bg-slate-100 p-8 opacity-90 mx-24 rounded shadow-lg">
          <h1 className="text-2xl font-bold mb-8 font-serif">
            Incoming Swap Request
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {RequestCards}
          </div>
        </div>
      </div>
      {/* Booking Status Section */}
      <div className="py-40 bg-slate-100">
        <div className="bg-white p-8 opacity-90 mx-24 rounded shadow-lg">
          <h1 className="text-2xl font-bold mb-8 font-serif">
            Your Swap Request Status
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {BookingCards}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Bookings
