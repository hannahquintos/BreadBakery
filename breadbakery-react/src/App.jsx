import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Locations from "./pages/Locations";
import Product from "./pages/ProductDetails";
import './App.css'

function App() {
  return (
   <>
     <BrowserRouter>
       <Header />
       <main id="main" className="contentWrapper">
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/products" element={<Products />} />
           <Route path="/locations" element={<Locations />} />
           <Route path="/products/:id" element={<Product />} />
         </Routes>
       </main>
       <Footer />
     </BrowserRouter>
   </>
 )
}

export default App
