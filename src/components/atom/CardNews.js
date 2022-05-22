import { CheckIcon, XIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const CardNews = ({ img, title, created, published, deleted }) => {
    const [publish, setPublish] = useState(true)
    return (
        <Link to="/news/idnya">
            <div className='bg-gradient-to-r from-blue-500 to-blue-700 p-4 rounded-xl hover:translate-y-2 hover:shadow-2xl cursor-pointer'>
                <img src={img} alt="covid" className='rounded-xl  flex mx-auto  shadow-xl ' />
                <div className='tracking-wider'>
                    <div className='pt-2 text-xl text-white'>{title}</div>

                    <div className={`text-base font-mono rounded-md my-3 flex items-center justify-center text-white ${publish ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600'}`}>Pusblished
                        {publish ? <CheckIcon height={'20px'} /> : <XIcon height={'20px'} />}

                    </div>
                    <div className='pt-2 text-xs text-gray-300 grid gap-2 font-mono'>
                        <div>Created On: {created}</div>
                        <div>Published On : {published}</div>
                        <div>Deleted On : {deleted}</div>
                    </div>
                </div>
            </div>
        </Link>

    );
}

export default CardNews;
