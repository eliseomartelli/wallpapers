
import Image from 'next/image';

const WallpaperCard = ({ preview, title, location }) => (
    <div className='flex flex-col w-full shadow-lg bg-white select-none rounded-lg overflow-hidden'>
        <div className='relative aspect-square'>
            <Image src={preview} layout="fill" objectFit='cover' />
        </div>
        <div className='p-4'>
            <h2 className='text-lg font-bold'>{title}</h2>
            <p>{location}</p>
        </div>
    </div>
)

export default WallpaperCard;