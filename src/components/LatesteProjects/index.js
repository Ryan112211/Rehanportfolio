import React from 'react'
import Card from '../UI/Card'
import MediumHeading from '../UI/MediumHeading'
import SmallHeading from '../UI/SmallHeading'
import latestproject from "../../assets/projects/project-001.PNG"
import "./style.css"
import Button from '../UI/Button'
/**
* @author
* @function LatestProjects
**/

const LatestProjects = (props) => {
  return(
    <div data-aos="zoom-in-up" className="container" style={{marginTop:"50px",marginBottom:"50px"}}>
<Card className="flexRow flexCol align-center justify-sb">
<div className="projectcontainer">
<SmallHeading text="portfolios"></SmallHeading>
<MediumHeading style={{textTransform:"uppercase"}}text="Latest Projects"></MediumHeading>
<div className="mtb-10 flexRow" style={{justifyContent:"center"}}>
<Button label="Portfolio"></Button>

</div>


</div>
<div className="projectimgcontainer">
<img src={latestproject} alt=""></img>
</div>


</Card>

    </div>
   )

 }

export default LatestProjects