import React from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai";

const VideoModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-gray-900 opacity-75" onClick={onClose}></div>
        <div className="z-50">
          <div>
          <button className="absolute top-0 right-20 m-10" onClick={onClose}><AiOutlineCloseCircle className='text-[2rem] hover:rotate-180 transition-all delay-150'/></button>
          <iframe title="vimeo-player" src="https://player.vimeo.com/video/195906856?h=04b39b149d" width="640" height="360" frameborder="0"    allowfullscreen></iframe>

          </div>
        </div>
      </div>
    );
  }
export default VideoModal;