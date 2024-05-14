import React from 'react'
import "./about.css"
import sumanthbg from "../../assets/sumanth-bgrm.png"
import sumanthwater from "../../assets/12706.jpg"
import CV from "../../assets/sumanth_resume.pdf"

export const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">
            <img src={sumanthbg} alt="" className="about__img" />
            
        </div>
    </section>
  )
}
