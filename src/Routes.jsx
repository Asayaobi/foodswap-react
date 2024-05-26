import { BrowserRouter, Routes, Route } from "react-router-dom"

import FoodList from './components/FoodList'
import Bookings from './components/Bookings'

function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<FoodList />} />
            <Route path="/bookings" element={<Bookings />} />

        </Routes>
        </BrowserRouter>
    )
}

export default Router