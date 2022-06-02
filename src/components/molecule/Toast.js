import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const ToastSuccess = ({ title }) => {
    toast.success(title, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        pauseOnHover: false,
        closeOnClick: true,
    })
}
export const ToastReject = ({ title }) => {
    toast.error(title, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        pauseOnHover: false,
        closeOnClick: true,
    });
}

export const ToastLoading = ({ title }) => toast.loading(title, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
    pauseOnHover: false,
    closeOnClick: true,
})




        // toast.warn("Warning Notification !", {
        //     position: toast.POSITION.BOTTOM_LEFT
        // });

        // toast.info("Info Notification !", {
        //     position: toast.POSITION.BOTTOM_CENTER
        // });

        // toast("Custom Style Notification with css class!", {
        //     position: toast.POSITION.BOTTOM_RIGHT,
        //     className: 'foo-bar'
        // });

