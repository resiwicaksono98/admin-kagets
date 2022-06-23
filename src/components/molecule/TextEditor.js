import React, { forwardRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



const TextEditor = ({ label, name,defaultValue,placeholder,onChange,error, ...other }, ref) => {
    const modules = {
        toolbar: [
            [{ 'header': [1, 2,3,4,4,6, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
        
        ],
    }
    return (
        <div className='mb-4'>
            <label htmlFor={label} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">{label}</label>
            <ReactQuill theme='snow' modules={modules} placeholder={placeholder}  name={name} onChange={e => onChange(e)} {...other} />
            <div className='text-red-500 text-sm px-1 py-1 font-mono'>{error}</div>
        </div>
    );
}

export default forwardRef(TextEditor);
