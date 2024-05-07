import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/section/Main'

const Home = lazy(() => import('./page/Home'));
const Today = lazy(() => import('./page/Today'));
const Developer = lazy(() => import('./page/Developer'));
const Webd = lazy(() => import('./page/Webd'));
const Website = lazy(() => import('./page/Website'));
const Gsap = lazy(() => import('./page/Gsap'));
const Port = lazy(() => import('./page/Port'));
const Youtube = lazy(() => import('./page/Youtube'));
const Channel = lazy(() => import('./page/Channel'));
const Video = lazy(() => import('./page/Video'));
const Search = lazy(() => import('./page/Search'));
const Not = lazy(() => import('./page/Not'));


const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>
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
        </Suspense>
    </BrowserRouter>
  )
}

export default App