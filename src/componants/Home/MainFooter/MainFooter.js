import React from 'react'
import './Mainfooter.css'
function MainFooter() {
    return (
        <div className="container-fluid bg-footer">
            <div className='d-flex align-items-center justify-content-center flex-column'>
                <div className="row row-cols-1 row-cols-sm-3 footer-list">
                    <div>
                        <ul>
                            <li className="list-unstyled heading text-info">SERVICES</li>
                            <li className="list-unstyled">Emergency Checkup</li>
                            <li className="list-unstyled">Monthly Checkup</li>
                            <li className="list-unstyled">Weekly Checkup</li>
                            <li className="list-unstyled">Deep Checkup</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="list-unstyled heading text-info">ORAL HEALTH</li>
                            <li className="list-unstyled">Fluoride Treatment</li>
                            <li className="list-unstyled">Cavity Filling</li>
                            <li className="list-unstyled">Teath Whitening</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="list-unstyled heading text-info">OUR ADDRESS</li>
                            <li className="list-unstyled">New York - 101010 Hudson</li>
                        </ul>
                    </div>
                    <div>
                    </div>
                </div>
                <p className='text-info copyright'>
                    Copyright @ SRS 2022 All Rights Reserved
                </p>
            </div>
        </div>
    )
}

export default MainFooter