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

function App() {

  return (
    <>
      <BrowserRouter>
      <NavbarComponent/>
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
      </Routes>
      <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
