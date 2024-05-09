import React from 'react'

import { gsapText } from '../../data/gsap'
import { Link } from 'react-router-dom'

export const Gsap = () => {
  return (
    <section id="gsap">
      <h2>GSAP 패럴랙스 효과를 하고 싶다면!</h2>
      <div className='video__inner'>
        {gsapText.map((gsapList, key) => (
          <div className='video' key={key}>
             <div className="video__thumb play__icon">
                <Link to={`/video/${gsapList.videoId}`}>
                  <img src={gsapList.img} alt={gsapList.title} />
                </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gsap