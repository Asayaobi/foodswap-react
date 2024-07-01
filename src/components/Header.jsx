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
            src="https://i.postimg.cc/YCX959b8/foodsw-ap-transparent-001.png"
            alt="logo"
            className=" h-96"
          />
        </div>
      </div>
      {/* Welcome Message */}
      {!isLoggedIn && (
        <>
          <div
            className="relative grid place-items-center p-20 space-y-8"
            style={{
              backgroundImage: `url(https://www.paste-juice.com/assets/images/inerpage_2-1-2018.png)`
            }}
          >
            <div className="absolute inset-0 bg-white opacity-80 space-y-2"></div>
            <div className="relative space-y-2">
              <div className="text-7xl font-serif text-orange-400">
                Welcome!
              </div>
              <div className=" text-3xl font-serif inline">to </div>
              <div className="pl-2 font-extrabold text-4xl font-serif inline">
                food / swap
              </div>
            </div>
            <div className="relative text-center space-y-8 pb-20 px-40">
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
              <div className="flex items-center justify-center rounded-full h-40 w-40 bg-slate-900">
                <FontAwesomeIcon
                  icon={faMobileScreenButton}
                  className="text-white text-5xl"
                />
              </div>
              <div className="flex items-center justify-center rounded-full h-40 w-40 bg-slate-900">
                <FontAwesomeIcon
                  icon={faBowlRice}
                  className="text-white text-5xl"
                />
              </div>
              <div className="flex items-center justify-center rounded-full h-40 w-40 bg-slate-900">
                <FontAwesomeIcon
                  icon={faSlideshare}
                  className="text-white text-5xl"
                />
              </div>
            </div>
            {/* columns */}
            <div className="flex h-72 pt-20 -mt-20">
              {/* sign up */}
              <div
                className="relative w-full text-white tracking-widest text-xl text-center place-content-center"
                style={{
                  backgroundImage: `url(https://preview.codeless.co/picante/default/wp-content/uploads/2018/04/port10.jpg)`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="absolute inset-0 bg-slate-800 opacity-60"></div>
                <div className="relative">SIGN UP FOR FREE</div>
              </div>
              {/* post */}
              <div
                className="relative w-full text-white tracking-widest text-xl text-center place-content-center"
                style={{
                  backgroundImage: `url(https://preview.codeless.co/picante/default/wp-content/uploads/2018/04/port9.jpg)`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="absolute inset-0 bg-slate-800 opacity-60"></div>
                <div className="relative">POST YOUR HOMECOOKED DISH</div>
              </div>
              {/* swap */}
              <div
                className="relative w-full text-white tracking-widest text-xl text-center place-content-center"
                style={{
                  backgroundImage: `url(https://preview.codeless.co/picante/default/wp-content/uploads/2018/04/port3.jpg)`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="absolute inset-0 bg-slate-800 opacity-60"></div>
                <div className="relative">SWAP WITH OTHERS</div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Header
