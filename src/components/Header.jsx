import { Link } from 'react-router-dom'

function Header() {
  const isLoggedIn = localStorage.getItem('isLoggedIn')

  return (
    <>
      {/* booking or intro */}
      <div className="relative h-96">
        <div
          className=" absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://preview.codeless.co/picante/default/wp-content/uploads/2018/04/shop_bg-compressed.jpg)`
          }}
        ></div>
        {/* header for front page */}
        <div className=" absolute inset-0 flex items-center justify-center">
          <img
            src="https://i.postimg.cc/tCCKNF0c/circle.png"
            // or https://i.postimg.cc/tCCKNF0c/circle.png https://i.postimg.cc/bYChMmRP/triangle.png https://i.postimg.cc/6p44gY1P/final-foodswap-001.png https://i.postimg.cc/ZnqCccdV/final-option2-001.png
            alt="logo"
            className=" h-96"
          />
        </div>
      </div>
      {!isLoggedIn && (
        <div className="flex justify-center px-32">
          {/* Welcome Message */}
          <div className=" bg-white p-20 w-2/3 text-center space-y-8">
            <div className=" space-y-2">
              <div className=" text-7xl font-serif text-orange-400">
                Welcome!
              </div>
              <div className=" text-3xl font-serif inline">to </div>
              <div className="pl-2 font-extrabold text-4xl font-serif inline">
                food / swap
              </div>
              <div className="  text-orange-400 font-serif italic">
                “Where Home-Cooked Goodness meets Sustainably Shared”
              </div>
            </div>
            <div className=" space-y-8">
              <div className=" italic">
                Welcome to our vibrant community of culinary enthusiasts at Food
                swap. Our website is a delightful hub where home cooks gather to
                share the love and flavors of their favorite dishes. Whether
                you're passionate about perfecting your grandmother's lasagna
                recipe or experimenting with new flavors in your kitchen
                laboratory, there's a place for you here.
              </div>
              <div className=" italic">
                At Food swap, we celebrate the art of home cooking and the joy
                of sharing meals with others. Join us to swap your signature
                dishes with fellow food lovers, discovering new tastes and
                forging meaningful connections along the way. From comforting
                classics to bold culinary creations, every dish tells a story,
                and we're here to help you share yours
              </div>
              <div className=" italic">
                Come, explore, and indulge in the delicious diversity of
                homemade meals. Together, let's create a symphony of flavors,
                one swap at a time!
              </div>
            </div>
            <div className=" flex justify-center mb-0">
              <img
                src="https://i.postimg.cc/3xrKrt3t/signaturemasterchef-003.jpg"
                alt="master chef signature"
                className=" h-36"
              />
            </div>
          </div>
          {/* Log In Column - show only when it's not Logged in */}
          <div className="w-2/3 ">
            <div className=" pt-36">
              <div className="grid grid-rows">
                <img
                  src="https://img.theepochtimes.com/assets/uploads/2022/06/27/sharing-food.jpg"
                  alt="sharing food"
                />
                <div className="flex">
                  <Link to="/login">
                    <button className=" bg-yellow-500 text-white text-3xl py-2 px-6 tracking-widest  hover:bg-orange-700 rounded-bl-md">
                      CLICK HERE TO LOG IN
                    </button>
                  </Link>
                  <Link to="/signup">
                    <button className=" bg-orange-400 text-white text-3xl py-2 px-6 tracking-widest  hover:bg-orange-700 rounded-br-md">
                      SIGN UP FOR FREE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
