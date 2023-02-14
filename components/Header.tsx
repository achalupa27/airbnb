import Image from 'next/image';
import { GlobeAltIcon, Bars3Icon, UserCircleIcon, UsersIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';

function Header({ placeholder }: { placeholder: string }) {
    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState<string>('1');
    const router = useRouter();

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    };

    const resetInput = () => {
        setSearchInput('');
    };

    const handleSelect = (ranges: any) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    };

    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests,
            },
        });
    };

    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
            <div onClick={() => router.push('/')} className='relative flex items-center h-10 cursor-pointer my-auto'>
                <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png' alt='airbnb logo' layout='fill' objectFit='contain' objectPosition='left' />
            </div>
            <div className='flex items-center border-2 rounded-full py-2 md:shadow-sm'>
                <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} type='text' placeholder={placeholder || 'Start your search'} className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400' />
                <MagnifyingGlassIcon className='hidden md:inline-flex h-8 bg-[#FD5B61] text-white rounded-full p-2 mx-2 cursor-pointer' />
            </div>
            <div className='flex items-center justify-end space-x-4 text-gray-500'>
                <p className='hidden md:inline'>Become a Host</p>
                <GlobeAltIcon className='h-6 cursor-pointer' />
                <div className='flex border-2 rounded-full space-x-2 p-2 cursor-pointer'>
                    <Bars3Icon className='h-6' />
                    <UserCircleIcon className='h-6' />
                </div>
            </div>

            {searchInput && (
                <div className='flex flex-col col-span-3 mx-auto'>
                    <DateRangePicker ranges={[selectionRange]} minDate={new Date()} rangeColors={['#FD5B61']} onChange={handleSelect} />
                    <div className='flex items-center border-b mb-4'>
                        <h2 className='text-2xl flex-grow font-semibold '>Number of Guests</h2>
                        <UsersIcon className='h-5' />
                        <input type='number' min={1} value={noOfGuests} onChange={(e) => setNoOfGuests(e.target.value)} className='w-12 pl-2 text-lg outline-none text-[#FD5B61]' />
                    </div>
                    <div>
                        <div className='flex'>
                            <button onClick={resetInput} className='flex-grow text-gray-500'>
                                Cancel
                            </button>
                            <button onClick={search} className='flex-grow text-[#FD5B61]'>
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
