import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'

function Card(props) {
  const foodlist = props.food
  const isListing = props.isListing
  const isBooking = props.isBooking
  const isRequested = props.isRequested
  console.log('props', foodlist)
  console.log('props booking', isBooking)
  console.log('listing', isListing)
  return (
    <>
      <div className="bg-white shadow-lg hover:bg-slate-100 rounded-b-md">
        <div className="relative aspect-square">
          <Link to={`http://localhost:3001/food/${foodlist.food_id}`}>
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
              {[1, 2, 3, 4, 5].map((star) => (
                <FontAwesomeIcon
                  key={star}
                  icon={star <= foodlist.rating ? faStar : ''}
                  className=" text-slate-400"
                  size="sm"
                />
              ))}
            </div>
          </div>
          {/* button */}
          {!isListing && !isBooking && !isRequested ? (
            <button className=" bg-orange-400 hover:bg-yellow-500 w-full text-white mt-2 pb-4 rounded-b-md">
              READY TO SWAP
            </button>
          ) : null}
          {/* From Listing */}
          {isListing ? (
            <Link to={`http://localhost:3001/food/${foodlist.food_id}/edit`}>
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
              <form>
                <select>
                  <option>Pending</option>
                  <option>Approve Swap</option>
                  <option>Cancel Request</option>
                </select>
              </form>
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
