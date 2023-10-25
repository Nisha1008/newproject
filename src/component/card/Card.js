import React from 'react'
import './card.css'
const Card = () => {
    return (
        <div className='main d-flex'>
            <div className="first d-flex">

                <div className="first-img"><img src="/image/thumb_2030.png" alt="" style={{ width: 170, height: 250 }} /></div>

                <div className="name">
                    <span className='btn-small'>book of the day</span>
                    <h1 className='book-heading'>KEY PERSON <br />OF INFLUENCE-THE</h1>
                    <p className="disc">by tanny hotthey and deny persthey</p>
                    <button className='btn'>Start Learning</button>
                </div>
            </div>
            <div className="second d-flex">

                <div className="first-img"><img src="/image/thumb_1957.png" alt="" style={{ width: 170, height: 250 }} /></div>
                <div className="name">
                    <span className='btn-small'>book of the day</span>
                    <h1 className='book-heading'>OWN YOUR OWN <br />CORPORATION -WHY</h1>
                    <p className="disc">by gratt suttan</p>
                    <button className='btn'>Start Learning</button>
                </div>
            </div>
        </div>
    )
}

export default Card
