import React from 'react'
import "./about.css"
import sumanthbg from "../../assets/sumanth-bgrm.png"
import sumanthwater from "../../assets/12706.jpg"
import CV from "../../assets/sumanth_resume.pdf"
import Information from "../about/Information"

export const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">
            <img src={sumanthbg} alt="" className="about__img" />
            <div className="about__data">
               <Information/> 
              <p className="about__description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, dolorum placeat, pariatur ea autem tempore dignissimos officiis dolorem consequuntur atque, sunt exercitationem velit. 
              Architecto ullam quas, impedit aut possimus iste?</p>
            </div>
        </div>
    </section>
  )
}
