import React from 'react';

const PreviewImage = ({ condition,src, ...other }) => {
    return (
        <div className='mb-4'>
            {condition ? <img src={src} alt="preview" className=' rounded-xl h-52' /> : <div className="flex justify-center items-center bg-gray-100 h-52 w-72" {...other}>No Image Preview</div>}

        </div>
    );
}

export default PreviewImage;
