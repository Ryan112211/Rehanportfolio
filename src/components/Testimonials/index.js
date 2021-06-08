import React from 'react'
import MediumHeading from '../UI/MediumHeading'
import SmallHeading from '../UI/SmallHeading'
import testimonialleft from "../../assets/images/testimonials-01.jpg"
import testimonialright from "../../assets/images/testimonials-02.jpg"
import testimonialpic from "../../assets/images/testimonial-pic.jpg"
import "./style.css"
import Card from '../UI/Card'
/**
* @author
* @function Testimonials
**/

const Testimonials = (props) => {
  return(
    <div className="container">

<div data-aos="fade-down">
<SmallHeading text="Testimonials"></SmallHeading>
<MediumHeading text="What People Say"></MediumHeading>
</div>
<div className="flexRow wrap justify-sb align-center"style={{padding:"50px 0"}}>
<div data-aos="fade-left"className="testimonialimgcontainer">
 <img src={testimonialleft} alt=""></img>   
</div>
<Card data-aos="zoom-in" class="mycard">
  <div className="flexRow align-center">
      <div className="profileimgcontainer">
          <img src={testimonialpic} alt=""></img>
      </div>
<div className="mlr-10">
    <p className="primaryColor font-16">Rehan Khann</p>
    <p className="textColor font-14 bold-600">Software Developer</p>
</div>
</div>  
<p className="mtb-10 grey ">
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like
</p>
</Card>
<div data-aos="fade-right"className="testimonialimgcontainer">
  <img src={testimonialright} alt=""></img>  
</div>
</div>
<Card classname="m-auto contactcard" >
<p className="text-center font-12 mtb-10">
    Have an new Project in mind?<span className="primaryColor"> Contact me At</span>
</p>
<p className="text-center font-25">
  mrkabdullah@gmail.com  
</p>

</Card>
 </div>
   )

 }

export default Testimonials