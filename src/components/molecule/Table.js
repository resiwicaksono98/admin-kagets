import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Table = ({ headerTable,body, ClassThead, classTbody }) => {
    return (
        <div>
            <div className='py-8'>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                {headerTable.map((header) => (
                                    <th scope="col" key={header} className={`px-6 py-3 text-center ${ClassThead}`}>
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                                    
                        <tbody>
                            {body}
                        </tbody>
                    </table>
                </div>

            </div>
        </div >
    );
}

export default Table;
