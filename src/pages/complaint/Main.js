import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Table, Search, TextInfoPage, Modal } from '../../components/molecule';


const Main = () => {

    return (
        <div>
            <TextInfoPage name={'Main Complaint '} />
            <Search placeholder={'Search Complaint'} />
            <Table headerTable={['No', 'Name', 'Status', 'Estimated Time', 'Action']} body={
                <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 hover:bg-blue-100  hover:translate-x-1 transition-all duration-500 text-base">
                    <td className={`px-6 py-4 text-center`} >
                        1
                    </td>
                    <td className={`px-6 py-4 text-center`} >
                        Resi Wicaksono
                    </td>
                    <td className={`text-center`} >
                        Verifikasi
                    </td>
                    <td className={`px-6 py-4 text-center`} >
                        5 Hari
                    </td>
                    <td className={`px-6 py-4 text-center`} >
                        <div className='flex items-center justify-center'>
                            <Modal textModal={'Change Status'} buttonClassModal={'bg-green-500 hover:bg-green-600'} titleModal={'Action Complaint ResiWicaksono'} descModal={
                                <div>
                                    <div className='text-base'>Select Action Change Complaint</div>
                                    <div className='py-3'>
                                        <ul>
                                            <li className='py-2 px-3'>Name             : Resi Wicaksono</li>
                                            <li className='py-2 px-3'>Complaint Id     : 238293-82392-22</li>
                                            <li className='py-2 px-3'>Complaint Number : #221</li>
                                            <li className='py-2 px-3'>Status: Verifikasi</li>
                                            <li className='py-2 px-3'>Estimated time: 7 Hari</li>
                                            <li className='py-2 px-3'>Created At : 27-Mei-2022 12:39</li>
                                        </ul>
                                    </div>
                                </div>
                            } buttonDialog={
                                <div className='flex items-center'>
                                    <Button text={'Successfully'} buttonClass="bg-green-500 hover:bg-green-600" linkTo={'/'} />
                                    <Button text={'Verification'} buttonClass="bg-blue-500 hover:bg-blue-600" linkTo={'/'} />
                                    <Button text={'Rejected'} buttonClass="bg-red-500 hover:bg-red-600" linkTo={'/'} />
                                </div>
                            } />
                            <Button text={'Update Result'} buttonClass="bg-blue-500 hover:bg-blue-600" linkTo={'/complaint/status/id'} />
                            <Button text={'Edit Complaint'} buttonClass="bg-indigo-500 hover:bg-indigo-600" linkTo={'/complaint/id'} />
                        </div>
                    </td>
                </tr>
            } />
        </div>
    );
}

export default Main;
