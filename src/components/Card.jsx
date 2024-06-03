import { Link } from 'react-router-dom'

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
      <Link to={`/food/${foodlist.food_id}`}>
        <div className="bg-white shadow-lg hover:bg-slate-100">
          <div className="relative aspect-square">
            <img
              src={foodlist.url}
              alt="food pic"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="p-4 text-center">
            <div className="text-lg font-semibold">{foodlist.food_title}</div>
            <div className="text-gray-500">{foodlist.country}</div>
            <hr />
            {/* button */}
            {!isListing && !isBooking && !isRequested ? (
              <button className=" bg-orange-500 hover:bg-yellow-500 w-full text-white mt-2">
                ready to swap
              </button>
            ) : null}
            {/* From Listing */}
            {isListing ? (
              <div className="flex justify-between px-2 gap-1 mt-3 ml-1">
                <Link to={`/food/${foodlist.food_id}`}>
                  <button className=" bg-slate-700 px-10 text-white hover:bg-slate-500">
                    View
                  </button>
                </Link>
                <Link to={`/food/${foodlist.food_id}/edit`}>
                  <button className=" bg-slate-700 px-10 text-white hover:bg-slate-500">
                    Edit
                  </button>
                </Link>
              </div>
            ) : null}
            {/* From Booking */}
            {isBooking ? (
              foodlist.swap === 'swap' ? (
                <div className=" bg-green-800 px-10 text-white hover:bg-green-900 tracking-widest">
                  SWAPPED
                </div>
              ) : foodlist.swap === 'pending' ? (
                <button className=" bg-orange-500 hover:bg-yellow-500 w-full text-white mt-2">
                  PENDING
                </button>
              ) : (
                <button className=" bg-slate-700 hover:bg-slate-500 w-full text-white mt-2">
                  CANCELLED
                </button>
              )
            ) : null}
            {/* From Request */}
            {isRequested ? (
              foodlist.swap === 'swap' ? (
                <button className=" bg-green-800 hover:bg-green-900 w-full text-white mt-2 tracking-widest">
                  SWAPPED
                </button>
              ) : foodlist.swap === 'pending' ? (
                <button className=" bg-orange-500 hover:bg-yellow-500 w-full text-white mt-2">
                  PENDING
                </button>
              ) : (
                <button className=" bg-slate-700 hover:bg-slate-500 w-full text-white mt-2">
                  CANCELLED
                </button>
              )
            ) : null}
          </div>
        </div>
      </Link>
    </>
  )
}

export default Card
