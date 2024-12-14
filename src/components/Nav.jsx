import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
axios.defaults.withCredentials = true

function Nav() {
  const isLoggedIn = localStorage.getItem('isLoggedIn')
  const navigate = useNavigate()

  const logout = async (e) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/logout`
      )
      console.log({ data })
      localStorage.removeItem('isLoggedIn')
      navigate('/')
    } catch (error) {}
  }
  return (
    <div>
      <div className="absolute inset-0 grid grid-cols-2 justify-between lg:mr-20 mr-3 lg:ml-14">
        <Link to="/">
          <img
            src="https://i.ibb.co/RvQ6jQs/foodswap-inline.png"
            alt="foodswap logo"
            className="pt-5 h-20 md:h-36 hover:animate-pulse"
          />
        </Link>
        <div className="justify-self-end flex flex-col mt-2 lg:flex-row lg:justify-end lg:my-4 lg:h-5 gap-1 lg:gap-4">
          {isLoggedIn ? (
            <>
              <Link to="/listings">
                <button className="w-32 lg:h-12 py-1 md:py-2 font-serif text-white text-xs lg:text-xl border border-white hover:border-orange-400 flex items-center justify-center">
                  My Dish
                </button>
              </Link>
              <Link to="/bookings">
                <button className="w-32 lg:h-12 py-1 md:py-2 font-serif text-white text-xs lg:text-xl border border-white hover:border-orange-400 flex items-center justify-center">
                  Food Request
                </button>
              </Link>
              <Link to="/profile">
                <button className="w-32 lg:h-12 py-1 md:py-2 font-serif text-white text-xs lg:text-xl border border-white hover:border-orange-400 flex items-center justify-center">
                  My Profile
                </button>
              </Link>
              <button
                onClick={logout}
                className="w-32 lg:h-12 py-1 md:py-2 font-serif text-white text-xs lg:text-xl border border-white hover:border-orange-400 flex items-center justify-center"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="w-32 lg:h-12 py-1 md:py-2 font-serif text-white text-xs lg:text-xl border border-white hover:border-orange-400 flex items-center justify-center">
                  Log In
                </button>
              </Link>
              <Link to="/signup">
                <button className="w-32 lg:h-12 py-1 md:py-2 font-serif text-white text-xs lg:text-xl border border-white hover:border-orange-400 flex items-center justify-center">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Nav
