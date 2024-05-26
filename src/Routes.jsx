import { BrowserRouter, Routes, Route } from "react-router-dom"

import FoodList from './components/FoodList'
import Bookings from './components/Bookings'
import Food from './components/Food'
import FoodEdit from "./components/FoodEdit"
import Listings from "./components/Listings"
import LogIn from "./components/LogIn"

function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<FoodList />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/food/:id" element={<Food />} />
            <Route path="/food/:id/edit" element={<FoodEdit />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/login" element={<LogIn />} />


        </Routes>
        </BrowserRouter>
    )
}

export default Router