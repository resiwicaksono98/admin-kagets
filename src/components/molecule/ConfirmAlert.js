import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';

const ConfirmAlert = ({ title, message, yes, no,onClick }) => {
    return (
        confirmAlert({
            title: title,
            message: message,
            buttons: [
                {
                    label: 'Yes',
                    onClick: (e) =>  onClick(e)
                }, {
                    label: 'no',
                }
            ]
        })
    );
}

export default ConfirmAlert;
