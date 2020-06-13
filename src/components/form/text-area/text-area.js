import React from 'react';
import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';

import { REQUIRED_IDENTIFIER } from 'utils/texts';

import './text-area.scss';

const TextArea = props => {
    const classNames = [
        "form-control",
        "bg-white",
        "my-text-area",
        props.error && "is-invalid",
        props.classNames
    ].filter(el => el).join(" ");
    const parentClassNames = [
        "form-group",
        props.parentClassNames
    ].filter(el => el).join(" ");
    const inputId = props.id || uuidv4();

    const handleChange = (e) => {
        e.preventDefault();
        if (props.onChange) {
            props.onChange(e.target.value);
        }
    }

    return (
        <div className={parentClassNames}>
            {
                props.label &&
                <label forhtml={inputId}>{props.label + (props.required ? REQUIRED_IDENTIFIER : "")}</label>
            }
            <textarea
                id={inputId}
                className={classNames}
                placeholder={props.placeholder}
                value={props.value}
                onChange={handleChange}
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

TextArea.propTypes = {
    onChange: PropTypes.func.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
    placeholder: PropTypes.string,
    classNames: PropTypes.string,
    parentClassNames: PropTypes.string,
    helper: PropTypes.string,
    error: PropTypes.bool,
    value: PropTypes.string,
    errorMessage: PropTypes.string,
    required: PropTypes.bool
};

export default TextArea;