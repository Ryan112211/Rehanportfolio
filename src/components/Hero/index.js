import React from 'react'
import me from '../../assets/images/mypic.jpg'
import Button from '../UI/Button'
import "./index.css"
/**
* @author
* @function Hero
**/

const Hero = (props) => {
  return(
    <div className="container" style={{marginTop:"70px"}}>
        <div className="flexRow flexCol justify-sb align-center">
        <div data-aos="fade-right">
        <p className="uppercase bold-500 textColor ls-1 mtb-10"><span className="primaryColor">Hello,</span>I am Rehan Khan</p>
        <h1 className="textColor ls-1 mtb-10">Software Developer</h1>
        <p className="font-12 grey mtb-10">FullStack Developer using Mern Stack</p>
        <div className="flexRow " style={{margin:"30px 0"}}>
        <div>
        <Button label={"Hire me"}></Button>
        </div>
        <div className="mlr-10">
        <Button label={"Download Cv"} inverse={true}></Button>
        </div>


        </div>
        
        
        </div>
        <div data-aos="fade-left">
        <div className="merightimagecontainer">
            <img src={me}alt=""></img>
        </div>
        </div>

        </div>
        
        
        
        </div>
   )

 }

export default Hero