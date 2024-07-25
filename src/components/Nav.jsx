import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
axios.defaults.withCredentials = true

function Nav() {
  const isLoggedIn = localStorage.getItem('isLoggedIn')
  const navigate = useNavigate()

  const logout = async (e) => {
    try {
      const { data } = await axios.get('http://localhost:4000/logout')
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
            src="https://i.postimg.cc/QNw0m4dK/foodsw-ap-inline.png"
            alt="foodswap logo"
            className="pt-5 h-20 md:h-36 hover:animate-pulse"
          />
        </Link>
        <div className="flex flex-col lg:flex-row lg:justify-end  lg:my-4 lg:h-5 lg:gap-4">
          {isLoggedIn ? (
            <>
              <Link to="/listings">
                <button className="py-1 md:py-2 px-5 font-serif text-white text-xs lg:text-xl border border-white hover:border-orange-400">
                  My Dish
                </button>
              </Link>
              <Link to="/bookings">
                <button className="py-1 md:py-2 px-5 font-serif text-white text-xs lg:text-xl border border-white hover:border-orange-400">
                  Food Request
                </button>
              </Link>
              <Link to="/profile">
                <button className="py-1 md:py-2 px-5 font-serif text-white text-xs lg:text-xl border border-white hover:border-orange-400">
                  My Profile
                </button>
              </Link>
              <button
                onClick={logout}
                className="py-1 md:py-2 lg:py-6 px-5 font-serif text-white text-xs lg:text-xl border border-white hover:border-orange-400 flex items-center justify-center"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link to="/">
                <button className="py-1 md:py-2 px-5 font-serif text-white text-xs lg:text-xl border border-white hover:border-orange-400">
                  Home
                </button>
              </Link>
              <Link to="/login">
                <button className="py-1 md:py-2 px-5 font-serif text-white text-xs lg:text-xl border border-white hover:border-orange-400">
                  Log In
                </button>
              </Link>
              <Link to="/signup">
                <button className="py-1 md:py-2 px-5 font-serif text-white text-xs lg:text-xl border border-white hover:border-orange-400">
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
