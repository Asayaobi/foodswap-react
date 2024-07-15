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
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 md:gap-10 md:justify-between content-start md:mr-20 md:ml-14">
        <Link to="/">
          <img
            src="https://i.postimg.cc/QNw0m4dK/foodsw-ap-inline.png"
            alt="foodswap logo"
            className="pt-5 h-20 md:h-36 hover:animate-pulse"
          />
        </Link>
        <div className="gap-4 flex justify-center md:justify-end my-4 md:my-10 h-5 md:h-10">
          {isLoggedIn ? (
            <>
              <Link to="/listings">
                <button className="py-1 md:py-2 px-5 font-serif text-white text-xs md:text-xl border border-white hover:border-orange-400">
                  My Dish
                </button>
              </Link>
              <Link to="/bookings">
                <button className="py-1 md:py-2 px-5 font-serif text-white text-xs md:text-xl border border-white hover:border-orange-400">
                  Food Request
                </button>
              </Link>
              <Link to="/profile">
                <button className="py-1 md:py-2 px-5 font-serif text-white text-xs md:text-xl border border-white hover:border-orange-400">
                  My Profile
                </button>
              </Link>
              <button
                onClick={logout}
                className="py-1 md:py-2 px-5 font-serif text-white text-xs md:text-xl border border-white hover:border-orange-400"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link to="/">
                <button className="py-1 md:py-2 px-5 font-serif text-white text-xs md:text-xl border border-white hover:border-orange-400">
                  Home
                </button>
              </Link>
              <Link to="/login">
                <button className="py-1 md:py-2 px-5 font-serif text-white text-xs md:text-xl border border-white hover:border-orange-400">
                  Log In
                </button>
              </Link>
              <Link to="/signup">
                <button className="py-1 md:py-2 px-5 font-serif text-white text-xs md:text-xl border border-white hover:border-orange-400">
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
