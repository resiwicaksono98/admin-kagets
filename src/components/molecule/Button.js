import React from 'react';



const Button = ({ text, buttonClass,disabled, ...rest }) => {
    return (
        <button type='submit' className={`text-white ${buttonClass} focus:ring-4 ont-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed `} disabled={disabled}  {...rest}>{text}</button>
    );
}

export default Button;
