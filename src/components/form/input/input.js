import React from 'react';
import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';
import { REQUIRED_IDENTIFIER } from 'utils/texts';

const PrependInput = (props) => {
    return (
        <div className="input-group">
        {
            props.prepend &&
            <div className="input-group-prepend">
                <div className="input-group-text">{props.prepend}</div>
            </div>
        }
        {props.input}
        </div>
    );
}


const InputField = (props) => (
    <input
        id={props.inputId}
        type={props.type || "text"}
        className={props.classNames}
        onChange={props.handleChange}
        value={props.value || ""}
        placeholder={props.placeholder + (props.required ? REQUIRED_IDENTIFIER : "") || ""}
        readOnly={props.plainText}
        disabled={props.disabled}
        required={props.required}
        style={props.style}
        onBlur={props.onBlur}
    />
)

const Input = props => {
    const parentClassNames = [
        "form-group",
        props.parentClassNames,
        props.extended && "w-100"
    ].filter(el => el).join(" ");
    const classNames = [
        "form-control" + (props.plainText ? "-plaintext" : ""),
        props.error && "is-invalid",
        props.disabled && "disabled border",
        props.classNames,
        props.extended && "w-100"
    ].filter(el => el).join(" ");
    const [showLabel, setShowLabel] = React.useState(true);
    const inputId = props.id || uuidv4();

    const handleChange = (e) => {
        if (props.onChange)
            props.onChange(e.target.value);
    }

    React.useEffect(() => {
        if (props.value !== "" && props.labelDisplay === "onType") {
            setShowLabel(true);
        } else if (props.labelDisplay === "onType") {
            setShowLabel(false);
        }
    }, [props.value, props.labelDisplay]);


    return (
        <div className={parentClassNames}>
            {
                props.label && showLabel &&
                <label forhtml={inputId}>{props.label + (props.required ? REQUIRED_IDENTIFIER : "")}</label>
            }
            {
                props.prepend ?
                <PrependInput {...props} input={
                    <InputField {...props} inputId={inputId} classNames={classNames} handleChange={handleChange} />
                } />
                :
                <InputField {...props} inputId={inputId} classNames={classNames} handleChange={handleChange} />
            }
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
    id: PropTypes.string,
    style: PropTypes.object,
    onBlur: PropTypes.func,
};

export default Input;