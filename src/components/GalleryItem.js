// @ts-nocheck
import Link from 'next/link';
import Image from 'next/image';

const GalleryItem = ({ img, date, title, articleLink, source }) => {
  return (
    <Link href={articleLink} className="flex flex-col text-left border border-transparent rounded-lg shadow-xl transition duration-300 ease-in-out transform hover:scale-105 lg:w-80 md:w-70 sm:w-full">
        <div className='flex-none h-1/2 overflow-hidden rounded-t-lg'>
            <Image src={img} alt='' width='1000' height='1000'/>
        </div>
        
        
          <p className='px-4 pt-4 pb-2 text-xs'>{date}</p>
          <h2 className='px-4 text-l'>{title}</h2>
          <p className='py-4 px-4 italic text-xs'>Source: {source}</p>
        
        {/* <Link className='border rounded-sm w-1/2 ml-4 mb-4 px-3 py-2 bg-yellow-500 text-white' href={articleLink}>Read More</Link> */}
        
    </Link>
  );
};

export default GalleryItem;