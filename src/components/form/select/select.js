import React from 'react';
import PropTypes from 'prop-types';

import Select from 'react-select';
import { REQUIRED_IDENTIFIER } from 'utils/texts';

const styles = {
    control: (provided) => ({
        ...provided,
        border: "1px solid #cecece",
        borderRadius: 1.2 + 'rem',
        backgroundColor: '#ced4da',
        padding: .5 + 'rem',
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        color: '#707070'
    })
}

const MySelect = props => {
    const classNames = [
        "pt-1",
        props.classNames
    ].filter(el => el).join(" ");

    return (
        <div className={classNames}>
            {
                props.label &&
                <label>{props.label + (props.required ? REQUIRED_IDENTIFIER : "")}</label>
            }
            <Select {...props} placeholder={props.placeholder + (props.required ? REQUIRED_IDENTIFIER : "")} className="w-100" styles={styles} />
            {
                props.error &&
                <p className="text-danger">{props.invalidMessage}</p>
            }
            {
                props.helper &&
                <small>{props.helper}</small>
            }
        </div>
    );
};

MySelect.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })),
    classNames: PropTypes.string,
    isSearchable: PropTypes.bool,
    isMulti: PropTypes.bool,
    isDisabled: PropTypes.bool,
    placeholder: PropTypes.string,
    value: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    autoFocus: PropTypes.bool,
    defaultValue: PropTypes.object,
    label: PropTypes.string,
    onInputChange: PropTypes.func,
    error: PropTypes.bool,
    invalidMessage: PropTypes.string,
    noOptionsMessage: PropTypes.func,
    required: PropTypes.bool,
    helper: PropTypes.string,
};

export default MySelect;