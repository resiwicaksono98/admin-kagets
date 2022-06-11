import React, { useEffect, useState } from 'react';
import { getNews } from '../../api/newsApi';
import { CardNews } from '../../components/atom';
import { ButtonLink, Moment, Search, TextInfoPage } from '../../components/molecule';
import Pagination from '../../components/molecule/pagination/Pagination';


const Manage = () => {
    const [newst, setNewst] = useState([])
    const [counter, setCounter] = useState(1)
    const [totalPage, setTotalPage] = useState()
    const [perPage, setPerPage] = useState()
    const maxPage = Math.ceil(totalPage / perPage)


    useEffect(() => {
        let isUnmount = false
        if (!isUnmount) {
            getNews(counter)
                .then(result => {
                    setNewst(result.data.rows)
                    setTotalPage(result.data.count)
                    setPerPage(result.per_page);
                })
                .catch(err => console.log(err.message))


        }
        return () => {
            isUnmount = true
        };

    }, [counter, totalPage]);

    const previous = () => {
        setCounter(counter <= 1 ? 1 : counter - 1)
    }
    const next = () => {
        setCounter(counter === maxPage ? maxPage : counter + 1)
    }
    return (
        <div>
            <TextInfoPage name={'Manage News'} />
            <Search placeholder={'Search News'} />
            <ButtonLink linkTo={'/news/create'} text={
                <div className='flex items-center justify-center'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>Add New</div>
            } buttonClass={'bg-blue-500 hover:bg-blue-700 my-4'} />

            <div className="grid grid-cols-4 gap-3 py-8 ">
                {newst.map((news, index) => (
                    <CardNews key={index} id={news.id} img={`http://localhost:3000/${news.image}`} title={news.title} created={
                        <Moment dateTarget={news.createdAt} />
                    } published={<Moment dateTarget={news.updatedAt} />} />
                ))}
            </div>
            <Pagination totalPage={totalPage} counter={counter} perPage={perPage} previous={previous} next={next} />
        </div>
    );
}

export default Manage;
