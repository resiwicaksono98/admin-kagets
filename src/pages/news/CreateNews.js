import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { toast, Zoom, ToastContainer } from 'react-toastify';
import { allCategory } from '../../api/categoryApi';
import { Button, PreviewImage, TextEditor, TextInfoPage } from '../../components/molecule';
import { FormikImage, FormikInput, FormikSelect } from '../../components/molecule/formik';
import 'react-toastify/dist/ReactToastify.css';
import { NewsCreate } from '../../api/newsApi';
import { SchemaNews } from '../../components/molecule/yup/NewsYup';




const CreateNews = () => {
    const [categories, setCategories] = useState([])

    const formik = useFormik({
        // initial value
        initialValues: {
            title: '',
            categoryId: '',
            rate: '',
            image: [],
            previewImage: '',
            description: '',
            error: 1
        },
        // Validate schema
        validationSchema: SchemaNews(),
        // Handle submission
        onSubmit: async (value) => {
            try {
                await toast.promise(
                    NewsCreate({ value: value })
                        .then((res) => {
                            console.log(res);
                        })
                        .catch((err) => console.log(err))
                    , {
                        pending: 'Loading...',
                        success: {
                            render() {
                                return 'Yey Success!'
                            }, autoClose: 1000
                        },
                        error: 'Rejected!!! Try Again..'
                    }
                )

            } catch (error) {
                console.log(error.message);
            }
        }
    })

    useEffect(() => {
        let isUnmount = false
        if (!isUnmount) {
            const getCategory = () => {
                allCategory()
                    .then(result => {
                        setCategories(result)
                    })
                    .catch(err => console.log(err.message))
            }

            getCategory()
        }
        return () => {
            isUnmount = false
        }
    }, [formik.errors])
    return (
        <div>
            <TextInfoPage name={'Create New News'} />
            <div className=' bg-white rounded-xl p-6'>
                <form >
                    <div className='grid grid-cols-2 gap-3'>
                        <FormikSelect label={'Category'} name={'categoryId'} value={formik.values.categoryId} error={formik.errors.categoryId && formik.touched.categoryId ? formik.errors.categoryId : ''} onBlur={formik.handleBlur} onChange={formik.handleChange}
                            options={categories.map((category) => (
                                { name: category.name, value: category.id }
                            ))} />
                        {/* Input Title */}
                        <FormikInput label={'Title'} type={'text'} name={'title'} placeholder={'Judul Berita'} value={formik.values.title} onChange={formik.handleChange} error={formik.errors.title && formik.touched.title ? formik.errors.title : ''} onBlur={formik.handleBlur} />
                        {/* Input Rate */}
                        <FormikInput label={'Rate'} type={'number'} name={'rate'} placeholder={'Rating Berita'} value={formik.values.rate} onChange={formik.handleChange} error={formik.errors.rate && formik.touched.rate ? formik.errors.rate : ''} onBlur={formik.handleBlur} />
                        {/* Input Image And Preview */}
                        <FormikImage label={'Image'} name={'image'} onChange={(e) => {
                            formik.setFieldValue('image', e.currentTarget.files[0])
                            formik.setFieldValue('previewImage', URL.createObjectURL(e.currentTarget.files[0]))
                        }} />
                        {/* Load Image */}
                        <PreviewImage condition={formik.values.previewImage} src={formik.values.previewImage} />
                    </div>
                    {/* Rich Editor */}
                    <TextEditor placeholder={'Deskripsi Berita'} label={'Description'} name={'description'} onChange={(e) => {
                        formik.setFieldValue('description', e)
                    }} error={formik.errors.description && formik.touched.description ? formik.errors.description : ''} onBlur={formik.handleBlur} />

                    <Button text={'Create News'} disabled={!formik.isValid ? true : false} buttonClass="bg-blue-600 hover:bg-blue-700" />

                    <ToastContainer transition={Zoom} />
                </form>

            </div>
        </div>
    );
}

export default CreateNews;
