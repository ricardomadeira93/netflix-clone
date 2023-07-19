import Image from 'next/image';
import { BsChevronBarDown } from 'react-icons/bs';
import { TbDeviceDesktopSearch, TbBellRinging } from 'react-icons/tb';
import { useState, useCallback, useEffect } from 'react';

import NavbarItem from './NavbarItem';
import MobileMenu from './MobileMenu';
import AccountMenu from './AccountMenu';

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowAccountMenu(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);
  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  return (
    <nav className='w-full fixed z-40'>
      <div
        className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-250 ${
          showBackground ? 'bg-zinc-900 bg-opacity-90' : ''
        }`}
      >
        <Image
          className=' lg:h-7 '
          src='/images/logo.png'
          width={100}
          height={16}
          alt='logo'
        />
        <div className='flex-row ml-8 gap-7 hidden lg:flex'>
          <NavbarItem label='Home' />
          <NavbarItem label='Movies' />
          <NavbarItem label='Series' />
          <NavbarItem label='New & Popular' />
          <NavbarItem label='My list' />
          <NavbarItem label='Browse by languages' />
        </div>
        <div
          onClick={toggleMobileMenu}
          className='lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative'
        >
          <p className='text-white text-sm'>Browse</p>
          <BsChevronBarDown
            className={`text-text transition mt-1 ${
              showMobileMenu ? 'rotate-180' : 'rotate-0'
            }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className='flex flex-row ml-auto gap-7 items-center'>
          <div className='text-gray-200 hover:text-accent cursor-pointer transition'>
            <TbDeviceDesktopSearch size={25} />
          </div>
          <div className='text-gray-200 hover:text-accent cursor-pointer transition'>
            <TbBellRinging size={25} />
          </div>
          <div
            onClick={toggleAccountMenu}
            className='flex flex-row items-center gap-2 cursor-pointer relative'
          >
            <div className='w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden'>
              <Image
                src='/images/default-blue.png'
                width={50}
                height={50}
                alt='default'
              />
            </div>
            <BsChevronBarDown
              className={`text-text transition mt-1 ${
                showAccountMenu ? 'rotate-180' : 'rotate-0'
              }`}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
