import React from 'react';
import { covidImg } from '../../assets';
import { CardNews } from '../../components/atom';
import { Pagination, Search, TextInfoPage } from '../../components/molecule';


const Manage = () => {
    return (
        <div>
            <TextInfoPage name={'Manage News'} />
            <Search />
            <div className="grid grid-cols-4 gap-3 py-8 ">
                <CardNews img={covidImg} title="Jokowi Bilang Bebas Buka Masker" created={'19 Mei 2022'} published={'21 Mei 2022'} deleted={'-'} />
                <CardNews img={covidImg} title="Jokowi Bilang Bebas Buka Masker" created={'19 Mei 2022'} published={'21 Mei 2022'} deleted={'-'} />
                <CardNews img={covidImg} title="Jokowi Bilang Bebas Buka Masker" created={'19 Mei 2022'} published={'21 Mei 2022'} deleted={'-'} />
                <CardNews img={covidImg} title="Jokowi Bilang Bebas Buka Masker" created={'19 Mei 2022'} published={'21 Mei 2022'} deleted={'-'} />
            </div>
            <Pagination />
        </div>
    );
}

export default Manage;
