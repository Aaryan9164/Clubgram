import React from 'react'
import fairImg from "../E-cell/images/Clubfairjpg.jpg"
import eventImg from '../E-cell/images/pure-romance.jpg'
import './E-cell.css'

export const About = () => {
    return (

        <div className="container">
            <div className="card">
                <div className="topWrapper">
                    <div className="about-us">

                        <p className="aboutText">"E-Cell" VNIT is an entrepreneurship cell based at Visvesvaraya National Institute of Technology that mentors and guides new and existing startups.
                            <br /><br />
                            It aims to foster a community of entrepreneurs, with programs and events that provide deserving individuals with opportunities to develop entrepreneurial skills and succeed. .</p>
                    </div>
                    <div >
                        <img class="aboutImg" src={fairImg} alt=""></img>
                    </div>
                </div>

                <div className="bottomWrapper">
                    <div >
                        <img className="aboutImg2" src={eventImg} alt=""></img>
                    </div>
                    <div className="about-us">
                        <p className="aboutText2"><ul><li>Under Project 'C-SUITES' C-Suites is a community of like-minded people within VNIT Nagpur where we grow ourselves individually along with people around us. The mission seeks to create a self-sustained ecosystem, where peers discuss and learn from each other through regular group interactions.</li>
                            <li>Under Project 'NEO' National Entrepreneurship Olympiad is a PAN - India examination and a skill enhancement program for the students of class 7th to 12th grade to nurture and test their entrepreneurial skills. This Olympiad includes sections like Basic Entrepreneurial Concepts, Value Proposition, Finances.</li>
                            <li>Under Project 'StartupConclcave' nnovation and enterprising are the wheels that steer the world into a brighter future. Great ideas result into great undertakings which pave the way for glaring success. In order to facilitate this vision of promoting entrepreneurship in India, E-Cell VNIT organizes StartUp Conclave, a national-level business plan competition.</li>
                            </ul></p>
                    </div>
                </div>
            </div>
        </div>
    )
}


