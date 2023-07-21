import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { GrPlay } from 'react-icons/gr';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import FavoriteButton from './FavoriteButton';
import useInfoModal from '@/hooks/useInfoModal';

interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const { openModal } = useInfoModal();
  const handleOpenModal = useCallback(() => {
    openModal(data?.id);
  }, [openModal, data?.id]);

  const router = useRouter();

  return (
    <div className='group bg-zinc-900 col-span relative h-[12vw]'>
      <Image
        className='cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw]'
        src={data.thumbnailUrl}
        alt='thumbnail'
        width={500}
        height={500}
      />
      <div className='opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100'>
        <Image
          className='cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]'
          src={data.thumbnailUrl}
          width={500}
          height={500}
          alt='thumbnail'
        />
        <div className='z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md'>
          <div className='flex flex-row items-center gap-3'>
            <div
              onClick={() => router.push(`/watch/${data?.id}`)}
              className='cursos-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300'
            >
              <GrPlay size={20} />
            </div>
            <FavoriteButton movieId={data?.id} />
            <div
              onClick={handleOpenModal}
              className='cursor-pointer ml-auto group/item w-6 h-7 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300 '
            >
              <AiOutlineInfoCircle
                size={25}
                className='text-white group-hover/item:text-neutral-300'
              />
            </div>
          </div>
          <p className='text-green-400 font-semibold mt-4'>
            New <span className='text-text'>2023</span>
          </p>
          <div className='flex flex-row mt-4 gap-2 items-center'>
            <p className='text-text text-[10px} lg:text-sm'>{data.duration}</p>
          </div>
          <div className='flex flex-row mt-4 gap-2 items-center'>
            <p className='text-text text-[10px} lg:text-sm'>{data.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
