import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import axios from 'axios'

function Card(props) {
  const foodlist = props.food
  const isListing = props.isListing
  const isBooking = props.isBooking
  const isRequested = props.isRequested
  console.log('props', foodlist)
  //update swap request
  const updateSwapStatus = async (e, bookingId) => {
    try {
      e.preventDefault()
      const formObject = {
        booking_id: bookingId,
        swap: e.target.value
      }
      console.log('formObject', formObject)
      let { data } = await axios.patch('http://localhost:4000/swap', formObject)
      console.log('response data', data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className="bg-white shadow-lg hover:bg-slate-100 rounded-b-md">
        <div className="relative aspect-square">
          <Link to={`/food/${foodlist.food_id}`}>
            <img
              src={foodlist.url}
              alt="food pic"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </Link>
        </div>
        <div className="pt-4 text-center">
          <div className="text-lg font-semibold">{foodlist.food_title}</div>
          <hr />

          <div className="flex justify-center gap-5">
            <div className="text-slate-500">{foodlist.country}</div>
            <div>
              {[...Array(foodlist.rating)].map((star, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  className=" text-slate-500"
                />
              ))}
            </div>
          </div>
          {/* button */}
          {!isListing && !isBooking && !isRequested ? (
            <Link to={`/food/${foodlist.food_id}/`}>
              <button className=" bg-orange-400 hover:bg-yellow-500 w-full text-white mt-2 pb-4 rounded-b-md">
                READY TO SWAP
              </button>
            </Link>
          ) : null}
          {/* From Listing */}
          {isListing ? (
            <Link to={`/food/${foodlist.food_id}/edit`}>
              <button className=" bg-slate-700  hover:bg-yellow-500 w-full text-white mt-2 pb-4 rounded-b-md">
                EDIT
              </button>
            </Link>
          ) : null}
          {/* From Booking */}
          {isBooking ? (
            foodlist.swap === 'swap' ? (
              <div className=" bg-green-800 px-10 text-white tracking-widest pb-4 rounded-b-md">
                SWAPPED
              </div>
            ) : foodlist.swap === 'pending' ? (
              <button className=" bg-slate-400 w-full text-white mt-2 pb-4 rounded-b-md">
                PENDING
              </button>
            ) : (
              <button className="  w-full  mt-2 pb-4 rounded-b-md">
                CANCELLED
              </button>
            )
          ) : null}
          {/* From Request */}
          {isRequested ? (
            foodlist.swap !== 'swap' ? (
              <select
                name="swap"
                onChange={(e) => updateSwapStatus(e, foodlist.booking_id)}
              >
                <option value="pending">Pending</option>
                <option value="swap">Approve Swap</option>
                <option value="cancel">Cancel Request</option>
              </select>
            ) : (
              <div className=" bg-green-800 px-10 text-white hover:bg-green-900 tracking-widest pb-4 rounded-b-md">
                SWAPPED
              </div>
            )
          ) : null}
        </div>
      </div>
    </>
  )
}

export default Card
