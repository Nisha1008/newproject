import React from 'react'
import './mulcard.css'
import Singlecard from './Singlecard.js'
const NewPremium = () => {
    return (
        <div className='mulcard-conatiner'>

            <div className="summary d-flex">
                <h3 className='free-summary'>New Premium </h3>
                <h6 className='see-more'>See more</h6>
            </div>
            <Singlecard />
        </div>
    )
}

export default NewPremium
