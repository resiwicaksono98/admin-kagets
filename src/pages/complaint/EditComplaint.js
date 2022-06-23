import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Flip, toast } from 'react-toastify';
import { getComplaintById, UpdateComplaint } from '../../api/complaintApi';
import { getAllProblem } from '../../api/problemApi';
import { Button, NavigateBack, TextEditor, TextInfoPage } from '../../components/molecule';
import { FormikInput, FormikSelect } from '../../components/molecule/formik';

const EditComplaint = () => {
    const [imagePreview, setImagePreview] = useState()
    const { id } = useParams()
    const [complaint, setComplaint] = useState([])
    const [problems, setProblems] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        let isMounted = true
        if (isMounted) {
            getComplaintById(id)
                .then(res => setComplaint(res.data[0]))
                .catch(err => console.log(err))
            getAllProblem()
                .then(res => setProblems(res.data))
                .catch(err => console.log(err))

        }
        return () => { isMounted = false }
    }, [id])
    return (
        <div>
            <TextInfoPage name={`Edit Complaint`} />
            <div className=' bg-white rounded-xl p-6'>
                <NavigateBack linkTo={'/complaint'} />
                <Formik
                    initialValues={complaint}
                    enableReinitialize={true}
                    onSubmit={(values) => {
                        const loading = toast.loading('Loading...')
                        UpdateComplaint({ id: id, values: values })
                            .then(res => {
                                toast.update(loading, { render: `Update data Success`,position:'top-center', type: 'success', autoClose: 1000, isLoading: false, transition: Flip })
                                setTimeout(() => {
                                    navigate('/complaint')
                                }, 1200);
                            })
                            .catch(err => {
                                toast.update(loading, { render: 'Failed Update Data', type: 'error', autoClose: 1000, isLoading: false, transition: Flip })
                            })
                    }}
                >
                    {props => (
                        <form onSubmit={props.handleSubmit}>
                            <div className='grid grid-cols-2 gap-3 py-8'>
                                <FormikSelect label={'Problem'} name='problem'  {...props.getFieldProps('problem')} options={problems.map((problem) => (
                                    { name: problem.name, value: problem.name }
                                ))} />
                                <FormikInput label={'Support Image'} name='support_image' type={'file'} onChange={(e) => {
                                    setImagePreview(URL.createObjectURL(e.target.files[0]))
                                    props.setFieldValue('support_image', e.currentTarget.files[0])
                                }} />
                                <div className="mb-4">
                                    {imagePreview ? <img src={imagePreview} alt="preview" className=' rounded-xl h-52' /> : <img src={`http://localhost:3000/images/complaints/${complaint.support_image}`} alt="preview" className=' rounded-xl h-52' />}
                                </div>
                            </div>
                            <TextEditor label={'Description'} name={'description'} value={props.values.description} onChange={(e) => props.setFieldValue('description', e)} />
                            <div className="flex justify-between items-center">
                                <Button text={'Update Complaint'} buttonClass="bg-blue-600 hover:bg-blue-700" />
                            </div>
                        </form>
                    )}
                </Formik>

            </div>
        </div>
    );
}

export default EditComplaint;
