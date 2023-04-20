import React from 'react'
import fairImg from "../Mag.com/images/Clubfairjpg.jpg"
import eventImg from '../Mag.com/images/pure-romance.jpg'
import './IVLabs.css'

export const About = () => {
    return (

        <div className="container">
            <div className="card">
                <div className="topWrapper">
                    <div className="about-us">

                        <p className="aboutText">“IVLabs" serves as a platform for students from different engineering backgrounds to collaborate and work together with the utmost team spirit and avidity to bring innovative ideas into reality.
                            <br /><br />
                            We strive to study and improve technologies that advance the fields of robotics and AI. We use our cross-domain knowledge, to create and innovate. We teach and inspire new students through workshops and mentor-based programs, transferring knowledge and creating new leaders to propel innovation.</p>
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
                        <p className="aboutText2"><ul><li>Under Project 'Swayat' India's second completely 3D printed autonomous robot, that participated in
​FIRA '16, Beijing, China.</li>
                            <li>Under Project 'Autonomous Driving Platform' The robot aims to accomplish A to B navigation with obstacle avoidance
​within our institute campus</li>
                            <li>Under Project 'ATGV' A simple tracked all terrain robot that is able to perform 2 D locomotion and climb stairs.</li>
                            </ul></p>
                    </div>
                </div>
            </div>
        </div>
    )
}


