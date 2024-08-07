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
    try {
      let { data } = await axios.get(`${process.env.REACT_APP_API_URL}/food`)
      setFoodList(data)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getFood()
  }, [])

  return (
    <>
      <Header />
      <Nav />
      <Filter setFoodList={setFoodList} />
      <div className="bg-slate-50 grid pt-8 pb-8 px-8 lg:pb-28 lg:pt-10 md:px-20 lg:px-80">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Review only 6 cards if the user is not logged in */}
          {isLoggedIn
            ? foodlist.map((food, index) => <Card key={index} food={food} />)
            : foodlist
                .slice(0, 6)
                .map((food, index) => <Card key={index} food={food} />)}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default FoodList
