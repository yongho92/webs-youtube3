import React from 'react'
import Main from '../components/section/Main'
import { Today } from '../components/contents/Today'
import { Developer } from '../components/contents/Developer'
import { Webd } from '../components/contents/Webd'
import { Website } from '../components/contents/Website'
import { Gsap } from '../components/contents/Gsap'
import { Port } from '../components/contents/Port'
import { Youtube } from '../components/contents/Youtube'

const Hoem = () => {
    return (
        <Main 
            title = "유튜브 채널"
            description="유튜브 채널페이지입니다.">
            <Today />
            <Developer />
            <Webd />
            <Website />
            <Gsap />
            <Port />
            <Youtube />
        </Main>
    )
}

export default Hoem