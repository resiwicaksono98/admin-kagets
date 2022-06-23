import { Routes, Route, Navigate } from "react-router-dom";
import { Sidebar } from '../components/atom';
import { UpdateResult, Dashboard, HistoryNews, Main, Manage, News, NewsDetail, EditComplaint, CreateNews, Login, MainCategory, CreateCategory, EditCategory, MainProblem, CreateProblem, EditProblem } from '../pages';

const Routing = (props) => {
    const { user, auth } = props
    return (
        <div>
            <Routes>
                <Route path="/" element={<Sidebar user={user} auth={auth} />} >
                    <Route path="/" element={<Dashboard />} />
                    {/* News */}
                    <Route path="news" element={<News />} />
                    <Route path="/news/manage" element={<Manage />} />
                    <Route path="/news/create" element={<CreateNews />} />
                    <Route path="/news/:id" element={<NewsDetail />} />
                    <Route path="/news/history" element={<HistoryNews />} />
                    {/* Complaint */}
                    <Route path="/complaint" element={<Main />} />
                    <Route path="/complaint/message/:id" element={<UpdateResult />} />
                    <Route path="/complaint/:id" element={<EditComplaint />} />
                    {/* Category */}
                    <Route path="/category" element={<MainCategory />}>
                        <Route path='create' element={<CreateCategory />} />
                    </Route>
                    <Route path='/category/:id' element={<EditCategory />} />
                    {/* Problem */}
                    <Route path="/problem" element={<MainProblem />}>
                        <Route path="create" element={<CreateProblem />} />
                    </Route>
                    <Route path="/problem/:id" element={<EditProblem />} />
                </Route>
                <Route path='/auth/login' element={auth ? <Navigate to={'/'} /> : <Login />} />
            </Routes>


        </div>
    );
}

export default Routing;
