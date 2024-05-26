import { BrowserRouter, Routes, Route } from "react-router-dom"

import FoodList from './components/FoodList.jsx'

function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<FoodList />} />
        </Routes>
        </BrowserRouter>
    )
}

export default Router