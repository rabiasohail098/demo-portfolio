import React from 'react'
import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const About = () => {
  return (
    <div>
        <h1 className='heading'>ABOUT ME</h1>
        <Image src="/images/rab (4).jpg" alt="img" width={200} height={200} className="img1"/>
        <h2 className=''>  Microdosing synth tattooed vexillologist</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, iure nobis quos aperiam omnis in blanditiis. Beatae consequuntur delectus natus at saepe ducimus modi fugiat ut reprehenderit dignissimos aperiam a accusamus, inventore voluptate tenetur nemo eaque. Quae dolores necessitatibus quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aspernatur quas facilis quam! Laboriosam, repudiandae.</p>
        <div className='btn3'>
            <button className='bt2'><FaLinkedin className='icon'/></button>
            <button className='bt2'><FaGithub className='icon'/></button>
            <button className='bt2'></button>
            <button className='bt2'></button>
            <button className='bt2'></button>
        </div>
        <Skills />
    </div>
  )
}

export default About

export const Skills = ()=>{
    return(
        <div>
            <h1 className='heading'>My Skills</h1>
            <div>
                <h2 className='skill-h2'>HTML</h2>
                <div className='bar'></div>
            </div>
            <div>
                <h2 className='skill-h2'>CSS</h2>
                <div className='bar1'></div>
            </div>
            <div>
                <h2 className='skill-h2'>JavaScript</h2>
                <div className='bar2'></div>
            </div>
            <div>
                <h2 className='skill-h2'>TypeScript</h2>
                <div className='bar3'></div>
            </div>
            <div>
                <h2 className='skill-h2'>Next.Js</h2>
                <div className='bar4'></div>
            </div>
            <div>
                <h2 className='skill-h2'>React</h2>
                <div className='bar5'></div>
            </div>
        </div>
    )
}