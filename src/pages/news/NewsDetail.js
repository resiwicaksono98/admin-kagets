import React, { useState } from 'react';
import { Button, Input, Select, TextEditor, TextInfoPage } from '../../components/molecule';


const NewsDetail = () => {
    const [image, setImage] = useState()

    return (
        <div>
            <TextInfoPage name={'Detail News blabla'} />
            <div className=' bg-white rounded-xl p-6'>
                <form >
                    <div className='grid grid-cols-2 gap-3'>
                        <Select label={'Category'} options={[
                            { name: 'GoRide', value: 'goride' },
                            { name: 'GoCar', value: 'gocar' },
                        ]} />
                        <Input label={'Title'} type={'text'} />
                        <Input label={'Title'} type={'file'} onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} />
                        <div className="mb-4">
                            {image ? <img src={image} alt="preview" className=' rounded-xl h-52' /> : <di className="flex justify-center items-center bg-gray-100 h-52 w-72">No Image Preview</di>}
                        </div>
                    </div>
                    <TextEditor label={'Description'} />
                    <div className="flex justify-between items-center">
                        <Button text={'Update News'} buttonClass="bg-blue-600 hover:bg-blue-700" linkTo="/" />
                        <Button text={'Publish News'}  buttonClass="bg-green-600 hover:bg-green-700"  linkTo="/" />

                    </div>




                </form>

            </div>
        </div>
    );
}

export default NewsDetail;
