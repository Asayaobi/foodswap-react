function Swap({ foodId }) {
  console.log('foodId', foodId)
  return (
    <div className=" text-center px-4">
      <form>
        <button className=" bg-yellow-500 text-white w-full hover:bg-yellow-700 tracking-widest py-5 rounded-md">
          REQUEST TO SWAP
        </button>
      </form>
    </div>
  )
}

export default Swap
