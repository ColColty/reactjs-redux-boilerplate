import React from 'react';
import PropTypes from 'prop-types';

import IosCloseCircleOutline from 'react-ionicons/lib/IosCloseCircleOutline';

import { Button } from 'components/form/button';
import { Link } from 'components/form/link';

const NotificationConfirmation = (props) => {
    return (
        <div className="card p-2 rounded m-2 d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-center align-items-center flex-column w-75">
                {
                    props.icon ||
                    <IosCloseCircleOutline fontSize="56px" color="currentColor" className="bg-bgred text-red p-1 rounded-circle" />
                }
                <h2 className="py-2 text-center">{props.title}</h2>
                <p className="text-muted pb-2 text-center">{props.message}</p>
            </div>
            <Button title={props.buttons[0].title} onClick={() => {
                if (props.buttons[0].onClick)
                    props.buttons[0].onClick(props.onClose);
                if (!props.notCloseable)
                    props.onClose();
            }} extended />
            {
                props.buttons.length > 1 &&
                <Link text={props.buttons[1].title} color="danger" place="center" onClick={() => {
                    if (props.buttons[1].onClick)
                    props.buttons[1].onClick(props.onClose);
                    if (!props.notCloseable)
                        props.onClose()
                }} />
            }
        </div>
    );
};

NotificationConfirmation.propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.string,
    buttons: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        onClick: PropTypes.func,
        href: PropTypes.string
    })).isRequired,
    onClose: PropTypes.func,
    icon: PropTypes.element,
    notCloseable: PropTypes.bool,
}

export default NotificationConfirmation;