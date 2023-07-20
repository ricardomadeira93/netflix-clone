import useBillboard from '@/hooks/useBillboard';
import React from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const Billboard = () => {
  const { data } = useBillboard();

  return (
    <div className='relative h-[46.30vw]'>
      <video
        className='w-full h-[46.30vw] object-cover brightness-[60%]'
        poster={data?.thumbnailUrl}
        src={data?.videoUrl}
        autoPlay
        muted
        loop
      ></video>
      <div className='absolute top-[30%] md:top-[40%] ml-4 md:ml-16'>
        <p className='text-text text-1xl md:text-5xl h-full w-[50%] lg:text-6lx font-bold drop-shadow-xl'>
          {data?.title}
        </p>
        <p className='text-text text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl'>
          {data?.description}
        </p>
        <div className='flex flex-row items-center mt-3 md:mt-4 gap-3'>
          <button className='bg-background text-text bg-opacity-60 hover transition duration-300 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:text-accent'>
            <AiOutlineInfoCircle className='mr-1' />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
