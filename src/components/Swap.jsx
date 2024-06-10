import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
axios.defaults.withCredentials = true

function Swap({ foodId }) {
  const [swap, setSwap] = useState(false)
  const navigate = useNavigate()
  console.log('foodId', foodId)
  const formObject = {
    food_id: foodId
  }
  const submitForm = async (e) => {
    try {
      e.preventDefault()
      await axios.post('http://localhost:4000/bookings', formObject)
      setSwap(true)
      //redirect to bookings after 1.5 seconds
      setTimeout(() => {
        navigate('/bookings')
      }, 1500)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className=" text-center px-4">
      <form onSubmit={(e) => submitForm(e)}>
        {!swap ? (
          <button className=" bg-yellow-500 text-white w-full hover:bg-yellow-700 tracking-widest py-5 rounded-md">
            REQUEST TO SWAP
          </button>
        ) : (
          <div className=" bg-green-500 text-white w-full hover:bg-yellow-700 tracking-widest py-5 rounded-md">
            REQUEST SENT
          </div>
        )}
      </form>
    </div>
  )
}

export default Swap
