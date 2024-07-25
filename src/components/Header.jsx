import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBowlRice,
  faMobileScreenButton
} from '@fortawesome/free-solid-svg-icons'
import { faSlideshare } from '@fortawesome/free-brands-svg-icons'

function Header() {
  const isLoggedIn = localStorage.getItem('isLoggedIn')

  return (
    <>
      {/* booking or intro */}
      <div className="relative w-full h-32 md:h-40 lg:h-96 overflow-hidden">
        <div
          className=" absolute inset-0 bg-cover bg-center w-full object-cover"
          style={{
            backgroundImage: `url(https://preview.codeless.co/picante/default/wp-content/uploads/2018/04/shop_bg-compressed.jpg)`
          }}
        ></div>
        {/* header for front page */}
        <div className=" absolute inset-0 flex items-center justify-center">
          <img
            src="https://i.postimg.cc/YCX959b8/foodsw-ap-transparent-001.png"
            alt="logo"
            className="hidden lg:block lg:h-48"
          />
        </div>
      </div>
      {/* Welcome Message */}
      {!isLoggedIn && (
        <>
          <div
            className="relative grid place-items-center p-6 lg:p-20 space-x-3 lg:space-y-8"
            style={{
              backgroundImage: `url(https://www.paste-juice.com/assets/images/inerpage_2-1-2018.png)`
            }}
          >
            <div className="absolute inset-0 bg-white opacity-80 space-y-2"></div>
            <div className="relative lg:space-y-2">
              <div className="relative text-4xl lg:text-7xl font-serif text-orange-400">
                Welcome!
              </div>
              <div className="relative text-xl lg:text-3xl font-serif inline">
                to{' '}
              </div>
              <div className="relative lg:pl-2 font-extrabold text-2xl lg:text-4xl font-serif inline">
                food / swap
              </div>
            </div>
            <div className="relative text-center space-y-8 pb-20 px-5 md:px-10 lg:px-40">
              <div>
                Welcome to our vibrant community of culinary enthusiasts at Food
                swap. Our website is a delightful hub where home cooks gather to
                share the love and flavors of their favorite dishes. Whether
                you're passionate about perfecting your grandmother's lasagna
                recipe or experimenting with new flavors in your kitchen
                laboratory, there's a place for you here.
              </div>
              <div>
                Come, explore, and indulge in the delicious diversity of
                homemade meals. Together, let's create a symphony of flavors,
                one swap at a time!
              </div>
            </div>
          </div>
          <div className="relative">
            {/* bar with logos */}
            <div className="absolute inset-0 z-10 flex justify-items-center justify-around">
              <div className="flex items-center justify-center rounded-full h-20 md:h-28 lg:h-40 w-20 md:w-28 lg:w-40 bg-slate-900">
                <FontAwesomeIcon
                  icon={faMobileScreenButton}
                  className="text-white text-3xl lg:text-5xl"
                />
              </div>
              <div className="flex items-center justify-center rounded-full h-20 md:h-28 lg:h-40 w-20 md:w-28 lg:w-40 bg-slate-900">
                <FontAwesomeIcon
                  icon={faBowlRice}
                  className="text-white text-3xl lg:text-5xl"
                />
              </div>
              <div className="flex items-center justify-center rounded-full h-20 md:h-28 lg:h-40 w-20 md:w-28 lg:w-40 bg-slate-900">
                <FontAwesomeIcon
                  icon={faSlideshare}
                  className="text-white text-3xl lg:text-5xl"
                />
              </div>
            </div>
            {/* columns */}
            <div className="flex h-52 lg:h-72 pt-14 lg:pt-20 -mt-20">
              {/* sign up */}
              <div
                className="relative w-full place-content-center"
                style={{
                  backgroundImage: `url(https://preview.codeless.co/picante/default/wp-content/uploads/2018/04/port10.jpg)`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="absolute inset-0 bg-slate-800 opacity-60"></div>
                <div className="relative text-xs lg:text-xl text-center text-white lg:tracking-widest">
                  1. SIGN UP FOR FREE
                </div>
              </div>
              {/* post */}
              <div
                className="relative w-full place-content-center"
                style={{
                  backgroundImage: `url(https://preview.codeless.co/picante/default/wp-content/uploads/2018/04/port9.jpg)`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="absolute inset-0 bg-slate-800 opacity-60"></div>
                <div className="relative text-xs lg:text-xl text-center text-white lg:tracking-widest">
                  2. POST YOUR HOMECOOKED DISH
                </div>
              </div>
              {/* swap */}
              <div
                className="relative w-full place-content-center"
                style={{
                  backgroundImage: `url(https://preview.codeless.co/picante/default/wp-content/uploads/2018/04/port3.jpg)`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="absolute inset-0 bg-slate-800 opacity-60"></div>
                <div className="relative text-xs lg:text-xl text-center text-white lg:tracking-widest">
                  3. SWAP WITH OTHERS
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Header
