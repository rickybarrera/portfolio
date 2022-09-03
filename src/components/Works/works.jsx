import React from 'react'
import './works.scss'
import { SiPython, SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiSass, SiReact, SiBootstrap, SiGithub, SiAmazonaws, SiDjango } from 'react-icons/si' 
export default function Works() {
  return (
    <div className='works' id='works'>
    <div>
    <section id="skills">
        <div className='container'>
          <div class="skill">
           <SiJavascript className='icon'/>
            <p>JavaScript</p>
          </div>
          <div class="skill">
           <SiHtml5 className='icon'/>
            <p>HTML</p>
          </div>
          <div class="skill">
            <SiNodedotjs className='icon'/>
            <p>Node</p>
          </div>
          <div class="skill">
            <SiCss3 className='icon'/>
            <p>CSS</p>
          </div>
          <div class="skill">
           <SiSass className='icon'/>
            <p>SASS</p>
          </div>
          <div class="skill">
            <SiReact className='icon'/>
            <p>React</p>
          </div>
          <div class="skill">
            <SiBootstrap className='icon'/>
            <p>Bootstrap</p>
          </div>
          <div class="skill">
            <SiPython className='icon'/>
            <p>Python</p>
          </div>
          <div class="skill">
            <SiDjango className='icon'/>
            <p>Django</p>
          </div>
          <div class="skill">
            <SiGithub className='icon'/>
            <p>Github</p>
          </div>
          <div class="skill">
            <SiAmazonaws className='icon'/>
            <p>AWS</p>
          </div>
        </div>
    </section>  </div>
    </div>
  )
}
