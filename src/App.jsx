import React from "react"
import HeroSection from "../src/components/HeroSection/HeroSection"
import Services from "./components/Services/Services"
import Packages from "./components/Packages/Packages"
import MyWorks from "./components/MyWorks/MyWorks"
import WhoIAm from "./components/WhoIAm/WhoIAm"
import BookNow from "./components/BookNow/BookNow";


function App() {


  return (
    <>
  <HeroSection/>
  <Services/>
  <Packages/>
  <MyWorks/>
  <WhoIAm/>
  <BookNow/>
    </>
  )
}

export default App
