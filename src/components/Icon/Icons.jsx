import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa';

function Icons() {
  const iconsLoader = [
    {
      id: 'twitter',
      iconComponent: <FaTwitter className='cursor-pointer scale-150 duration-1000 hover:text-white' />,
    },
    {
      id: 'facebook',
      iconComponent: <FaFacebookF className='cursor-pointer scale-150 duration-1000 hover:text-white' />,
    },
    {
      id: 'instagram',
      iconComponent: <FaInstagram className='cursor-pointer scale-150 duration-1000 hover:text-white' />,
    },
    {
      id: 'youtube',
      iconComponent: <FaYoutube className='cursor-pointer scale-150 duration-1000 hover:text-white' />,
    },
  ];
  
  // ...
  
  return (
    <div className='flex gap-5 text-[14px]'>
      {iconsLoader.map((items) => (
        <Link
          key={items.id}  // Use a unique identifier as the key
          to='https://github.com/NoorNazar123'
          target='_blank'
          className='bg-gray-300 p-4 hover:bg-orange-500 rounded-full hover:duration-1000'
        >
          {items.iconComponent}
        </Link>
      ))}
    </div>
  );
  
}

export default Icons;
