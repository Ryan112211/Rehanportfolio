import React from 'react'
import { colors } from './style'

/**
* @author
* @function Button
**/

const Button = (props) => {
  return(
    <a href="https://github.com/Ryan112211" style={{
        boxSizing:"border-box",
        padding:"10px 20px",
        background:props.inverse?"transparent":colors.primaryColor,
        color:props.inverse?colors.primaryColor:"#fff",
        display:"inline-block",
        borderRadius:"20px",
        boxShadow:props.inverse?"none":"0 0 10px 0 green",
        border:"1px solid",
        borderColor:props.inverse?colors.primaryColor:"transparent",
        fontSize:"12px",
        letterSpacing:"1px"
        
    }}>{props.label}</a>
   )

 }

export default Button