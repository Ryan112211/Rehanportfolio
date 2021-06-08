import React from 'react'
import "./style.css"
/**
* @author
* @function Card
**/

const Card = ({children,className=null,style,...res}) => {
    const _class = className ? `card ${className}` : `card`;
  return(
    <div style={style}{...res} className={_class}>{children}</div>
   )

 }

export default Card