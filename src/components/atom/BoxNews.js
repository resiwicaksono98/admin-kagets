import React from 'react';

const BoxNews = ({name, icon, classBox, classText, total}) => {
    return (
        <div>
            <div className={`w-full rounded-xl flex items-center px-4 shadow-lg ${classBox}` }>
                <div>{icon}</div>
                <div className={`w-full text-center text-white text-xl font-mono uppercase ${classText}`}>{name} : <span>{total}</span></div>
            </div>
        </div>
    );
}

export default BoxNews;
