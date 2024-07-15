import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
function Footer() {
  const isLoggedIn = localStorage.getItem('isLoggedIn')
  console.log(isLoggedIn)

  return (
    <>
      {isLoggedIn ? (
        <div
          className="relative h-20 grid place-items-center gap-2"
          style={{
            backgroundImage: `url(https://i.postimg.cc/3wJTSmyL/dietary-salad-with-mussels-quail-eggs-cucumbers-radish-lettuce-healthy-food-seafood-salad-top-view-f.jpg)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-slate-800 opacity-60"></div>

          {/* Footer Text */}
          <div className="flex">
            <div className="relative text-slate-300">
              © 2024 FOOD SWAP PROJECT BY
            </div>
            <Link to="https://portfolio-asaya.onrender.com">
              <div className="relative text-slate-50 px-2">ASAYAOBI</div>
            </Link>
            <div className="relative text-slate-300">
              {' '}
              ▲ ALL RIGHTS RESERVED
            </div>
          </div>
        </div>
      ) : (
        <div
          className="relative h-80 grid place-items-center gap-2"
          style={{
            backgroundImage: `url(https://i.postimg.cc/3wJTSmyL/dietary-salad-with-mussels-quail-eggs-cucumbers-radish-lettuce-healthy-food-seafood-salad-top-view-f.jpg)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-slate-800 opacity-60"></div>
          {/* Delivery Text box */}
          <div className="gap-2">
            <div className="relative grid grid-rows-3 text-white text-xl md:text-3xl font-serif tracking-wide text-center">
              <div>Fast, Fresh, and Fabulous</div>
              <div>That's Our Promise!</div>
            </div>
            <div className="flex text-center gap-2 items-center justify-center">
              <FontAwesomeIcon
                icon={faPhone}
                className="relative text-white text-lg pt-2"
              />
              <div className="relative text-center text-white text-3xl font-serif tracking-wide">
                1122
              </div>
            </div>
            <div className="flex justify-center pt-4">
              <button className="relative py-2 px-5 font-serif text-white text-xl border border-white hover:border-orange-400">
                <Link to="/login">Order Now</Link>
              </button>
            </div>
          </div>
          {/* Footer Text */}
          <div className="flex">
            <div className="relative text-slate-300">
              © 2024 FOOD SWAP PROJECT BY
            </div>
            <Link to="https://portfolio-asaya.onrender.com">
              <div className="relative text-slate-50 px-2">ASAYAOBI</div>
            </Link>
            <div className="relative text-slate-300">
              {' '}
              ▲ ALL RIGHTS RESERVED
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Footer
