import Card from './Card'
import Nav from './Nav'
import Footer from './Footer'
function Bookings() {
  const request = [
    {
      food_id: 3,
      food_title: 'Paella de Valencia',
      country: 'Spain',
      category: 'main dish',
      ingredients:
        'rice, shrimps, mussels, squid, saffron, olive oil, tomato paste',
      description:
        "classic Spanish dish originating from the Valencia region. It's a flavorful and colorful rice dish traditionally cooked in a wide, shallow pan, known as a paellera.",
      chef_id: 12,
      rating: 5,
      available: true,
      swap: 'swap',
      url: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/d1bddb460487bad93ad5f7d28ff04db5/Derivates/445eb9ff2df8686c2bc965666d5613cea2aae79c.jpg'
    },
    {
      food_id: 24,
      food_title: 'Korean Corn Dogs',
      country: 'Korean',
      category: 'appetizer',
      ingredients: 'sausage, ketchup, kochujang spicy sauce',
      description: 'Korean Hot dog',
      chef_id: 12,
      rating: 4,
      available: true,
      swap: 'cancelled',
      url: 'https://i.pinimg.com/736x/01/e7/69/01e769100c0769f6f3ac33a8ea10d9b0.jpg'
    },
    {
      food_id: 25,
      food_title: 'Chipirones',
      country: 'Spain',
      category: 'appetizer',
      ingredients: 'squid, flour, sunflower oil, pepper, salt',
      description: 'One of Spanish famous Tapas',
      chef_id: 12,
      rating: 4,
      available: true,
      swap: 'pending',
      url: 'https://www.chaopescaoseafood.com/wp-content/uploads/2023/04/chipirones-andaluza.jpg'
    },
    {
      food_id: 2,
      food_title: 'Tonkatsu Ramen',
      country: 'Japan',
      category: 'main dish',
      ingredients:
        'egg noodle, pork, seaweed, green onion, mushroom, soy sause, tare seasoning.',
      description:
        'Tonkotsu ramen is a delicious and comforting dish that comes from Fukuoka, Japan, located on the Kyushu island. It\'s a specialty in both Fukuoka, where it\'s also known as Hakata ramen, and throughout Kyushu. This ramen features a rich, savory broth made from pork bones. The name "tonkotsu" literally means "pork bones" in Japanese. The broth gets its deep, flavorful taste and creamy, cloudy appearance from boiling the pork bones for up to eighteen hours. This slow cooking process results in a hearty, satisfying bowl of ramen that\'s sure to warm you up and leave you craving more.',
      chef_id: 2,
      rating: 3,
      available: true,
      swap: 'swap',
      url: 'https://www.seriouseats.com/thmb/GNFUxllntjgtfQiAd6lofC72JjY=/500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__20120227-tonkotsu-ramen-broth-pork-fat-24-1451c421c7d74cc08b0c2b3e26f1ec8f.jpg'
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
      swap: 'swap',
      url: 'https://images.food52.com/gXAkKavMTerv--4j3Kbl5b4VVfY=/2016x1344/filters:format(webp)/4af6259a-a896-4b8c-9755-c488ca771852--2021-1019_tempura_3x2_julia-gartland_297.jpg'
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
      swap: 'cancelled',
      url: 'https://images.food52.com/8ELFPLgqvPrbldfeAtQg7W3bA08=/2016x1344/filters:format(webp)/627abcfd-c1f9-4622-8baa-8a3c7388a28a--630_Sun-Dried_Tomato_Chorizo_Garlic_Shrimp_bright_half_pan_OTE.jpg'
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
      swap: 'pending',
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-36">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-36">
            {BookingCards}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Bookings
