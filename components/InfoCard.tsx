import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

function InfoCard({ info }: { info: SearchResult }) {
    return (
        <div className='flex py-7 pl-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg rounded-xl transition duration-200 ease-out first:border-t'>
            <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
                <Image src={info.img} alt='rental image' layout='fill' objectFit='cover' className='rounded-2xl' />
            </div>
            <div className='flex flex-col flex-grow pl-5'>
                <div className='flex justify-between'>
                    <p className='flex-grow'>{info.location}</p>
                    <HeartIcon className='h-7 cursor-pointer' />
                </div>
                <h4 className='text-xl'>{info.title}</h4>
                <div className='border-b w-10 pt-2' />
                <p className='pt-2 text-sm text-gray-500 flex-grow'>{info.description}</p>
                <div className='flex justify-between items-end pt-5'>
                    <p className='flex items-center'>
                        <StarIcon className='h-5 text-red-400' />
                        {info.star}
                    </p>
                    <div>
                        <p className='text-lg lg:text-2xl font-semibold pb-2'>{info.price}</p>
                        <p className='text-right font-extralight'>{info.total}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoCard;
