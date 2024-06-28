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
      {/* Welcome Message */}
      {!isLoggedIn && (
        <>
          <div className="grid place-items-center p-20 space-y-8">
            <div className=" space-y-2">
              <div className=" text-7xl font-serif text-orange-400">
                Welcome!
              </div>
              <div className=" text-3xl font-serif inline">to </div>
              <div className="pl-2 font-extrabold text-4xl font-serif inline">
                food / swap
              </div>
            </div>
            <div className="text-center space-y-8">
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
          <div className="flex">
            <div className="w-full bg-slate-500">1</div>
            <div className="w-full bg-slate-400">2</div>
            <div className="w-full bg-slate-200">3</div>
          </div>
        </>
      )}
    </>
  )
}

export default Header
