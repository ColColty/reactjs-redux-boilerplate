import React, { useEffect } from 'react';

import * as serviceWorker from '../serviceWorker';
import { ToastContainer, toast } from 'react-toastify';

import IosCloudDownload from 'react-ionicons/lib/IosCloudDownload';

import { confirmAlert } from 'react-confirm-alert';

import { NotificationConfirmation } from 'components/notification';

import { INSTALLING_NEW_VERSION_MESSAGE, NEW_VERSION_MESSAGE, INSTALL_BUTTON_TITLE, NEW_VERSION_TITLE } from './texts';

import "react-toastify/dist/ReactToastify.css";

const ServiceWorkerWrapper = () => {
    const reloadPage = (waitingWorker) => {
        toast(INSTALLING_NEW_VERSION_MESSAGE);
        if (waitingWorker)
            waitingWorker.postMessage({ type: 'SKIP_WAITING' });
        window.location.reload(true);
    };

    const onSWUpdate = (registration) => {
        confirmAlert({
            title: NEW_VERSION_TITLE,
            message: NEW_VERSION_MESSAGE,
            closeOnClickOutside: false,
            closeOnEscape: false,
            customUI: (props) => <NotificationConfirmation notCloseable {...props} icon={
                <IosCloudDownload fontSize="56px" color="currentColor" className="bg-bggreen text-green p-1 rounded-circle" />
            } />,
            buttons: [
                {
                    title: INSTALL_BUTTON_TITLE,
                    onClick: () => reloadPage(registration.waiting)
                }
            ]
        })
    };

    useEffect(() => {
        serviceWorker.register({ onUpdate: onSWUpdate });
        // eslint-disable-next-line
    }, []);

    return (
        <ToastContainer closeOnClick={false} closeButton={false} bodyClassName="text-dark" />
    );
}

export default ServiceWorkerWrapper;