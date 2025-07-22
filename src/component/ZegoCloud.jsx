import React, { useState , useCallback } from 'react';
import  appIcon  from '../assets/appIcon.png';
import bodyimg from '../assets/bodyimg.png'
import "./ZegoCloud.css"
import { useNavigate } from 'react-router-dom';
const ZegoCloud = () => {
    const [value, setValue] = useState()
    const nagivate=useNavigate()

    const joinRoom = useCallback(
      () => {
        nagivate(`/room/${value}`)
      },
      [nagivate,value],
    )
    
  return (
    <>
      <div className="header">
        <img src={appIcon} alt="App Icon"  className='app_icon'/>
        <span className="app_name">Joinora</span>
      </div>

      <div className="body">
        <img src={bodyimg} alt=""  className='bodyImg'/>
        <h1>Seamless Video Calls for Everyone</h1>
        <p>🌍 Meet face-to-face, share moments, and stay close — from anywhere.</p>
        <input type="text" placeholder="Enter Room ID" onChange={(e)=>setValue(e.target.value)} />
        <button onClick={joinRoom}>JOIN NOW</button>
      </div>
    </>
  );
};

export default ZegoCloud;
