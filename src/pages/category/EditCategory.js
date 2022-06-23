import { Formik } from 'formik';
import React from 'react';
import { Button, NavigateBack, TextInfoPage } from '../../components/molecule';
import * as Yup from 'yup'
import { FormikInput } from '../../components/molecule/formik';
import { useEffect } from 'react';
import { GetByIdCategory, updateCategory } from '../../api/categoryApi';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';

const EditCategory = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [categories, setCategories] = useState([])

    useEffect(() => {
        let mounted = true
        if (mounted) {
            GetByIdCategory(id)
                .then(res => setCategories(res[0]))
                .catch(err => console.log(err))
        }
        return () => { mounted = false }
    }, [id])
    return (
        <div className='bg-white px-4  my-2 rounded-xl'>
            <TextInfoPage name={'Edit Category'} addClass={'py-4'} />
            <NavigateBack linkTo={-1} />
            <Formik
                initialValues={{
                    name: categories.name || ''
                }}
                enableReinitialize={true}
                validationSchema={
                    Yup.object({
                        name: Yup.string().required()
                    })
                }
                onSubmit={(values) => {
                    const loading = toast.loading('Loading....')
                    updateCategory({ id: id, value: values })
                    .then(res => {
                            toast.update(loading, { render: 'Success Update', type: 'success', autoClose: 1000, isLoading: false, position: 'top-center' })
                            setTimeout(() => {
                                navigate('/category')
                            }, 1200)
                        })
                        .catch(err => console.log(err))
                }}
            >
                {props => (
                    <form onSubmit={props.handleSubmit} className='px-2 py-4'>
                        <FormikInput label={'Name'} type='text' name={'name'} placeholder='Category Name' {...props.getFieldProps('name')} error={props.errors.name && props.touched.name ? props.errors.name : ''} onBlur={props.handleBlur} />
                        <Button text={'Simpan'} buttonClass={'bg-blue-500 hover:bg-blue-700'} />
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default EditCategory;
