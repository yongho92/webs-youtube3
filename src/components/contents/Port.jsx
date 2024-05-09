import React from 'react'

import { portfolioText } from '../../data/port'
import { Link } from 'react-router-dom'

export const Port = () => {
  return (
    <section id="port">
      <h2>포트폴리오 만드는 방법을 공유합니다.</h2>
      <div className='video__inner'>
        {portfolioText.map((portList, key) => (
          <div className='video' key={key}>
            <div className='video__thumb play__icon'>
              <Link to={`/video/${portList.videoId}`}>
                <img src={portList.img} alt={portList.title} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Port