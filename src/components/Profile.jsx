import { useState, useEffect } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import axios from 'axios'
axios.defaults.withCredentials = true

function Profile() {
  const [user, setUser] = useState({})
  const getUser = async () => {
    try {
      let { data } = await axios.get('http://localhost:4000/profile')
      setUser(data)
    } catch (err) {
      console.error(err.message)
    }
  }
  const patchUser = async (e) => {
    try {
      e.preventDefault()
      const form = new FormData(e.target)
      const formObject = Object.fromEntries(form.entries())
      await axios.patch('http://localhost:4000/profile', formObject)
      window.location.reload()
    } catch (err) {
      console.error(err.message)
    }
  }
  useEffect(() => {
    getUser()
  }, [])
  return (
    <>
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-[url('https://preview.codeless.co/picante/default/wp-content/uploads/2018/07/home02_03-compressed.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 flex items-center justify-center  z-10">
          <Nav />
          <div className="bg-slate-100 p-8 opacity-90 rounded shadow-lg">
            <h1 className="text-2xl font-bold mb-8 font-serif">My Profile</h1>
            <form onSubmit={patchUser}>
              <div className="grid grid-cols-3 gap-8">
                {/* Display profile image  */}
                <div>
                  <img
                    src={user.profile_image}
                    alt="profile pic"
                    className=" rounded-md"
                  />
                </div>
                <div className=" col-span-2">
                  <div className="mb-4">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstname"
                      className="border rounded w-full py-2 px-3"
                      placeholder={user.firstname}
                    />
                  </div>
                  <div className="mb-4">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lastname"
                      className="border rounded w-full py-2 px-3"
                      placeholder={user.lastname}
                    />
                  </div>
                  <div className="mb-4">
                    <label>Profile Picture</label>
                    <input
                      type="text"
                      name="profile_image"
                      className="border rounded w-full py-2 px-3"
                      placeholder={user.profile_image}
                    />
                  </div>
                  <div className="mb-4">
                    <label>City</label>
                    <input
                      type="text"
                      name="city"
                      className="border rounded w-full py-2 px-3"
                      placeholder={user.city}
                    />
                  </div>
                  <div className="flex justify-end">
                    <button className="bg-orange-500 hover:bg-orange-300 text-white mt-2 py-3 px-4 tracking-widest rounded-sm">
                      UPDATE PROFILE
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Profile
