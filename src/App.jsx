import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Program from "./components/Programs/Program";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/campus/Campus";
import Testimonial from "./components/Testimonials/Testimonal";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer"


function App(){

  //main code
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container" >
        <Title subtitle ='Our Program' title ='What we offer'/>
      <Program/>
      <About/>
      <Title subtitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subtitle='Testimonials' title='What student says'/>
      <Testimonial/>
      <Title subtitle='Contact us' title='Get in touch'/>
      <Contact/>
      <Footer/>
      </div>
      
    </div>
  )
}
export default App;