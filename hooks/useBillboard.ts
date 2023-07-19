import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useBillboard = () => {
  const { error, data, isLoading } = useSWR('/api/random', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    error,
    data,
    isLoading,
  };
};
export default useBillboard;
