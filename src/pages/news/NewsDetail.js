import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, Zoom, Flip, ToastContainer } from 'react-toastify';
import { allCategory } from '../../api/categoryApi';
import { getNewsById, NewsUpdate } from '../../api/newsApi';
import { Button, ConfirmAlert, TextEditor, TextInfoPage } from '../../components/molecule';
import { } from '../../components/molecule/Toast';
import { useFormik } from 'formik';
import { FormikImage, FormikInput, FormikSelect } from '../../components/molecule/formik';
import { SchemaNews } from '../../components/molecule/yup/NewsYup';


const NewsDetail = () => {
    const navigate = useNavigate()
    const [newst, setNewst] = useState([])
    const [categories, setCategories] = useState([])
    const { id } = useParams()

    const formik = useFormik({
        // initial value
        initialValues: {
            title: '',
            categoryId: '',
            rate: '',
            image: [],
            previewImage: '',
            description: ''
        },
        // Validate schema
        validationSchema: SchemaNews(),
        // Handle submission
        onSubmit: async (value) => {
            ConfirmAlert({ title: 'Update Data Saat Ini', message: 'Lanjut Update Ga Bre?', onClick: () => updateHandler() })

            const updateHandler = async () => {
                try {
                    const loading = toast.loading("Please wait....", { position: toast.POSITION.TOP_CENTER })
                    await NewsUpdate({ id: id, value: value })
                        .then((res) => {
                            toast.update(loading, {
                                render: 'Success Update', type: 'success', transition: Flip, isLoading: false, closeButton: () => {
                                    setTimeout(() => {
                                        navigate('/news/manage')
                                    }, 1200)
                                }
                            })
                        })
                        .catch((err) => console.log(err, "error"))

                } catch (error) {
                    console.log(error);
                }
            }
        }
    })





    // const handleDelete = async (value) => {
    //     value.preventDefault()
    //     console.log(value);
    // }

    useEffect(() => {
        let isUnmount = false
        if (!isUnmount) {
            const getNews = () => {
                getNewsById({ id: id })
                    .then(res => {
                        setNewst(res)
                        formik.values.categoryId = res[0].categoryId
                        formik.values.title = res[0].title
                        formik.values.rate = res[0].rate
                        formik.values.description = res[0].description
                    })
                    .catch(err => console.log(err.message))
            }
            const getCategory = () => {
                allCategory()
                    .then(result => setCategories(result))
                    .catch(err => console.log(err.message))
            }
            getNews()
            getCategory()
        }
        return () => {
            isUnmount = false
        }
    }, [id]);
    return (
        <div>
            <TextInfoPage name={'Detail News blabla'} />
            <div className=' bg-white rounded-xl p-6'>
                {newst.map((news, index) => (
                    <form key={index}>
                        <div className='grid grid-cols-2 gap-3'>
                            <FormikSelect label={'Category'} name={'categoryId'} error={formik.errors.categoryId && formik.touched.categoryId ? formik.errors.categoryId : ''}  {...formik.getFieldProps('categoryId')}
                                options={categories.map((category) => (
                                    { name: category.name, value: category.id }
                                ))} />
                            {/* Input title */}
                            <FormikInput label={'Title'} type={'text'} name={'title'}  {...formik.getFieldProps('title')} error={formik.errors.title && formik.touched.title ? formik.errors.title : ''} />
                            {/* Input Rate */}
                            <FormikInput label={'Rate'} type={'number'} name={'rate'} placeholder={'Rating Berita'} {...formik.getFieldProps('rate')} error={formik.errors.rate && formik.touched.rate ? formik.errors.rate : ''} />
                            {/* Input Image And Preview */}
                            <FormikImage label={'Image'} name={'image'} onChange={(e) => {
                                formik.setFieldValue('image', e.currentTarget.files[0])
                                formik.setFieldValue('previewImage', URL.createObjectURL(e.currentTarget.files[0]))
                            }} />
                            {/* Load Image */}
                            <div className='mb-4'>
                                {formik.values.previewImage ? <img src={formik.values.previewImage} alt="preview" className=' rounded-xl h-52' /> : <img src={`http://localhost:3000/${news.image}`} alt="preview" className=' rounded-xl h-52' />}

                            </div>
                        </div>
                        {/* Rich Editor */}
                        <TextEditor placeholder={'Deskripsi Berita'} label={'Description'} name={'description'} value={formik.values.description} onChange={(e) => {
                            formik.setFieldValue('description', e)
                        }} error={formik.errors.description && formik.touched.description ? formik.errors.description : ''} onBlur={formik.handleBlur} />

                        <div className="flex justify-between items-center">
                            <Button text={'Update News'} disabled={!formik.isValid ? true : false} onClick={formik.handleSubmit} buttonClass="bg-blue-600 hover:bg-blue-700" />
                            <Button text={'Delete News'} buttonClass="bg-green-600 hover:bg-green-700" />
                        </div>
                        <ToastContainer transition={Zoom} />
                    </form>
                ))}
            </div>
        </div>
    );
}

export default NewsDetail;
