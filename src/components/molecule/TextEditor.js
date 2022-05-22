import React, { useState } from 'react';
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";



const TextEditor = ({ label,content, ...rest }) => {
    const { quill, quillRef } = useQuill();
    return (
        <div className='mb-4'>
            <label htmlFor={label} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">{label}</label>
            <div className=" border-2" ref={quillRef}>
                {content}
            </div>
        </div>
    );
}

export default TextEditor;
