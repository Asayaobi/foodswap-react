import { Link } from 'react-router-dom'

function Card(props) {
  const foodlist = props.food
  const isListing = props.isListing
  console.log('props', foodlist)
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
            ) : (
              <button className=" bg-orange-500 hover:bg-yellow-500 w-full text-white mt-2">
                ready to swap
              </button>
            )}
          </div>
        </div>
      </Link>
    </>
  )
}

export default Card
