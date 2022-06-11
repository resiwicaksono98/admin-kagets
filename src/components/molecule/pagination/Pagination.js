import React from 'react';
import { Link } from 'react-router-dom';
import PageNumber from './PageNumber';

const Pagination = ({ totalPage, counter, perPage,previous, next }) => {
    return (
        <div className='py-8 flex justify-center'>
            <nav aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px">
                    <li>
                        <Link to={'/news/manage'} onClick={previous} className="py-2 px-3 ml-0 leading-tight text-white bg-blue-500 rounded-l-lg border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:bg-blue-800 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-700 dark:hover:text-blue-500">Previous</Link>
                    </li>
                    <li>
                        <PageNumber totalPage={totalPage} counter={counter} perPage={perPage} />
                    </li>
                    <li>
                        <Link to={'/news/manage'} onClick={next} className="py-2 px-3 leading-tight text-white bg-blue-500 rounded-r-lg border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:bg-blue-800 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-700 dark:hover:text-blue-500">Next</Link>
                    </li>
                </ul>
            </nav>

        </div>
    );
}

export default Pagination;
