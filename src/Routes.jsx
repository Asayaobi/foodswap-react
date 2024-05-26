import { BrowserRouter, Routes, Route } from "react-router-dom"

import FoodList from './components/FoodList'
import Bookings from './components/Bookings'
import Food from './components/Food'

function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<FoodList />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/food/:id" element={<Food />} />

        </Routes>
        </BrowserRouter>
    )
}

export default Router