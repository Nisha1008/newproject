import React from 'react'
import './hero.css'
const Hero = () => {
    return (
        <div className='hero-section d-flex'>
            <div className="hero">
                <img src="image/banner.png" alt="" />
            </div>
            <div className='content'>
                <h1 className="heading">Listen & Learn</h1>
                <p className="para">Choose from 130,000 online vedio courses with<br />
                    new published every month</p>
                <button className='btn btn-warning' type='button'>Start Learning</button>
            </div>

        </div>
    )
}

export default Hero
