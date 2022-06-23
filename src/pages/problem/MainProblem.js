import React, { useEffect, useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { Outlet, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteProblem, getAllProblem } from '../../api/problemApi';
import { Button, ButtonLink, Table, TextInfoPage } from '../../components/molecule';

const MainProblem = () => {
    const [problems, setProblems] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        let mounted = true
        if (mounted) {
            getAllProblem()
                .then(res => setProblems(res.data))
                .catch(err => console.log(err))
        }
        return () => { mounted = false }
    }, [])

    const handleDelete = async (id) => {
        confirmAlert({
            title: 'Delete Problem',
            message: 'Apa Anda Yakin Menghapusnya ?',
            buttons: [
                {
                    label: 'Ya',
                    onClick: () => {
                        const loading = toast.loading('Loading....')
                        deleteProblem(id)
                        .then(res => {
                            toast.update(loading, {render: 'Success Delete' ,type:'success', autoClose: 1000, isLoading:false})
                            setTimeout(() => {
                                navigate(0)
                            },1200)
                        }).catch(err => console.log(err))
                    }
                },
                {
                    label: 'Tidak',
                }
            ]
        });
    }

    return (
        <div>
            <TextInfoPage name={'Main Problem Page'} />
            <div onClick={() => setIsOpen(!isOpen)} >
                <ButtonLink linkTo={'/problem/create'} text={
                    <div className='flex items-center justify-center'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>Add New Problem</div>
                } buttonClass={'bg-blue-500 hover:bg-bluße-700 my-4'} />
            </div>
            <div className={!isOpen ? 'hidden' : 'visible'}>
                <Outlet />
            </div>
            <Table headerTable={['No', 'Name', 'Action']} body={
                <tbody>
                    {problems.map((problem, index) => (
                        <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 hover:bg-blue-100  hover:translate-x-1 transition-all duration-500 text-base" key={index}>
                            <td className={`px-6 py-4 text-center`} >
                                {index + 1}
                            </td>
                            <td className={`px-6 py-4 text-center`} >
                                {problem.name}
                            </td>
                            <td className={`text-center`} >
                                <ButtonLink text={'Edit'} buttonClass="bg-green-500 hover:bg-green-600" linkTo={`/problem/${problem.id}`} />
                                <Button text={'Delete'} buttonClass="bg-red-500 hover:bg-red-600" onClick={() => handleDelete(problem.id)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            } />
        </div>
    );
}

export default MainProblem;
