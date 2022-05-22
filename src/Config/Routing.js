import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Dashboard,History,Manage,News, NewsDetail } from '../pages';


const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/news" element={<News />} />
                <Route path="/news/manage" element={<Manage />} />
                <Route path="/news/idnya" element={<NewsDetail />} />
                <Route path="/news/history" element={<History />} />
            </Routes>
        </div>
    );
}

export default Routing;
