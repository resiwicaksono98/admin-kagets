import React from 'react';

const FormikImage = ({ label, name, onChange,error, ...other }) => {
    return (
        <div className="mb-4">
            <label htmlFor={label} className={` block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300`}>{label}</label>
            <input type="file" name={name} className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} onChange={e => onChange(e)} {...other} />
            <div className='text-red-500 text-sm px-1 py-1 font-mono'>{error}</div>
        </div>
    );
}

export default FormikImage;
