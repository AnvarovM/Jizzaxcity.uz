import React from 'react'

const index = () => {
    return (
        <div className="relative w-full h-full">
        <video
          className="w-full h-screen object-cover"
          autoPlay={true}
          muted
          loop
        >
          <source src="/video/building_video.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center bg-black opacity-60 bg-gradient-to-r from-[#0c0c0c] to-[#130f40]"></div>
      </div>
    )
}

export default index
