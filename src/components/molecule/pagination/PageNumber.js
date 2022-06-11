import React from 'react';

const PageNumber = ({totalPage, perPage, counter}) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPage / perPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav>
            {pageNumbers.map(number => (
                <a key={number} className={`${number === counter ? `bg-blue-500 text-white` : 'text-gray-500'} mx-1 py-2 px-3 rounded leading-tight  bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>{number}</a>
            ))}
        </nav>
    )
  
}

export default PageNumber;
