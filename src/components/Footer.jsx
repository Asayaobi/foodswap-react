import { Link } from 'react-router-dom'

function Footer() {
  const isLoggedIn = localStorage.getItem('isLoggedIn')
  console.log(isLoggedIn)

  return (
    <>
      <div
        className="relative h-80 grid place-items-center justify-center items-center gap-2"
        style={{
          backgroundImage: `url(https://i.postimg.cc/3wJTSmyL/dietary-salad-with-mussels-quail-eggs-cucumbers-radish-lettuce-healthy-food-seafood-salad-top-view-f.jpg)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-slate-800 opacity-60"></div>
        {/* Delivery Text box */}
        <div>
          <div className="relative text-white text-lg">
            Fast, Fresh, and Fabulous - That's Our Promise!
          </div>
        </div>
        {/* Footer Text */}
        <div className="flex">
          <div className="relative text-slate-300">
            © 2024 FOOD SWAP PROJECT BY
          </div>
          <Link to="https://portfolio-asaya.onrender.com">
            <div className="relative text-slate-50">ASAYAOBI</div>
          </Link>
          <div className="relative text-slate-300"> ▲ ALL RIGHTS RESERVED</div>
        </div>
      </div>
    </>
  )
}

export default Footer
