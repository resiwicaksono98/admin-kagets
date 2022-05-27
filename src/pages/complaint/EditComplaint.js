import React, { useState } from 'react';
import { Button, Input, NavigateBack, Select, TextEditor, TextInfoPage } from '../../components/molecule';

const EditComplaint = () => {
    const [image, setImage] = useState()
    return (
        <div>
            <TextInfoPage name={'Edit Complaint Blablabla'} />
            <div className=' bg-white rounded-xl p-6'>
              <NavigateBack linkTo={'/complaint/main'} />
                <form >
                    <div className='grid grid-cols-2 gap-3 py-8'>
                        <Input type={'text'} label={'Name'} />
                        <Select label={'Problem'} options={[
                            { name: 'Suspend Akun', value: 'Suspend Akun' },
                            { name: 'Putus Mitra', value: 'Putus Mitra' },
                            { name: 'Orderan Fiktif', value: 'Orderan Fiktif' },
                        ]} />
                        <Input label={'Support Image'} type={'file'} onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} />
                        <div className="mb-4">
                            {image ? <img src={image} alt="preview" className=' rounded-xl h-52' /> : <di className="flex justify-center items-center bg-gray-100 h-52 w-72">No Image Preview</di>}
                        </div>
                    </div>
                    <TextEditor label={'Description'} />
                    <div className="flex justify-between items-center">
                        <Button text={'Update Complaint'} buttonClass="bg-blue-600 hover:bg-blue-700" linkTo="/" />
                    </div>
                </form>

            </div>
        </div>
    );
}

export default EditComplaint;
