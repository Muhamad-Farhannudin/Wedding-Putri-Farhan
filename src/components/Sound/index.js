import React, { useRef, useState, useEffect } from 'react';
import PauseIcon from '../Pause';
import PlayIcon from '../Play';

export default function Sound() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch((error) => {
          console.error('Error playing audio:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.error('Error playing audio automatically:', error);
      });
    }
  }, []);

  return (
    <div className='home'>
      <div className='container'>
        <div className='col'>
          <button onClick={togglePlayPause} className="w-14 h-14 flex justify-center items-center border-4 shadow-lg bg-blue-denim border-white rounded-full fixed bottom-0 left-5 -translate-y-4">
            {isPlaying ?
              <PauseIcon className={'stroke-blue-denim fill-white cursor-pointer transition-all w-[35px] h-[35px]'} /> :
              <PlayIcon className={'stroke-blue-denim fill-white cursor-pointer transition-all w-[40px] h-[40px]'} />
            }
          </button>
          <audio ref={audioRef} src='/audio/nikah.mp3' />
        </div>
      </div>
    </div>
  );
}
