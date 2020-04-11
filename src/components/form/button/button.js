import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
    const classNames = [
        "btn",
        "px-2",
        "btn-" + (props.outline ? "outline-" : "") + (props.color || "primary"),
        props.extended && "w-100",
        props.disabled && "disabled",
        props.classNames
    ].filter(el => el).join(" ");
    const buttonId = props.id || Math.random().toString(36).slice(-8);

    const handleClick = (e) => {
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
            {props.title}
            {
                props.suffix &&
                <span className="ml-1">{props.suffix}</span>
            }
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
    onClick: PropTypes.func.isRequired,
    classNames: PropTypes.string,
    preffix: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
    suffix: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
    type: PropTypes.string
};

export default Button;