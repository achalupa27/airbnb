import Image from 'next/image';
import { GlobeAltIcon, Bars3Icon, UserCircleIcon, UsersIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function Header() {
    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
            <div className='relative flex items-center h-10 cursor-pointer my-auto'>
                <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png' alt='airbnb logo' layout='fill' objectFit='contain' objectPosition='left' />
            </div>
            <div className='flex items-center border-2 rounded-full py-2 md:shadow-sm'>
                <input type='text' placeholder='Start your search' className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400' />
                <MagnifyingGlassIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 mx-2 cursor-pointer' />
            </div>
            <div className='flex items-center justify-end space-x-4 text-gray-500'>
                <p className='hidden md:inline'>Become a Host</p>
                <GlobeAltIcon className='h-6 cursor-pointer' />
                <div className='flex border-2 rounded-full space-x-2 p-2 cursor-pointer'>
                    <Bars3Icon className='h-6' />
                    <UserCircleIcon className='h-6' />
                </div>
            </div>
        </header>
    );
}

export default Header;
