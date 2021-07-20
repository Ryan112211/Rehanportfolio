
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
import vid from "./components/video/myvid.mp4"
function App() {
  useEffect(()=>{
    AOS.init({
      duration:1000,
    })
  },[])
  return (
    
    <div className="App">
      <div>
 <video autoPlay loop muted style={{
   position:"absolute",
   width:"100%",
   left:"50%",
   height:"100%",
   objectFit:"cover",
   transform:"translate(-50%,-50%)",
   zIndex:"-1",
   top:"20%"


 }}>
   <source src={vid} type="video/mp4"></source>
 </video>
      
      <Hero></Hero>
      <Specialization></Specialization>
      <Expertise></Expertise>
      <LatestProjects></LatestProjects>
      <Qualification></Qualification>
      
      <Footer></Footer>

    </div>
    </div>
  );
}

export default App;
