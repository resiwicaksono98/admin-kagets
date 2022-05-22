import { ThumbUpIcon } from '@heroicons/react/solid';
import React from 'react';
import { Button } from '../components/molecule';

const Dashboard = () => {
    return (
        <div>
            <div className='mx-2 mb-4 tracking-widest text-gray-400 text-xl'>Dashboard</div>
            <div className='grid grid-cols-3 gap-4  text-white   '>
                <div className="bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl p-6 shadow-xl flex items-center">
                    <ThumbUpIcon height={'70px'} />
                    <div className="grid mx-auto gap-y-2 tracking-widest">
                        <div className='uppercase text-xl'>Success</div>
                        <div className='text-center bg-white text-black rounded-full'>214</div>
                    </div>
                </div>
                <div className="bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl p-6 shadow-xl flex items-center">
                    <ThumbUpIcon height={'70px'} />
                    <div className="grid mx-auto gap-y-2 tracking-widest">
                        <div className='uppercase text-xl'>Success</div>
                        <div className='text-center bg-white text-black rounded-full'>214</div>
                    </div>
                </div>
                <div className="bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl p-6 shadow-xl flex items-center">
                    <ThumbUpIcon height={'70px'} />
                    <div className="grid mx-auto gap-y-2 tracking-widest">
                        <div className='uppercase text-xl'>Success</div>
                        <div className='text-center bg-white text-black rounded-full'>214</div>
                    </div>
                </div>
            
            </div>
        </div>
    );
}

export default Dashboard;
