import React, { useEffect, useState } from 'react';
import { getNews } from '../../api/newsApi';
import { NewsComponents } from '../../components/atom';
import { ButtonLink, Search, TextInfoPage } from '../../components/molecule';

const Manage = () => {
    const [newst, setNewst] = useState([])

    useEffect(() => {
        let isUnmount = false
        if (!isUnmount) {
            getNews()
                .then(result => {
                    setNewst(result.data.rows)
                })
                .catch(err => console.log(err.message))


        }
        return () => {
            isUnmount = true
        };

    }, []);

    return (
        <div>
            <TextInfoPage name={'Manage News'} />
            <Search placeholder={'Search News'} />
            <ButtonLink linkTo={'/news/create'} text={
                <div className='flex items-center justify-center'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>Add New</div>
            } buttonClass={'bg-blue-500 hover:bg-bluße-700 my-4'} />
            <NewsComponents data={newst} />
        </div>
    );
}

export default Manage;
