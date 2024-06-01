import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <div className="absolute inset-0 grid grid-cols-2 gap-10 justify-between content-start mx-28">
        <Link to="/">
          <img
            src="https://i.postimg.cc/bYChMmRP/triangle.png"
            alt="foodswap logo"
            className="pl-5 h-40"
          />
        </Link>

        <div className="gap-10 flex justify-end">
          <Link to="/">
            <button className="p-2 h-10 items-center font-bold text-white text-xs md:text-base my-10 hover:text-orange-200">
              Home
            </button>
          </Link>
          <Link to="/listings">
            <button className="p-2 h-10 items-center font-bold text-white text-xs md:text-base my-10  hover:text-orange-200">
              My Kitchen
            </button>
          </Link>
          <Link to="/profile">
            <button className="p-2 h-10 items-center font-bold text-white text-xs md:text-base my-10  hover:text-orange-200">
              My Profile
            </button>
          </Link>
          <Link to="/profile">
            <button className="h-10 items-center border border-white font-bold text-white text-xs md:text-base my-10 px-8  hover:text-orange-200">
              Log Out
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Nav
