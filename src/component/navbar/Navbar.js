import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <div className="offer">
                <p className='deal'>SPECIAL OFFER</p>
                <p>- sale ends on september 13 (IST).</p>
                <p className='deal'>13 hour left</p>
            </div>

            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <a href="pic"><img src="/image/logo.png" alt="" className="navbar-brand" /> </a>
                    <div className="collapse navbar-collapse" >

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 my-5">
                            <li className="nav-item list mx-3">
                                <a className="nav-link active" aria-current="page" href="pic">Listen</a>
                            </li>
                            <li className="nav-item list mx-3">
                                <a className="nav-link" href="pic">Watch</a>
                            </li>
                            <li className="nav-item list mx-3">
                                <a className="nav-link" href="pic">Blog</a>
                            </li>
                            <li className="nav-item list dropdown mx-3">
                                <a className="nav-link dropdown-toggle" href="pic" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Language(hn)
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="pic">English</a></li>
                                    <li><a className="dropdown-item" href="pic">Chines</a></li>
                                    <li><a className="dropdown-item" href="pic">Something else here</a></li>
                                </ul>
                            </li>


                            <form className="d-flex list" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search here.." />
                            </form>
                        </ul>
                        <div className=''>
                            <ul className="nav d-flex navbar-nav mb-2 mb-lg-0 my-5">
                                <li className="nav-item  mx-4">
                                    <div className=' d-flex'>
                                        <img src="/image/top-icon.svg" alt="" />
                                        <a className="nav-link" href="pic">Go Preminum</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="pic">Login/Signup</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
