import { CheckIcon, XIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const CardNews = ({ img, id, title, created, published }) => {
    const [publish, setPublish] = useState(true)
    return (
        <Link to={`/news/${id}`}>
            <div className='bg-gradient-to-r from-blue-500 to-blue-700 p-4 rounded-xl hover:translate-y-2 hover:shadow-2xl cursor-pointer] h-[380px]'>
                <img src={img} alt="covid" className='rounded-xl h-40 mx-auto  shadow-xl ' />
                <div className='tracking-wider '>
                    <div className={`pt-2 py-2 my-2 text-xl  h-16 text-white px-3   ${title.length > 30 ? 'overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-blue-300   scrollbar-thumb-rounded-full scrollbar-track-rounded-full' : 'none'}`}>{title}</div>
                    <div className={`text-base font-mono rounded-md my-2 py-1 px-2   flex items-center justify-center text-white ${publish ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600'}`}>Pusblished
                        {publish ? <CheckIcon height={'20px'} /> : <XIcon height={'20px'} />}

                    </div>
                    <div className='pt-1 text-xs text-gray-300 grid gap-2 font-mono'>
                        <div>Created On: {created}</div>
                        <div>Published On : {published}</div>
                    </div>
                </div>
            </div>
        </Link>

    );
}

export default CardNews;
