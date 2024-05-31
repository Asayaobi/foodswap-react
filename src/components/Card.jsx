function Card(props) {
  const foodlist = props.food
  console.log('props', foodlist)
  return (
    <>
      <div className="grid grid-rows-2 w-80">
        <div className=" bg-purple-500 h-80">1</div>
        <div className=" bg-purple-400 h-28">
          <div>
            <div>{foodlist.food_title}</div>
          </div>
          <div>{foodlist.country}</div>
          <hr />
          <div>{foodlist.available ? 'available' : 'not available'}</div>
        </div>
      </div>
    </>
  )
}

export default Card
