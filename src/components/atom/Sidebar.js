import React from 'react';
import { Outlet, useNavigate, } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { logout } from '../../api/authApi';
import { NavBrand, Accoordion, Button } from '../molecule';
import Cookie from 'js-cookie'
import AuthGuard from '../../middleware/AuthGuard';


const Sidebar = (props) => {
    const { user, auth } = props
    const navigate = useNavigate()
    return (
        <AuthGuard user={user} auth={auth}>
            <div>
                <div className="grid grid-cols-5 gap-3">
                    <div className=" col-span-1 bg-blue-50">
                        <div>
                            {/* Nav Brand */}
                            <NavBrand />
                        </div>
                        <div>
                            {/* Accordion */}
                            <Accoordion mainTitle={'Dashboad'} to={'/'} />
                            <Accoordion mainTitle={'News'} to={'/news'} subTitle={[
                                { name: 'Manage', to: '/news/manage' },
                                { name: 'History', to: '/news/history' },
                            ]} />
                            <Accoordion mainTitle={'Complaint'} to={'/Complaint'} subTitle={[
                                { name: 'Main', to: '/complaint' },
                            ]} />
                            <Accoordion mainTitle={'Category'} to={'/category'}/>
                            <Accoordion mainTitle={'Problem'} to={'/problem'}/>
                            <Button text={'Logout'} buttonClass={' w-8/12 mx-7 bg-blue-500 hover:bg-blue-700 uppercase tracking-wider mt-20'} onClick={async () => {
                                await logout()
                                    .then(res => {
                                        Cookie.remove('x-auth-token')
                                        navigate(0)
                                    })
                                    .catch(err => console.log(err))
                            }} />
                        </div>
                    </div>
                    <div className=" col-span-4 bg-blue-50 h-screen overflow-auto p-6">
                        <Outlet />
                        <ToastContainer />
                    </div>
                </div>

            </div>
        </AuthGuard>

    );
}


export default Sidebar;
