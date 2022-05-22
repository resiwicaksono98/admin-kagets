import React from 'react';
import { Link } from 'react-router-dom';


const Button = ({text, linkTo, buttonClass}) => {
    return (
        <Link to={linkTo}>
           <button className={`text-white ${buttonClass} focus:ring-4 ont-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none `}>{text}</button>
        </Link>
    );
}

export default Button;
