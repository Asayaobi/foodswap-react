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
        <div className=" bg-white px-10 py-10 pt-8">
          <div className="flex justify-center">
            <Link to="/">
              <img
                src="https://i.postimg.cc/L6W3VbhW/foodswapblacklogotriangle-002.png"
                alt="foodswap logo"
                className="pl-5 h-40"
              />
            </Link>
          </div>
          {/* Log In Form */}
          <form>
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
              className="border w-full p-1 rounded"
              autoFocus
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
            <button className=" bg-orange-500 hover:bg-orange-300 w-full text-white mt-2 py-3 rounded-md">
              Register
            </button>
          </form>
          <div className="flex mt-7 justify-center text-sm gap-3">
            <div className="">Already have an account ?</div>
            <Link to="/LogIn">
              <div className="text-orange-600">Log In here</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
