import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
axios.defaults.withCredentials = true

function LogIn() {
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  const submitForm = async (e) => {
    try {
      // 1. prevent the browser from submitting the form
      e.preventDefault()
      //2. filter the value error
      if (!e.target.email.value || !e.target.password.value) {
        setErrorMessage('either email or password is missing')
      }
      // 3. extract the content of the form
      let form = new FormData(e.target)
      // 4. convert form into an object
      let formObject = Object.fromEntries(form.entries())
      // 5. log the object to see what's inside
      console.log(formObject)
      const { data } = await axios.post(
        'http://localhost:4000/login',
        formObject
      )
      if (data.error) {
        setErrorMessage(data.error)
      } else {
        navigate('/')
      }
    } catch (error) {
      console.error(error)
      setErrorMessage(error.response.data.error)
    }
  }
  return (
    <div className="flex">
      <div className=" w-1/2">
        <img
          src="https://i.postimg.cc/fR70p2B5/Screenshot-2567-06-02-at-19-32-35.png"
          alt="kitchen"
          className=" w-full"
        />
      </div>
      <div className="flex justify-center items-center bg-slate-200 w-1/2">
        <div className=" bg-white px-48 py-40 pt-14">
          <Link to="/">
            <img
              src="https://i.postimg.cc/L6W3VbhW/foodswapblacklogotriangle-002.png"
              alt="foodswap logo"
              className="pl-5 h-40"
            />
          </Link>
          {/* Log In Form */}
          <form onSubmit={(e) => submitForm(e)}>
            <div className="py-3">
              <label>Email</label>
            </div>
            <input
              type="email"
              name="email"
              className="border w-full p-1 rounded"
              autoFocus
            />
            <div className="py-3">
              <label>Password</label>
            </div>
            <input
              type="password"
              name="password"
              className="border w-full p-1 rounded mb-8"
              autoFocus
            />
            <button className=" bg-orange-500 hover:bg-orange-300 w-full text-white mt-2 py-3">
              Log In
            </button>
          </form>
          <div className="flex mt-7 justify-center text-sm gap-3">
            <div className="">New to Food Swap ?</div>
            <Link to="/SignUp">
              <div className="text-orange-600">Create an account here</div>
            </Link>
          </div>
          {errorMessage && (
            <div className=" text-red-500 text-center text-xs mt-3">
              {errorMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LogIn
