import React from 'react'
import fairImg from "../Mag.com/images/Clubfairjpg.jpg"
import eventImg from '../Mag.com/images/pure-romance.jpg'
import './Mag.com.css'

export const About = () => {
    return (

        <div className="container">
            <div className="card">
                <div className="topWrapper">
                    <div className="about-us">

                        <p className="aboutText">“Mag.com” We’re the official Magazine Committee (or since most of you recognise us by our swanky title: mag.com, we’d prefer to use that in substitution) of Visvesvaraya National Institute of Technology (quite a mouthful, no?).
                            <br /><br />
                            Our job includes everything from designing, editing and writing the official college magazine: Insight 2016, to hosting and executing the literary events and to making the newsletters for the college. Work at mag.com is all about learning and having fun. Enjoy!</p>
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
                        <p className="aboutText2"><ul><li>Under Project 'Insight'21', it is an official annual magazine of Visvesvaraya National Institute of Technology (VNIT), Nagpur.</li>
                            <li>Under Project 'KARWAAN' MAG.COM brings to you Karwaan, VNIT's first literary fest!!</li>
                            <li>Under Project 'WRITE-A-THON',One which will sharpen your skills, help you meet with fellow writers and take your writing to the next level?</li>
                            </ul></p>
                    </div>
                </div>
            </div>
        </div>
    )
}


