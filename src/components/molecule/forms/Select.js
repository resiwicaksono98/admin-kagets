import React from 'react';

const Select = React.forwardRef(({ label, name, selectClass, dataPresent, labelClass, selected, options, categorySelected, ...rest }, ref) => {
    return (
        <div>
            <div className="mb-4">
                <label htmlFor={label} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">{label}</label>
                <select name={name} ref={ref}  className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${selectClass}`} {...rest} >
                    {options.map((option) => (
                        <option key={option.value} value={option.value} >{option.name}</option>
                    ))}
                </select>
            </div>
        </div>
    );
})

export default Select;
