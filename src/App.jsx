import { Route, Routes } from "react-router-dom"
import Box from "./components/box/box"
import Navbar from "./components/navbar"
import AboutPage from "./pages/about"

import Cart from "./pages/cart"
import ProductDetails from "./pages/ProductDetails"
import HomePage from "./pages/homePage"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/ProductDetails/:idProduct' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App