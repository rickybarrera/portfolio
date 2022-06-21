import React, { useEffect, useRef } from 'react'
import { init } from 'ityped';
import './intro.scss'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
export default function Intro() {
  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed:60,
      strings:["22 Years old", "Fullstack Developer", "Software Engineer", ]

    }); 
  },[]);
  return (
    <div className='intro' id="intro">
    <div className="left">
      <div className="imgContainer">
        <img src="assets/IMG_9941.jpg" alt=""></img>
      </div>
    </div>
    <div className="right">
      <div className="wrapper">
        <h2>Hello! I am </h2>
        <h1>Ricky Barrera</h1>
        <h3>
         <span ref={textRef}></span>
          </h3>
       <a href='#portfolio'>
       <ArrowDownwardIcon />
         </a> 
      </div>
    </div>
      intro</div>
  )
}
