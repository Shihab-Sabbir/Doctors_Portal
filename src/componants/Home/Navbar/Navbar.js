import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  text-white">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link me-4 active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-4" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-4" href="#">Dental Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white me-4" href="#">Reviews</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white me-4" href="#">Blogs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white me-4" href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar