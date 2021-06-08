
import { useEffect } from 'react';
import './App.css';
import Expertise from './components/Expertise';
import Footer from './components/Footer';
import Hero from './components/Hero';
import LatestProjects from './components/LatesteProjects';
import Qualification from './components/Qualification';
import Specialization from './components/Specialization';
import Testimonials from './components/Testimonials';
import AOS from "aos"
import "aos/dist/aos.css"
function App() {
  useEffect(()=>{
    AOS.init({
      duration:1000,
    })
  },[])
  return (
    <div className="App">
      <Hero></Hero>
      <Specialization></Specialization>
      <Expertise></Expertise>
      <LatestProjects></LatestProjects>
      <Qualification></Qualification>
      <Testimonials></Testimonials>
      <Footer></Footer>

    </div>
  );
}

export default App;
