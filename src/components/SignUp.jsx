import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
axios.defaults.withCredentials = true

function SignUp() {
  const [validEmail, setValidEmail] = useState(true)
  const [validPassword, setValidPassword] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate()
  //functions
  //checks if email has @ and . validEmail is true
  const validateEmail = (email) => {
    if (email.includes('@') && email.includes('.')) {
      setValidEmail(true)
    } else {
      setValidEmail(false)
    }
  }
  //checks if password is longer than 6 characters
  const validatePassword = (password) => {
    if (password.length > 6) {
      setValidPassword(true)
    } else {
      setValidPassword(false)
    }
  }
  //submit the form
  const submitForm = async (e) => {
    try {
      if (validEmail && validPassword) {
        e.preventDefault()
        const formContent = {
          firstname: e.target.firstname.value,
          lastname: e.target.lastname.value,
          email: e.target.email.value,
          password: e.target.password.value,
          profile_image: e.target.profile_image.value,
          city: e.target.city.value
        }
        console.log('formcontent', formContent)
        let { data } = await axios.post(
          'http://localhost:4000/signup',
          formContent
        )
        console.log('response from data', data)
        if (data.error) {
          setErrorMessage(data.error)
        } else {
          localStorage.setItem('isLoggedIn', true)
          navigate('/')
        }
      } else {
        setErrorMessage('Please complete the form carefuly.')
      }
    } catch (error) {
      console.error(error)
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.error)
      } else {
        setErrorMessage('An unexpected error occurred. Please try again.')
      }
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
      <div className="flex justify-center items-center w-1/2">
        <div className="border rounded-md px-10 pb-10 pt-8">
          <div className="flex justify-center">
            <Link to="/">
              <img
                src="https://i.postimg.cc/QNybcRwy/cleaned-inline-orange-logo-with-black-text.png"
                alt="foodswap logo"
                className="h-40"
              />
            </Link>
          </div>
          {/* Sign Up Form */}
          <form onSubmit={(e) => submitForm(e)}>
            <div className="py-3">Name</div>
            <div className=" grid grid-cols-3 gap-3">
              <input
                type="text"
                name="firstname"
                placeholder="first name"
                className="border p-1 rounded"
                autoFocus
              />
              <input
                type="text"
                name="lastname"
                placeholder="last name"
                className="border p-1 rounded grid col-span-2"
                autoFocus
              />
            </div>
            <div className="py-3">
              <label>Email</label>
              {!validEmail && (
                <span className="ml-1 text-red-500 text-sm">Invalid Email</span>
              )}
            </div>
            <input
              type="email"
              name="email"
              className="border w-full p-1 rounded"
              autoFocus
              onChange={(e) => validateEmail(e.target.value)}
            />
            <div className="py-3">
              <label>Password</label>
              {!validPassword && (
                <span className="ml-1 text-red-500 text-sm">
                  Password must be longer than 6 characters
                </span>
              )}
            </div>
            <input
              type="password"
              name="password"
              className="border w-full p-1 rounded"
              autoFocus
              onChange={(e) => validatePassword(e.target.value)}
            />
            <div className="py-3">
              <label>Profile Picture</label>
            </div>
            <input
              type="text"
              name="profile_image"
              className="border w-full p-1 rounded"
              autoFocus
            />
            <div className="py-3">
              <label>City</label>
            </div>
            <input
              type="text"
              name="city"
              className="border w-full p-1 rounded mb-8"
              autoFocus
            />
            <button className=" bg-amber-500 hover:bg-orange-500 w-full text-white mt-2 py-3 rounded-md">
              Register
            </button>
          </form>
          <div className="flex mt-7 justify-center text-sm gap-3">
            <div className="">Already have an account ?</div>
            <Link to="/LogIn">
              <div className="text-amber-600 hover:text-orange-700">
                Log In here
              </div>
            </Link>
          </div>
          {errorMessage && (
            <div className=" text-center text-red-500 text-sm">
              {errorMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SignUp
