import { Inter } from 'next/font/google';
import { getSession, signOut } from 'next-auth/react';
import { NextPageContext } from 'next';
import useCurrentUser from '@/hooks/useCurrentUser';
const inter = Inter({ subsets: ['latin'] });

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const {data: user} = useCurrentUser();
  
  return (
    <>
      <button
        onClick={() => signOut()}
        className='h-10 w-full bg-green-400 transition hover:bg-white'
      >
        <p className="">Logged in as : {user?.name}</p>
        Logout
      </button>
    </>
  );
}
