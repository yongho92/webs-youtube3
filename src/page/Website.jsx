import React from 'react'
import Main from '../components/section/Main'

import { websiteText } from '../data/website'
import { Link } from 'react-router-dom'

const Website = () => {
    return (
        <Main
            title="웹표준 사이트"
            description="웹표준 사이트 튜토리얼 강의입니다.">
            <section id="website">
                <h2>웹표준 사이트 만들기 기초 다지기</h2>
                <div className='video__inner'>
                    {websiteText.map((website, key) => (
                        <div className='video' key={key}>
                            <div className='video__thumb play__icon'>
                                <Link to={`/video/${website.videoId}`}>
                                    <img src={website.img} alt={website.title} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Main>
    )
}

export default Website