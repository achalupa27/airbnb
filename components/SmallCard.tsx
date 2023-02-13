import Image from 'next/image';

type Props = {
    image: string;
    location: string;
    distance: string;
};

function SmallCard({ image, location, distance }: Props) {
    return (
        <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-300 ease-out'>
            <div className='relative h-16 w-16'>
                <Image src={image} alt='image-thumbnail' layout='fill' className='rounded-lg' />
            </div>
            <div className=''>
                <h2>{location}</h2>
                <h3 className='text-gray-500'>{distance}</h3>
            </div>
        </div>
    );
}

export default SmallCard;
