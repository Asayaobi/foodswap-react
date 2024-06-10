import axios from 'axios'
axios.defaults.withCredentials = true

function Swap({ foodId }) {
  console.log('foodId', foodId)
  const formObject = {
    food_id: foodId
  }
  const submitForm = async (e) => {
    try {
      e.preventDefault()
      const { data } = await axios.post(
        'http://localhost:4000//bookings',
        formObject
      )
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className=" text-center px-4">
      <form onSubmit={(e) => submitForm(e)}>
        <button className=" bg-yellow-500 text-white w-full hover:bg-yellow-700 tracking-widest py-5 rounded-md">
          REQUEST TO SWAP
        </button>
      </form>
    </div>
  )
}

export default Swap
