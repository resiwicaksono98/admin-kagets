import React from 'react';
import { TextInfoPage } from '../../components/molecule';

const HistoryComplaint = () => {
    return (
        <div>
            <TextInfoPage name={'History News Kagets App'} />
            <div className='bg-white h-screen rounded-xl p-6'>
                <div className='text-xl font-mono'>- Log Data Complaint - </div>
                <div className='py-8'>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        NO
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Title News
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Date
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                                    <td className="px-6 py-4">
                                        1
                                    </td>
                                    <th scope='row' className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                        Cape Hamba Ya Allah
                                    </th>
                                    <td className="px-6 py-4">
                                        publish
                                    </td>
                                    <td className="px-6 py-4">
                                        21 Mei 2022
                                    </td>
                                </tr>
                                <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                                    <td className="px-6 py-4">
                                        2
                                    </td>
                                    <th scope='row' className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                        Cepet Cepet Kelar Ya
                                    </th>
                                    <td className="px-6 py-4">
                                        Delete
                                    </td>
                                    <td className="px-6 py-4">
                                        19 Mei 2022
                                    </td>
                                </tr>


                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HistoryComplaint;
