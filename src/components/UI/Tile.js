import React from 'react'

/**
* @author
* @function Tile
**/

const Tile = ({title,mediumtitle,desc}) => {
  return(
<div data-aos="zoom-in-up" className="mtb-10" style={{background:"#fff",padding:"20px",width:"300px"}}>
<p className="primaryColor font-14 bold-500 mtb-10 uppercase">{title}</p>
<p className="textColor font-14 bold-500 mtb-10 uppercase">{mediumtitle}</p>
<p className="grey font-12 mtb-10 uppercase">{desc}</p>

    
</div>
   )

 }

export default Tile