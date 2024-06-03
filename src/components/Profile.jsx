import Nav from './Nav'
import Footer from './Footer'
function Profile() {
  return (
    <>
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-[url('https://preview.codeless.co/picante/default/wp-content/uploads/2018/07/home02_03-compressed.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-slate-100 p-8 opacity-90 rounded shadow-lg">
            <h1 className="text-2xl font-bold mb-8 font-serif">My Profile</h1>
            <form>
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <img
                    src="https://randomuser.me/api/portraits/women/16.jpg"
                    alt="profile pic"
                    className=" rounded-md"
                  />
                </div>
                <div className=" col-span-2">
                  <div className="mb-4">
                    <label className="block">First Name</label>
                    <input
                      type="text"
                      name="firstname"
                      className="border rounded w-full py-2 px-3"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block">Last Name</label>
                    <input
                      type="text"
                      name="lastname"
                      className="border rounded w-full py-2 px-3"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block">Profile Picture</label>
                    <input
                      type="text"
                      name="profile_image"
                      className="border rounded w-full py-2 px-3"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block">City</label>
                    <input
                      type="text"
                      name="city"
                      className="border rounded w-full py-2 px-3"
                    />
                  </div>

                  <div className="flex justify-end">
                    <button className="bg-orange-500 hover:bg-orange-300 text-white mt-2 py-3 px-4 tracking-widest">
                      UPDATE PROFILE
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Nav />
      </div>

      <Footer />
    </>
  )
}

export default Profile
