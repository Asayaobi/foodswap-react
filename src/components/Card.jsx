import { Link } from 'react-router-dom'

function Card(props) {
  const foodlist = props.food
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
            {foodlist.available ? (
              <button className=" bg-orange-500 hover:bg-yellow-500 w-full text-white mt-2">
                ready to swap
              </button>
            ) : (
              <div className=" text-gray-500">not available</div>
            )}
          </div>
        </div>
      </Link>
    </>
  )
}

export default Card
