import Image from 'next/image';

type Props = {
    img: string;
    title: string;
    description: string;
    buttonText: string;
};

function LargeCard({ img, title, description, buttonText }: Props) {
    return (
        <section className='relative py-10 cursor-pointer'>
            <div className='relative h-96 min-w-[300px]'>
                <Image src={img} alt='mountain lake with people on canoe' layout='fill' objectFit='cover' className='rounded-xl' />
            </div>
            <div className='absolute top-28 left-12'>
                <h3 className='text-4xl mb-3 w-64'>{title}</h3>
                <p>{description}</p>
                <button className='text-sm text-white bg-gray-900 rounded-lg px-4 py-2 mt-3'>{buttonText}</button>
            </div>
        </section>
    );
}

export default LargeCard;
