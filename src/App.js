import "./App.css";
import  Navbar  from "./components/Navbar";
import Body from "./components/Body";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Instamart from "./components/Instamart";
import RestaurantMenu from "./components/RestraurantMenu";
import { Provider } from "react-redux"; 
 import store from "./utils/store";
import Cart from "./components/cart";

function App() {
  return (
    <div>
      <Provider store={store}>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Body />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/instamart" element={<Instamart />} />
        <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </Provider>
      <Footer />
    </div>
  );
}

export default App;
