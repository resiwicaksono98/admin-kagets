import React from 'react';
import { Button, NavigateBack, Select, TextEditor, TextInfoPage } from '../../components/molecule';

const UpdateResult = () => {
    return (
        <div>
            <TextInfoPage name={'Update Status Complaint Blablabla'} />
            <div className=' bg-white rounded-xl p-6'>
            <NavigateBack linkTo={'/complaint/main'} />
                <form >
                    <div className='grid grid-cols-2 gap-3 my-8'>
                        <Select label={'Status Complaint'} options={[
                            { name: 'verifikasi', value: 'verifikasi' },
                            { name: 'success', value: 'success' },
                            { name: 'rejected', value: 'rejected' },
                        ]} />
                        <Select label={'Estimated Time'} options={[
                            { name: 'belum verifikasi', value: 'belumverifikasi' },
                            { name: '3 Hari', value: '3 Hari' },
                            { name: '5 Hari', value: '5 Hari' },
                            { name: '7 Hari', value: '7 Hari' },
                        ]} />
                    </div>
                    <TextEditor label={'Send Message'} />
                    <div className="flex justify-between items-center">
                        <Button text={'Update Status Complaint'} buttonClass="bg-blue-600 hover:bg-blue-700" linkTo="/" />
                    </div>
                </form>

            </div>
        </div>
    );
}

export default UpdateResult;
