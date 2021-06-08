import React from 'react'
import socialIcons from '../../../assets/social-icons'
import "./style.css"
/**
* @author
* @function SocialConnect
**/

const SocialConnect = (props) => {
  return(
    <div className="socialConnect" style={props.style}>
<span className="textColor font-12">Follow Me on: </span>
<a className="socialLink" href="#">
<img src={socialIcons.facebook} alt=""></img>
</a>
<a className="socialLink"href="#">
<img src={socialIcons.instagram} alt=""></img>
</a>
<a className="socialLink"href="#">
<img src={socialIcons.youtube} alt=""></img>
</a>
<a className="socialLink" href="#">
<img src={socialIcons.linkedin} alt=""></img>
</a>


    </div>
   )

 }

export default SocialConnect