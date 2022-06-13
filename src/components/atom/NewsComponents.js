import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Moment } from "../molecule";
import CardNews from "./CardNews";

function NewsComponents(props) {
    const { data } = props;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className="grid grid-cols-4 gap-3 py-8 ">
                {currentItems.map((news, index) => (
                    <CardNews key={index} id={news.id} img={`http://localhost:3000/${news.image}`} title={news.title} created={
                        <Moment dateTarget={news.createdAt} />
                    } published={<Moment dateTarget={news.updatedAt} />} />
                ))}
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="Next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="Previous"
                renderOnZeroPageCount={null}
                containerClassName={"flex items-center justify-center py-4 text-[1.2rem] tracking-wider"}
                pageLinkClassName={"hover:bg-blue-400 py-2 px-1 mx-1 rounded hover:text-white"}
                previousLinkClassName={"bg-blue-500 py-2 px-4 mx-2 text-white rounded hover:bg-blue-600"}
                nextLinkClassName={"bg-blue-500 py-2 px-4 mx-2 text-white rounded hover:bg-blue-600"}
                activeLinkClassName={"bg-blue-500 py-2 px-4 text-white rounded"}
            />
        </>
    );
}

export default NewsComponents;
