const WallpaperCardShim = () => (
    <div className='flex flex-col w-full shadow-lg bg-white select-none rounded-lg overflow-hidden'>
        <div className='relative aspect-square bg-gray-100 animate-pulse'>
        </div>
        <div className='p-4 animate-pulse'>
            <span className="block h-4 w-1/2 bg-gray-200 mb-2"></span>
            <span className="block h-2 w-2/3 bg-gray-100"></span>
        </div>
    </div>
)

export default WallpaperCardShim;