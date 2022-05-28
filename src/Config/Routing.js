import React from 'react';
import { Routes, Route } from "react-router-dom";
import { UpdateResult, Dashboard,HistoryComplaint,HistoryNews,Main,Manage,News, NewsDetail, EditComplaint } from '../pages';


const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/news" element={<News />} />
                <Route path="/news/manage" element={<Manage />} />
                <Route path="/news/idnya" element={<NewsDetail />} />
                <Route path="/news/history" element={<HistoryNews />} />
                <Route path="/complaint/main" element={<Main />} />
                <Route path="/complaint/status/id" element={<UpdateResult />} />
                <Route path="/complaint/id" element={<EditComplaint />} />
                <Route path="/complaint/history" element={<HistoryComplaint />} />
            </Routes>
        </div>
    );
}

export default Routing;
