import { useCallback, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Input from '@/components/Input';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [variant, setVariant] = useState('login');
  const router = useRouter();

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === 'login' ? 'register' : 'login'
    );
  }, []);

  // Login
  const login = useCallback(async () => {
    try {
      await signIn('credentials', {
        email,
        password,
        redirect: false,
        callbackUrl: '/',
      });
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  }, [email, password, router]);

  // Register
  const register = useCallback(async () => {
    try {
      await axios.post('api/register', {
        email,
        name,
        password,
      });
      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, login]);

  return (
    // Auth Background
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      {/* Auth Container */}
      <div className='bg-black w-full h-full lg:bg-opacity-70'>
        {/* Navigation */}
        <nav className='py-5 px-12'>
          <Image src='/images/logo.png' width={100} height={12} alt='Logo' />
        </nav>
        {/* Form */}
        <div className='flex justify-center'>
          <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:h-2/5 lg:max-w-md rounded-md w-full'>
            <h2 className='text-white text-3xl mb-8 font-semibold'>
              {variant === 'login' ? 'Sign in' : 'Register'}
            </h2>
            <div className='flex flex-col gap-4'>
              {/* Switch between Login or Register */}
              {variant === 'register' && (
                <Input
                  label='Username'
                  onChange={(ev: any) => setName(ev.target.value)}
                  id='name'
                  type=''
                  value={name}
                />
              )}

              <Input
                label='Email'
                onChange={(ev: any) => setEmail(ev.target.value)}
                id='email'
                type='email'
                value={email}
              />
              <Input
                label='Password'
                onChange={(ev: any) => setPassword(ev.target.value)}
                id='name'
                type='password'
                value={password}
              />
            </div>
            <button
              onClick={variant === 'login' ? login : register}
              className='bg-teal-100 py-3 text-teal-950  text-md font-semibold rounded-md w-full mt-10 hover:bg-green-400 transition'
            >
              {variant === 'login' ? 'Login' : 'Sign Up'}
            </button>
            <div className='flex flex-row items-center gap-4 mt-8 justify-center'>
              <div
                onClick={() => signIn('google', { callbackUrl: '/' })}
                className='w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition'
              >
                <FcGoogle size={25} />
              </div>
              <div
                onClick={() => signIn('github', { callbackUrl: '/' })}
                className='w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition'
              >
                <FaGithub size={25} />
                he
              </div>
            </div>
            <div className='text-center'>
              <p className='text-neutral-500 mt-6 '>
                {variant === 'login'
                  ? 'First time using Netflix?'
                  : 'Already have an account?'}
              </p>
              <span
                onClick={toggleVariant}
                className='text-white ml-1 hover:underline cursor-pointer'
              >
                {variant === 'login' ? 'Create an Account' : 'Login'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
