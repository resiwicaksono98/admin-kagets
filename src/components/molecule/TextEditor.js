import React, { forwardRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



const TextEditor = ({ label, name,defaultValue, ...rest }, ref) => {
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ],
    }

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ]
    return (
        <div className='mb-4'>
            <label htmlFor={label} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">{label}</label>
            <ReactQuill theme='snow' modules={modules} ref={ref} name={name}  formats={formats}  {...rest} />
        </div>
    );
}

export default forwardRef(TextEditor);
