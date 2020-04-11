import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {
    const parentClassNames = [
        "form-group",
        props.parentClassNames
    ].filter(el => el).join(" ");
    const classNames = [
        "form-control" + (props.plainText ? "-plaintext" : ""),
        "w-100",
        props.error && "is-invalid",
        props.disabled && "disabled",
        props.classNames
    ].filter(el => el).join(" ");
    const inputId = props.id || Math.random().toString(36).slice(-8);

    const handleChange = (e) => {
        if (props.onChange)
            props.onChange(e.target.value);
    }

    return (
        <div className={parentClassNames}>
            {
                props.label &&
                <label for={inputId}>{props.label}</label>
            }
            {
                props.prepend &&
                <div className="input-group-prepend">
                    <div className="input-group-text">{props.prepend}</div>
                </div>
            }
            <input
                id={inputId}
                type={props.type || "text"}
                className={classNames}
                onChange={handleChange}
                value={props.value || ""}
                placeholder={props.placeholder || ""}
                readOnly={props.plainText}
                disabled={props.disabled}
                required={props.required}
            />
            {
                props.helper &&
                <small>{props.helper}</small>
            }
            {
                props.errorMessage &&
                <div className="invalid-feedback">
                    {props.errorMessage}
                </div>
            }
        </div>
    );
};

Input.propTypes = {
    placeholder: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    labelDisplay: PropTypes.oneOf(["always", "onType"]),
    error: PropTypes.bool,
    helper: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    plainText: PropTypes.bool,
    prepend: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
    classNames: PropTypes.string,
    parentClassNames: PropTypes.string,
    errorMessage: PropTypes.string,
    required: PropTypes.bool,
    id: PropTypes.string
};

export default Input;