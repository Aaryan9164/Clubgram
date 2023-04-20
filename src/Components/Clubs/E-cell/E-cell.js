import React from 'react'

import { About } from './About'
import { Contact } from './Contact'
import { Members } from './Members';
import MagImg from "../E-cell/images/E-cell.jpg";
export const E = () => {
    return (
        <div className="mainWrapper">



            <div className="container">
                <img className="logoImg" src={MagImg} alt=""></img>
                <div className="mainWrapper">
                    <div className="card">
                        <div className="card-header header">About us!</div>
                        <div className="card-body">
                            <About></About>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div className="container">
                    <div className="card">
                        <div className="card-header header">
                            Members
                        </div>
                        <div className="card-body">

                            <Members></Members>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div className="container">
                    <div className="card">
                        <div className="card-header header">
                            Contact us!
                        </div>
                        <div className="card-body">
                            <Contact></Contact>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
