import { Formik } from 'formik';
import React from 'react';
import { Button, TextInfoPage } from '../../components/molecule';
import { FormikInput } from '../../components/molecule/formik';
import * as Yup from 'yup'
import { newCategory } from '../../api/categoryApi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CreateCategory = () => {
    const navigate = useNavigate()
    return (
        <div className='bg-white px-4  my-2 rounded-xl'>
            <TextInfoPage name={'Create Category'} addClass={'py-4'} />
            <Formik
                initialValues={{
                    name: ''
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string().required()
                    })
                }
                onSubmit={(values) => {
                    const loading = toast.loading('Loading....')
                    newCategory(values)
                        .then(res => {
                            toast.update(loading, { render: 'Created Success', type: 'success', autoClose: 1000, isLoading: false })
                            setTimeout(() => {
                                navigate(0)
                            }, 1200)
                        })
                        .catch(err => console.log(err))
                }}
            >
                {props => (
                    <form onSubmit={props.handleSubmit} className='px-2'>
                        <FormikInput label={'Name'} type='text' name={'name'} placeholder='Category Name' onChange={props.handleChange} error={props.errors.name && props.touched.name ? props.errors.name : ''} onBlur={props.handleBlur} />
                        <Button text={'Simpan'} buttonClass={'bg-blue-500 hover:bg-blue-700'} />
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default CreateCategory;
