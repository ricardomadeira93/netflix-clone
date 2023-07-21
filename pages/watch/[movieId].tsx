import React, { useState, useEffect, useRef, useCallback } from 'react';
import useMovie from '@/hooks/useMovie';
import { useRouter } from 'next/router';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Watch = () => {
  const router = useRouter();
  const { movieId } = router.query;
  const { data } = useMovie(movieId as string);
  const [showTitle, setShowTitle] = useState(true);

  // Function to hide title and controls after a certain timeout of no mouse movement
  const hideTitleAndControls = () => {
    setShowTitle(false);
  };

  // Timeout ref to store the reference for clearing later
  const timeout = useRef<NodeJS.Timeout>();

  // useCallback to memoize the handleMouseMovement function
  const handleMouseMovement = useCallback(() => {
    setShowTitle(true);
    clearTimeout(timeout.current);
    timeout.current = setTimeout(hideTitleAndControls, 3000);
  }, []);

  // Add event listeners to handle mouse movement and hide/show the title and controls
  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMovement);
    timeout.current = setTimeout(hideTitleAndControls, 3000);

    // Clean up the event listener and the timeout on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMovement);
      clearTimeout(timeout.current);
    };
  }, [handleMouseMovement]);

  return (
    <div className='h-screen w-screen bg-background'>
      <div
        className={`fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70 ${
          showTitle ? 'opacity-100' : 'opacity-0'
        } transition-opacity`}
      >
        <AiOutlineArrowLeft
          onClick={() => router.push('/')}
          className='text-text cursor-pointer'
          size={35}
        />
        <p className='text-text text-1xl md:text-3xl font-bold'>
          <span className='font-light'>Watching: {''}</span>
          {data?.title}
        </p>
      </div>
      <video
        autoPlay
        controls
        className={`h-full w-full ${
          showTitle ? 'opacity-100' : 'opacity-0'
        } transition-opacity`}
        src={data?.videoUrl}
      ></video>
    </div>
  );
};

export default Watch;
