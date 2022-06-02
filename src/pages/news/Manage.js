import React, { useEffect, useState } from 'react';
import { getNews } from '../../api/newsApi';
import { CardNews } from '../../components/atom';
import { Moment, Pagination, Search, TextInfoPage } from '../../components/molecule';


const Manage = () => {
    const [newst, setNewst] = useState([])

    useEffect(() => {
        let isUnmount = false
        if (!isUnmount) {
            getNews()
                .then(result => setNewst(result))
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
            <div className="grid grid-cols-4 gap-3 py-8 ">
                {newst.map((news, index) => (
                    <CardNews key={index} id={news.id} img={`http://localhost:3000/${news.image}`} title={news.title} created={
                        <Moment dateTarget={news.createdAt} />
                    } published={<Moment dateTarget={news.updatedAt} />} />
                ))}
            </div>
            <Pagination />
        </div>
    );
}

export default Manage;
