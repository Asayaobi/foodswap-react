import Card from './Card'
import Nav from './Nav'
import Footer from './Footer'
import { useState, useEffect } from 'react'
import axios from 'axios'
axios.defaults.withCredentials = true
function Bookings() {
  const [request, setRequest] = useState([])
  const getFoodRequest = async () => {
    let { data } = await axios.get('http://localhost:4000/request')
    console.log('request', data)
    setRequest(data)
  }
  useEffect(() => {
    getFoodRequest()
  }, [])
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
