import Image from 'next/image';

type Props = {
    image: string;
    title: string;
};

function MediumCard({ image, title }: Props) {
    return (
        <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
            <div className='relative h-80 w-80'>
                <Image src={image} alt='image-med-thumbnail' layout='fill' className='rounded-xl' />
            </div>
            <h3 className='text-2xl mt-3'>{title}</h3>
        </div>
    );
}

export default MediumCard;
