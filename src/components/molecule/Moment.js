import moment from 'moment';
import React from 'react';

const Moment = ({dateTarget}) => {
    return (
        <div>
            {moment(dateTarget).format('D MMMM YYYY')}
        </div>
    );
}

export default Moment;
