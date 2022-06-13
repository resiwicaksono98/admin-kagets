import React from 'react';

const FormikInput = (props) => {
    const { label, type, name, placeholder, onChange,error, ...other } = props
    return (
        <div>
            <div className='mb-4'>
                <label htmlFor={label} className={` block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300`}>{label}</label>
                <input type={type} name={name} placeholder={placeholder} onChange={e => onChange(e)} className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500}`} {...other} />
                <div className='text-red-500 text-sm px-1 py-1 font-mono'>{error}</div>
            </div>
        </div>
    );
}

export default FormikInput;
