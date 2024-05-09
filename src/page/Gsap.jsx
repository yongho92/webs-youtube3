import React from 'react'
import Main from '../components/section/Main'

import { gsapText } from '../data/gsap'
import { Link } from 'react-router-dom'

const Gsap = () => {
    return (
        <Main
            title="GSAP 사이트"
            description="GSAP 사이트 튜토리얼 강의입니다.">
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
        </Main>
    )
}

export default Gsap