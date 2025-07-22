import React, { useEffect, useRef } from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import { useParams } from 'react-router-dom'

const VideoRoom = () => {
  const { id } = useParams()
  const containerRef = useRef(null)

  useEffect(() => {
    const appID = 1671517269
    const serverSecret = '984ec4eda1581ba50f1e246d41cd30d6'
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      id,
      Date.now().toString(),
      'diksha'
    )

    const zp = ZegoUIKitPrebuilt.create(kitToken)

    zp.joinRoom({
      container: containerRef.current,
      sharedLinks: [
        {
          name: 'Personal link',
          url: `https://joinora.netlify.app/room/${id}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
    })
  }, [id])

  return <div ref={containerRef} style={{ width: '100vw', height: '100vh' }} />
}

export default VideoRoom
