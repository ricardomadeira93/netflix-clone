import Image from 'next/image';
import NavbarItem from './NavbarItem';

const Navbar = () => {
  return (
    <nav className='w-full fixed z-40'>
      <div className='px-4 md:px-16 py-6 flex flex-row items-center  border border-black bg-black duration-250  bg-opacity-90'>
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
        <div className='lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative'>
            <p className="text-white text-sm">Browse</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
