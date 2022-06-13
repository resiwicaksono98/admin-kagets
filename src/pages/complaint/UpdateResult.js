import React from 'react';
import { Button, NavigateBack, TextEditor, TextInfoPage } from '../../components/molecule';

const UpdateResult = () => {
    return (
        <div>
            <TextInfoPage name={'Update Status Complaint Blablabla'} />
            <div className=' bg-white rounded-xl p-6'>
            <NavigateBack linkTo={'/complaint/main'} />
                <form >
                    <div className='grid grid-cols-2 gap-3 my-8'>       
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
