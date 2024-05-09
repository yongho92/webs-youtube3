import React from 'react'
import Main from '../components/section/Main'

import { portfolioText } from '../data/port'
import { Link } from 'react-router-dom'


const Port = () => {
    return (
        <Main
            title="포트폴리오 사이트"
            description="포트폴리오 사이트 튜토리얼 강의입니다.">
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
        </Main>
    )
}

export default Port