import './App.css';
import Navbar from './components/HomeComp/Navbar/Navbar.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./Pages/Home"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import Loginsignup from "./Pages/LoginAndSignup/Loginsignup.jsx"
import Footer from './components/HomeComp/Footer/Footer.jsx';
import mens_banner from "./components/Assets/mens_banner.jpg"
import womens_banner from "./components/Assets/womens_banner.jpg"
import kids_banner from "./components/Assets/kids_banner.jpg"
import Fashioncategory from './Pages/Fashion/Fashioncategory.jsx';

import electronics_banner from "./components/Assets/electonics.png"
import Furniture_banner from "./components/Assets/furnitures.png"





function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Electronics" element={<Fashioncategory banner={electronics_banner} category="Electronics"/>}/>
          <Route path='/Fashion/Mens' element={<Fashioncategory banner={mens_banner} category="Mens"/>}></Route>
          <Route path='/Fashion/Womens' element={<Fashioncategory banner={womens_banner} category="Womens"/>}></Route>
          <Route path='/Fashion/Kids' element={<Fashioncategory banner={kids_banner} category="Kids"/>}></Route>
          <Route path="/Homeandfurnitures" element={<Fashioncategory banner={Furniture_banner} category="Furnitures"/>}/>
          <Route  path="/product" element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/Loginsignup" element={<Loginsignup/>}/>
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
