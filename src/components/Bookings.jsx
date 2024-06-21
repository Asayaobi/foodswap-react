import Card from './Card'
import Nav from './Nav'
import Footer from './Footer'
import { useState, useEffect } from 'react'
import axios from 'axios'
axios.defaults.withCredentials = true
function Bookings() {
  //incoming food request
  const [request, setRequest] = useState([])
  //response from swap request
  const [bookings, setBookings] = useState([])
  const getFoodRequest = async () => {
    try {
      let { data } = await axios.get('http://localhost:4000/request')
      console.log('request', data)
      if (!data.error && Array.isArray(data)) {
        setRequest(data)
      } else {
        setRequest([]) // Ensure request is an array
      }
    } catch (error) {
      console.error('Error fetching food request:', error)
      setRequest([]) // Ensure request is an array
    }
  }
  const getBookings = async () => {
    try {
      let { data } = await axios.get('http://localhost:4000/bookings')
      console.log('booking status', data)
      if (!data.error) {
        setBookings(data)
      } else {
        setBookings([])
      }
    } catch (error) {
      console.error('Error fetching bookings')
      setBookings([])
    }
  }
  useEffect(() => {
    getFoodRequest()
  }, [])
  useEffect(() => {
    getBookings()
  }, [])

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
            {request && request.length > 0 ? (
              request.map((food, index) => (
                <Card key={index} food={food} isRequested={true} />
              ))
            ) : (
              <div>No incoming requests</div>
            )}
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
            {bookings && bookings.length > 0 ? (
              bookings.map((food, index) => (
                <Card key={index} food={food} isBooking={true} />
              ))
            ) : (
              <div>You havn't made any swap</div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Bookings
