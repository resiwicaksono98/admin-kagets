import { Field, Form, Formik } from 'formik';
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Flip, toast, ToastContainer } from 'react-toastify';
import * as yup from 'yup'
import { login } from '../../api/authApi';
import { Button } from '../../components/molecule';
import Cookie from 'js-cookie'
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';


const Login = (props) => {
    const navigate = useNavigate()
    const {auth} = props

    const signInSchema = yup.object({
        email: yup.string().email('Invalid email format').required('Email Wajib Diisi'),
        password: yup.string()
            .required('No password provided.')
    })

    return (
        <div className='flex justify-center font-serif h-screen bg-blue-200 w-screen'>
            <div className=" p-4 w-6/12">
                <div className="text-[38px] mt-[80px] text-center tracking-wider uppercase">Welcome Back</div>
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    onSubmit={async (values) => {
                        try {
                            const id = toast.loading("Please wait...")
                            login(values)
                                .then(res => {
                                    Cookie.set('x-auth-token', res.token)
                                    toast.update(id, { render: "Berhasil Login", position: 'top-center', type: "success", transition: Flip, autoClose: 1000, isLoading: false });
                                    setTimeout(() => {
                                        navigate(0)
                                    }, 1200)
                                })
                                .catch(err => {
                                    toast.update(id, { render: "Gagal Masuk", type: "error", isLoading: false, });
                                });
                        } catch (error) {
                            console.log(error);
                        }
                    }}
                >
                    <Form >
                        <div className='my-4'>
                            <label className="relative mx-auto my-6 text-gray-400 focus-within:text-gray-600 block shadow rounded-xl ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                                <Field id="email" name="email" placeholder="resi@gmail.com" className="rounded-xl py-3 px-4 bg-white placeholder-gray-400 text-gray-500  w-full block pl-14 focus:outline-none" />
                            </label>
                            <label className="relative mx-auto my-6 text-gray-400 focus-within:text-gray-600 block shadow rounded-xl ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 pointer-events-none top-1/2 absolute left-3 transform -translate-y-1/2 " viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                                </svg>
                                <Field type="password" name="password" id="password" placeholder="********" className=" rounded-xl py-3 px-4 bg-white placeholder-gray-400 text-gray-500  w-full block pl-14 focus:outline-none" />
                            </label>
                        </div>
                        <Button text={'Masuk'} buttonClass="bg-blue-500 hover:bg-blue-600 w-full tracking-wider text-xl" />
                        <ToastContainer />
                    </Form>
                </Formik>
            </div>
        </div >
    );
}

export default Login;
