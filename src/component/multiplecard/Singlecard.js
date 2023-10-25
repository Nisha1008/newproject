import React from 'react'
import './mulcard.css'
import { AiFillStar } from "react-icons/ai";
import { BookList } from '../../utils/BookList';
import HorizontalScroll from 'react-scroll-horizontal'
const Singlecard = () => {
    return (
        <div>
            <div className="conatiner">
                {
                    BookList.map(list => (
                        <HorizontalScroll>
                            <div className="conatiner-row" key={list._id}>
                                <div className="books">
                                    <div className="book1">
                                        <img src={list.bookImg} alt="" className='book-pic' style={{ height: 300 }} />
                                    </div>
                                    <div className="content" style={{ height: 300 }}>
                                        <div className="real-content">

                                            <span className='english'>{list.language}</span>
                                            <h3 className='heading-content'>{list.bookname}</h3>
                                            <p className='writer'>{list.author}</p>
                                            <img src="/image/asset 9.png" alt="" />
                                            <div className="star"><p><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                                                <br />101
                                            </p></div>
                                            <span className='summry'>Summary by </span>
                                            <p className='summy-writer'>{list.summyWriter}</p>
                                            <div className="foot d-flex">
                                                <div>
                                                    <img src="/image/music.png" alt="" className='img' />
                                                </div>
                                                <p className='number'>{list.number}</p>
                                                <div>
                                                    <img src="/image/book.png" alt="" className='img2' />
                                                </div>
                                                <p className='number2'>{list.number2}</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </HorizontalScroll>
                    ))}
            </div>
        </div >
    )
}

export default Singlecard
