import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast,Zoom, ToastContainer } from 'react-toastify';
import { allCategory } from '../../api/categoryApi';
import { getNewsById } from '../../api/newsApi';
import { Button, Input, Select, TextEditor, TextInfoPage } from '../../components/molecule';
import { } from '../../components/molecule/Toast';
import { BaseImageUrl, BaseUrl } from '../../Config/ConfigApi';
import { yupResolver } from '@hookform/resolvers/yup';
import { NewsYupSchema } from '../../components/atom/yup/NewsYup';




const NewsDetail = () => {
    const navigate = useNavigate()
    const [loadImage, setLoadImage] = useState()
    const [newst, setNewst] = useState([])
    const [categories, setCategories] = useState([])
    const { id } = useParams()
    const { register, control, handleSubmit, formState: {errors} } = useForm({
       resolver: yupResolver(NewsYupSchema)
    })

    useEffect(() => {
        let isUnmount = false
        if (!isUnmount) {
            const getNews = () => {
                getNewsById({id: id})
                    .then(result => setNewst(result))
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
    }, [id])

    const onSubmit = async (data) => {
        try {
            await toast.promise(
                axios.put(`${BaseUrl}/news/${id}`, {
                    title: data.title,
                    categoryId: data.category,
                    image: data.image[0],
                    description: data.description
                }, {
                    headers: {
                        "content-type": "multipart/form-data"
                    }
                })
                    .then((res) => setTimeout(() => {
                        navigate('/news/manage')
                    }, 1200))
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

    };
    return (
        <div>
            <TextInfoPage name={'Detail News blabla'} />
            <div className=' bg-white rounded-xl p-6'>
                {newst.map((news, index) => (
                    <form key={index}>
                        <div className='grid grid-cols-2 gap-3'>
                            <Controller name='category' defaultValue={news.category.id} control={control} render={({ field }) =>
                                <Select label={'Category'}  {...field}
                                    options={categories.map((category) => (
                                        { name: category.name, value: category.id }
                                    ))} />} />
                            <Controller
                                name={'title'} control={control} defaultValue={news.title} render={({ field }) => <Input label={'Title'} type={'text'}  {...field} errors={errors.title?.message}  />} />
                            <Input label={'Image'} type={'file'} name={'image'} {...register('image')} onChange={(e) => setLoadImage(URL.createObjectURL(e.target.files[0]))} />
                            <div className="mb-4">
                                {loadImage ? <img src={loadImage} alt="preview" className=' rounded-xl h-52' /> : news.image ? <img src={`${BaseImageUrl}/${news.image}`} alt="preview" className=' rounded-xl h-52' /> : <div className="flex justify-center items-center bg-gray-100 h-52 w-72">No Image Preview</div>}
                            </div>
                        </div>
                        <div>
                            <Controller name='description' defaultValue={news.description} control={control} render={({ field }) =>
                                <TextEditor label={'Description'}  {...field} />
                            } />
                        </div>
                        <div className="flex justify-between items-center">
                            <Button text={'Update News'} onClick={handleSubmit(onSubmit)} buttonClass="bg-blue-600 hover:bg-blue-700" />
                            <Button text={'Publish News'} buttonClass="bg-green-600 hover:bg-green-700" />
                        </div>
                        <ToastContainer transition={Zoom}/>
                    </form>
                ))}
            </div>
        </div>
    );
}

export default NewsDetail;
