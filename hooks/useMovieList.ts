import useSWR from 'swr';
import patcher from '@/lib/fetcher';

const useMovieList = () => {
  const { data, error, isLoading } = useSWR('/api/movies', patcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return { data, error, isLoading };
};

export default useMovieList;
