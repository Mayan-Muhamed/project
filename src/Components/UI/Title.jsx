import React from "react";
import TitleStyle from './TitleStyle.module.css'
const Title = ({title ,item}) =>{
     return(<>
     <div className={TitleStyle.title}>{title} <span className={TitleStyle.p}>{item}</span></div>
    </>)
}
export default Title