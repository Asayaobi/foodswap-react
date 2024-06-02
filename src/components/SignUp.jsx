import { Link } from 'react-router-dom'

function SignUp() {
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
          <div className="py-3">Email</div>
          <input
            type="email"
            name="email"
            className="border w-full p-1 rounded"
            autoFocus
          />
          <div className="py-3">Password</div>
          <input
            type="password"
            name="password"
            className="border w-full p-1 rounded"
            autoFocus
          />
          <div className="py-3">Profile Picture</div>
          <input
            type="text"
            name="profile_image"
            className="border w-full p-1 rounded"
            autoFocus
          />
          <div className="py-3">City</div>
          <input
            type="text"
            name="city"
            className="border w-full p-1 rounded mb-8"
            autoFocus
          />
          <button className=" bg-orange-500 hover:bg-orange-300 w-full text-white mt-2 py-3">
            Register
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignUp
