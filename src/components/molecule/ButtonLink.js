import React from 'react';
import { Link } from 'react-router-dom';

const ButtonLink = ({linkTo, buttonClass, text, ...rest}) => {
    return (
        <Link to={linkTo} {...rest}>
            <button className={`text-white ${buttonClass} focus:ring-4 ont-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none `} >{text}</button>
        </Link>
    );
}

export default ButtonLink;
