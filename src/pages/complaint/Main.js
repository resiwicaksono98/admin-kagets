import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAllComplaint } from '../../api/complaintApi';
import { updateComplaintResult } from '../../api/complaintResultApi';
import { ButtonLink, Table, Search, TextInfoPage, Modal, Moment, Button } from '../../components/molecule';


const Main = () => {
    const [complaints, setComplaints] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        let isUnmount = false
        if (!isUnmount) {
            getAllComplaint()
                .then(result => setComplaints(result.data))
                .catch(err => console.log(err))
        }
        return () => {
            isUnmount = true
        }

    }, [])

    const handleQuickStatus = (e) => {
        const loading = toast.loading('loading.....')
        updateComplaintResult({ id: e.id, values: { status: e.name } })
            .then(res => {
                toast.update(loading, { render: 'Success', type: 'success', autoClose: 500, isLoading: false })
                setTimeout(() => {
                    navigate(0)
                }, 1000)
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <TextInfoPage name={'Main Complaint '} />
            <Search placeholder={'Search Complaint'} />
            <Table headerTable={['No', 'Name', 'Status', 'Estimated Time', 'Action']} body={
                <tbody>
                    {complaints.map((complaint, index) => (
                        <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 hover:bg-blue-100  hover:translate-x-1 transition-all duration-500 text-base" key={index}>
                            <td className={`px-6 py-4 text-center`} >
                                {index + 1}
                            </td>
                            <td className={`px-6 py-4 text-center`} >
                                {complaint.user.firstname} {complaint.user.lastname}
                            </td>
                            <td className={`text-center`} >
                                {complaint.complaint_result.status}
                            </td>
                            <td className={`px-6 py-4 text-center`} >
                                {complaint.complaint_result.estimated_time}
                            </td>
                            <td className={`px-6 py-4 text-center`} >
                                <div className='flex items-center justify-center'>
                                    <Modal textModal={'Change Status'} onClick={(e) => console.log('eee')} buttonClassModal={'bg-green-500 hover:bg-green-600'} titleModal={'Action Complaint ResiWicaksono'} descModal={

                                        <div>
                                            <div className='text-base'>Select Action Change Complaint</div>
                                            <div className='py-3'>
                                                <ul className=''>
                                                    <li className='py-2 px-3'>Name :  {complaint.user.firstname} {complaint.user.lastname}</li>
                                                    <li className='py-2 px-3'>Complaint Id     : 238293-82392-22</li>
                                                    <li className='py-2 px-3'>Complaint Number : {complaint.id}</li>
                                                    <li className='py-2 px-3'>Status:  {complaint.complaint_result.status}</li>
                                                    <li className='py-2 px-3'>Estimated time: {complaint.complaint_result.estimated_time}</li>
                                                    <li className='py-2 px-3 flex'>Created At : <Moment dateTarget={complaint.created_at} /></li>
                                                </ul>
                                            </div>
                                        </div>
                                    } buttonDialog={
                                        <div className='items-center'>
                                            <Button text={'Successfully'} buttonClass="bg-green-500 hover:bg-green-600" name={'Success'} onClick={e => handleQuickStatus({
                                                name: e.target.name,
                                                id: complaint.complaint_result.id
                                            })} />
                                            <Button text={'Verification'} name={`Verification`} buttonClass="bg-blue-500 hover:bg-blue-600" onClick={e => handleQuickStatus({
                                                name: e.target.name,
                                                id: complaint.complaint_result.id
                                            })} />
                                            <Button text={'Pending'} name={'Pending'} buttonClass="bg-cyan-500 hover:bg-cyan-600" onClick={e => handleQuickStatus({
                                                name: e.target.name,
                                                id: complaint.complaint_result.id
                                            })} />
                                            <Button text={'Need File'} name={'Need File'} buttonClass="bg-amber-500 hover:bg-amber-600" onClick={e => handleQuickStatus({
                                                name: e.target.name,
                                                id: complaint.complaint_result.id
                                            })} />
                                            <Button text={'Rejected'} name={'Rejected'} buttonClass="bg-red-500 hover:bg-red-600" onClick={e => handleQuickStatus({
                                                name: e.target.name,
                                                id: complaint.complaint_result.id
                                            })} />
                                        </div>
                                    } />
                                    <ButtonLink text={'Message And Status'} buttonClass="bg-blue-500 hover:bg-blue-600" linkTo={`/complaint/message/${complaint.complaint_result.id}`} />
                                    <ButtonLink text={'Edit Complaint'} buttonClass="bg-indigo-500 hover:bg-indigo-600" linkTo={`/complaint/${complaint.id}`} />
                                </div>
                            </td>
                        </tr>
                    ))}

                </tbody>
            } />
        </div>
    );
}

export default Main;
