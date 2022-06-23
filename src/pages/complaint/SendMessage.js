import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, NavigateBack, TextEditor, TextInfoPage } from '../../components/molecule';
import { FormikSelect } from '../../components/molecule/formik';
import { getComplaintResultById, updateComplaintResult } from '../../api/complaintResultApi';
import { Flip, toast } from 'react-toastify';


const SendMessage = (props) => {
    const { id } = useParams()
    const [complaintResult, setComplaintResult] = useState([])
    const navigate = useNavigate()

    const optionEstimatedTime = [
        { name: '3 Hari', value: '3 Hari' },
        { name: '5 Hari', value: '5 Hari' },
        { name: '7 Hari', value: '7 Hari' },
        { name: '10 Hari', value: '10 Hari' },
    ]

    const optionStatus = [
        { name: 'Success', value: 'Success' },
        { name: 'Verification', value: 'Verification' },
        { name: 'Need File', value: 'Need File' },
        { name: 'Pending', value: 'Pending' },
        { name: 'Rejected', value: 'Rejected' },
    ]

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            getComplaintResultById(id)
                .then(res => setComplaintResult(res.data[0]))
                .catch(err => console.log(err))
        }
        return () => {
            isMounted = false
        }
    }, [id])
    return (
        <div>
            <div>
                <TextInfoPage name={`Send Message And Update`} />
                <div className=' bg-white rounded-xl p-6'>
                    <NavigateBack linkTo={-1} />
                    <Formik
                        initialValues={complaintResult}
                        enableReinitialize={true}

                        onSubmit={(values) => {
                            const loading = toast.loading('Loading...')
                            updateComplaintResult({ id: id, values: values })
                                .then(res => {
                                    toast.update(loading, { render: 'Success Update', type: 'success', autoClose: 1000, transition: Flip, isLoading: false, position: 'top-center' })
                                    setTimeout(() => {
                                        navigate('/complaint')
                                    }, 1200)
                                })
                                .catch(err => { toast.update(loading, { render: 'Failed Update', type: 'success', autoClose: 1000, isLoading: false }) })
                        }}
                    >
                        {props => (
                            <form onSubmit={props.handleSubmit} className='py-6'>
                                <FormikSelect label={'Status'} name='status'  {...props.getFieldProps('status')} options={optionStatus.map((data) => (
                                    { name: data.name, value: data.value }
                                ))} />
                                <FormikSelect label={'Estimated Time'} name='estimated_time' {...props.getFieldProps('estimated_time')} options={optionEstimatedTime.map((data) => (
                                    { name: data.name, value: data.value }
                                ))} />
                                <TextEditor label={'Send Message'} value={props.values.message} onChange={(e) => { props.setFieldValue('message', e) }} />
                                <Button text={'Send Message'} buttonClass='bg-blue-600 hover:bg-blue-700' />
                            </form>
                        )}
                    </Formik>

                </div>
            </div>


        </div >
    );
}

export default SendMessage;
