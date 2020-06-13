import React from 'react';
import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';

import PropagateLoader from 'react-spinners/PropagateLoader';

const LoadingIcon = () => (
    <div className="pt-1 pb-2 w-100 d-flex justify-content-center">
        <PropagateLoader color="#fff" size={10} />
    </div>
)

const Button = props => {
    const classNames = [
        "btn",
        "px-2",
        "btn-" + (props.outline ? "outline-" : "") + (props.color || "primary"),
        props.extended && "w-100",
        props.disabled && "disabled",
        props.classNames
    ].filter(el => el).join(" ");
    const buttonId = props.id || uuidv4();

    const handleClick = (e) => {
        if (props.type === "submit")
            return;
        e.preventDefault();
        if (props.onClick)
            props.onClick();
    }

    return (
        <button
            id={buttonId}
            type={props.type || "button"}
            className={classNames}
            onClick={handleClick}
            disabled={props.disabled}
        >
            {
                props.preffix &&
                <span className="mr-1">{props.preffix}</span>
            }
            {props.status !== "Loading" ? props.title : <LoadingIcon />}
            {
                props.suffix &&
                <span className="ml-1 position-absolute" style={{right: 2.2 + 'rem'}}>{props.suffix}</span>
            }
            {props.children}
        </button>
    );
};

Button.propTypes = {
    id: PropTypes.string,
    outline: PropTypes.bool,
    color: PropTypes.string,
    title: PropTypes.string.isRequired,
    extended: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    classNames: PropTypes.string,
    preffix: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
    suffix: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
    type: PropTypes.string,
    status: PropTypes.string
};

export default Button;