import Nav from './Nav'
import Header from './Header'
import Filter from './Filter'
import Card from './Card'
import Footer from './Footer'
import axios from 'axios'
import { useState, useEffect } from 'react'

function FoodList() {
  const [foodlist, setFoodList] = useState([])
  const isLoggedIn = localStorage.getItem('isLoggedIn')

  const getFood = async () => {
    let { data } = await axios.get('http://localhost:4000/food')
    setFoodList(data)
  }

  useEffect(() => {
    getFood()
  }, [])

  return (
    <div className="container mx-auto">
      <Header />
      <Nav />
      <Filter setFoodList={setFoodList} />
      <div className="bg-slate-50 grid justify-stretch pb-28 pt-10 px-48">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Review only 6 cards if the user is not logged in */}
          {isLoggedIn
            ? foodlist.map((food, index) => <Card key={index} food={food} />)
            : foodlist
                .slice(0, 6)
                .map((food, index) => <Card key={index} food={food} />)}
        </div>
      </div>
      <div>
        <img
          src="https://i.postimg.cc/05LxCwqq/deliveryapp.jpg"
          alt="delivery logo"
          className=" h-194 w-full"
        />
      </div>
      <Footer />
    </div>
  )
}

export default FoodList
