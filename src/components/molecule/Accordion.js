import React from 'react';
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom';

export default function Accoordion({ mainTitle, to,newClass, subTitle = '' }) {
    return (
        <div className={`w-full px-4 py-1 ${newClass}`}>
            <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2 ">
                <Disclosure>
                    {({ open }) => (
                        <div >
                            <Link to={to}>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75 uppercase font-bold ">
                                    <span>{mainTitle}</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button></Link>
                            <Disclosure.Panel className="px-4 text-sm text-gray-500  ">
                                {subTitle ? subTitle.map((subName) => (
                                    <Link to={subName.to} key={subName.name}>
                                        <div className='flex justify-between w-full text-base cursor-pointer font-semibold py-2 text-blue-500 hover:text-blue-600 '>
                                            {subName.name}
                                        </div>
                                    </Link>
                                )) : ''}
                            </Disclosure.Panel>
                        </div>
                    )}
                </Disclosure>
            </div>
        </div>
    )
}

