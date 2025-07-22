import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import VideoRoom from './component/VideoRoom'
import ZegoCloud from './component/ZegoCloud'
import Footer from './component/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ZegoCloud />} />
        <Route path='/room/:id' element={<VideoRoom />} />
      </Routes>
      <Footer/>
    </BrowserRouter>

  )
}

export default App