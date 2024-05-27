import Nav from './Nav'
import Header from './Header'
import Filter from './Filter'

function FoodList() {
  return (
    <>
      <Nav />
      <Header />
      <Filter />
      <div className="container mx-auto grid grid-cols-3 justify-items-center gap-10 bg-pink-100">
        <div className=" bg-pink-400 w-80 h-64">card1</div>
        <div className=" bg-pink-400 w-80 h-64">card2</div>
        <div className=" bg-pink-400 w-80 h-64">card3</div>
        <div className=" bg-pink-400 w-80 h-64">card4</div>
        <div className=" bg-pink-400 w-80 h-64">card5</div>
        <div className=" bg-pink-400 w-80 h-64">card6</div>
      </div>
    </>
  )
}

export default FoodList
