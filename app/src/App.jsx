import React from "react"
import NavbarComponent from "./components/NavbarComponent/NavbarComponent"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import FooterComponent from "./components/FooterComponent/FooterComponent"
import HeroComponent from "./components/HeroComponent/HeroComponent"
import FeaturedCollectionComponent from "./components/FeaturedCollectionComponent/FeaturedCollectionComponent"
import BestSellerComponent from "./components/BestSellerComponent/BestSellerComponent"
import FrameComponent from "./components/FrameComponent/FrameComponent"
import ImagesComponent from "./components/ImagesComponent/ImagesComponent"
import AboveFooterComponent from "./components/AboveFooterComponent/AboveFooterComponent"
import ReviewsComponent from "./components/ReviewsComponent/ReviewsComponent"
import SingleMerchandisePage from "./pages/SingleMerchandisePage/SingleMerchandisePage"
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage"
import CartPage from "./pages/CartPage/CartPage"
import AboutPage from "./pages/AboutPage/AboutPage"
import CollectionPage from "./pages/CollectionPage/CollectionPage"
import ContactPage from "./pages/ContactPage/ContactPage"
import LoginPage from "./pages/LoginPage/LoginPage"
//Map leaflet Configurations-React Leaflet
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import {Toaster} from 'react-hot-toast'

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

function App() {

  return (
    <>
      <BrowserRouter>
      <NavbarComponent/>
      <Toaster/>
      <Routes>
        <Route 
          path="/" 
          element={
          <>
          <HeroComponent/>
          <FeaturedCollectionComponent/>
          <BestSellerComponent/>
          <FrameComponent/>
          <ImagesComponent/>
          <ReviewsComponent/>
          </>
          }
        >
        </Route>
        <Route path="/merchandise/:id" element={<SingleMerchandisePage/>} ></Route>
        <Route path="/checkout" element={<CheckoutPage/>}></Route>
        <Route path="/cart" element={<CartPage/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/collection" element={<CollectionPage/>}></Route>
        <Route path="/contact" element={<ContactPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
      </Routes>
      <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
