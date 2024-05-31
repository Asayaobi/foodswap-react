import Nav from './Nav'
import Reviews from './Reviews'

function Food() {
  return (
    <div className="container mx-auto bg-slate-600 h-20">
      Header
      <Nav />
      <div className="grid grid-cols-2 bg-pink-200 justify-items-center">
        {/* Gallery */}
        <div className=" bg-pink-400 grid justify-self-end grid-rows-4">
          <div className="row-span-3 bg-purple-500"> 1</div>
          <div className=" bg-purple-300 grid grid-cols-3 gap-5 mt-3">
            <div className=" bg-purple-800">a</div>
            <div className=" bg-purple-800">a</div>
            <div className=" bg-purple-800">a</div>
          </div>
        </div>
        {/* Text */}
        <div className=" bg-pink-600 grid justify-self-start">text</div>
      </div>
      <Reviews />
    </div>
  )
}

export default Food
