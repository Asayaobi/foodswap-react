import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <div className="absolute inset-0 grid grid-cols-2 gap-10 justify-between content-start mr-20 ml-14">
        <Link to="/">
          <img
            src="https://i.postimg.cc/MphWSVpT/whitetrianglelogo-001.png"
            alt="foodswap logo"
            className="pl-5 h-40"
          />
        </Link>

        <div className="gap-4 flex justify-end">
          <Link to="/">
            <button className="px-8 h-10 items-center font-bold text-white text-xs md:text-base my-10 hover:border border-white">
              Home
            </button>
          </Link>
          <Link to="/listings">
            <button className="p-2 h-10 items-center font-bold text-white text-xs md:text-base my-10  hover:border border-white">
              My Kitchen
            </button>
          </Link>
          <Link to="/bookings">
            <button className="p-2 h-10 items-center font-bold text-white text-xs md:text-base my-10  hover:border border-white">
              Swap Request
            </button>
          </Link>
          <Link to="/profile">
            <button className="p-2 h-10 items-center font-bold text-white text-xs md:text-base my-10  hover:border border-white">
              My Profile
            </button>
          </Link>
          <Link to="/">
            <button className="h-10 items-center font-bold text-white text-xs md:text-base my-10 px-8  hover:border border-white">
              Log Out
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Nav
