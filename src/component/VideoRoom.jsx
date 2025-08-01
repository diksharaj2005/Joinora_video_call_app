import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';
const VideoRoom = () => {

    const {id}=useParams()

const meeting=(element)=>{
     const appID =1671517269 ;
      const serverSecret = "984ec4eda1581ba50f1e246d41cd30d6";
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id ,  Date.now().toString(),  " ");

         // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);

      zp.joinRoom({
        container:element,
        sharedLinks: [
          {
            name: 'Personal link',
            url:`https://joinora.netlify.app/room/${id}`
          },
        ],
         scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      })
}


  return (
    <>
 <div ref={meeting}
      style={{
        width: '100%',
        height: '90vh',
        margin: 'auto',
        border: '2px solid #ccc',
        borderRadius: '12px',
        overflow: 'hidden',}}/>
    </>
  )
}

export default VideoRoom
