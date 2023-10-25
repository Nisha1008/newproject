import React from 'react'
import './trending.css'
import { TopicsList } from '../../utils/TopicsList';
const Trending = () => {
    return (
        <div className='trend row'>
            <div className="dayChallenge col-4">
                <span className='language'>book of the day</span>
                <h1>21</h1>
                <h1>DAYS</h1>
                <p>CHALLANGES</p>
                <button className='btn btn-warning' type='button'>Start Now</button>
            </div>

            <div className="trendingTopics col-8">{
                TopicsList.map(topics => (
                    <div className="topic">
                        <img src="/image/ico1.png" alt="" className='pic-img' />
                        <span className='top'>{topics.topicName}</span>
                    </div>
                ))
            }
            </div>

        </div>
    )
}

export default Trending
