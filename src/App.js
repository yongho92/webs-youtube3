import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './page/Home'
import Today from './page/Today'
import Developer from './page/Developer'
import Webd from './page/Webd'
import Website from './page/Website'
import Gsap from './page/Gsap'
import Port from './page/Port'
import Youtube from './page/Youtube'
import Channel from './page/Channel'
import Video from './page/Video'
import Search from './page/Search'
import Not from './page/Not'
import Header from './components/seaction/Header'
import Main from './components/seaction/Main'
import Footer from './components/seaction/Footer'

const App = () => {
  return (
    <BrowserRouter>
        <Header />
        <Main>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/today' element={<Today/>} />
                <Route path='/developer' element={<Developer/>} />
                <Route path='/webd' element={<Webd/>} />
                <Route path='/website' element={<Website/>} />
                <Route path='/gsap' element={<Gsap/>} />
                <Route path='/port' element={<Port/>} />
                <Route path='/youtube' element={<Youtube/>} />
                <Route path='/channel/:channelID' element={<Channel/>} />
                <Route path='/video/:videoID' element={<Video/>} />
                <Route path='/search/:searchID' element={<Search/>} />
                <Route path='/*' element={<Not/>} />
            </Routes>
        </Main>
        <Footer />
        
    </BrowserRouter>
  )
}

export default App