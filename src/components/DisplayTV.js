import React from 'react'
import tv from "../images/tv.png"
import intro from "../images/intro.gif"
import reporter from "../images/reporter.png"

export const DisplayTV = () => {
  return (
    <div className='container'>
        <img  src={tv} alt="tv" className='tv'/>
        <img src={intro} alt="intro" className='intro'/>
        <img src={reporter} alt="reporter" className='reporter'/>
    </div>
  )
}
