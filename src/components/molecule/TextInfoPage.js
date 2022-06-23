import React from 'react';

const TextInfoPage = ({name, addClass}) => {
    return (
            <div className={`mx-2 mb-4 tracking-widest text-gray-400 text-xl ${addClass}`}>{name}</div>
    );
}

export default TextInfoPage;
