import { useState } from 'react'
import {BrowserRouter,Routes , Route} from "react-router-dom"
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import AddProduct from "./components/AddProduct.jsx"
import ProductDetails from "./components/ProductDetails.jsx";
function App() {

    const[search , setSearch] = useState("");
    return (

    <>
        <Navbar search={search} setSearch={setSearch}/>
        {/*<BrowserRouter>*/}
        <Routes>
        <Route  path="/" element={<Home search={search}/>}/>
        <Route path="/addProduct" element={<AddProduct/>}/>
        <Route path="/products/:id" element={<ProductDetails/>}/>
        </Routes>
        {/*</BrowserRouter>*/}


    </>
  )
}

export default App
