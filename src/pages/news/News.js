import { NewspaperIcon } from '@heroicons/react/outline';
import React from 'react';
import { BoxNews } from '../../components/atom';
import { TextInfoPage } from '../../components/molecule';

const News = () => {
    return (
        <div>
           <TextInfoPage name="News" />
            {/* Detail news */}
            <div className="grid grid-cols-3 gap-4 ">
              <BoxNews name={'Total'} icon={<NewspaperIcon height={'40px'} color={'white'}/>} classBox="bg-blue-500" total={31} />
              <BoxNews name={'Publish'} icon={<NewspaperIcon height={'40px'} color={'white'}/>} classBox="bg-green-500" total={26} />
              <BoxNews name={'Pending'} icon={<NewspaperIcon height={'40px'} color={'white'}/>} classBox="bg-yellow-600" total={5} />
            </div>
        </div>
    );
}

export default News;
