function Card(props) {
  const foodlist = props.food
  console.log('props', foodlist)
  return (
    <>
      <div className="bg-white shadow-lg">
        <div className="relative w-full pt-[100%]">
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
          <div className="bg-orange-500 rounded-sm hover:bg-yellow-500 mt-2">
            {foodlist.available ? (
              <button className=" bg-orange-500 hover:bg-yellow-500 text-white">
                ready to swap
              </button>
            ) : (
              <div className=" text-orange-500">not available</div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
