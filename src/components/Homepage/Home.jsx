import React from 'react'
import NewsFeed from '../NewsFeed/NewsFeed'

const Home = () => {
  return (
    <div className='home'>
        <div className='top-of-newsfeed'>
            <div className='top-title'>
                <p>Сүүлд нэмэгдсэн мэдээ</p>
            </div>
        </div>
        <NewsFeed />
    </div>
  )
}

export default Home