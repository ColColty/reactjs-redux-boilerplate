import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';

import CreatableSelect from 'react-select/creatable';

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
    const [canCreate, setCanCreate] = React.useState(false);
    const classNames = [
        "pt-1",
        props.classNames
    ].filter(el => el).join(" ");

    const handleCreate = (val) => {
        setCanCreate(val);
    }

    const handleSubmitCreate = (v) => {
        setCanCreate(false);
        props.onCreate(v);
    }

    const handleChange = (v) => {
        props.onChangeValue(v);
    }

    const handleCancel = () => {
        setCanCreate(false);
    }

    React.useEffect(() => {
        if (props.showCreate !== canCreate)
            setCanCreate(props.showCreate);
        // eslint-disable-next-line
    }, [props.showCreate])

    const ChildCreate = cloneElement(props.children, { onCreate: handleSubmitCreate, onCancel: handleCancel, value: canCreate });

    return (
        <div className={classNames}>
            {
                props.label &&
                <label>{props.label + (props.required ? REQUIRED_IDENTIFIER : "")}</label>
            }
            <CreatableSelect {...props} onChange={handleChange} onCreateOption={handleCreate} placeholder={props.placeholder + (props.required ? REQUIRED_IDENTIFIER : "")} className="w-100" styles={styles} />
            {
                props.error &&
                <p className="text-danger">{props.invalidMessage}</p>
            }
            {
                props.helper &&
                <p className="text-muted">{props.helper}</p>
            }
            {
                canCreate &&
                ChildCreate
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
    isClearable: PropTypes.bool,
    placeholder: PropTypes.string,
    formatCreateLabel: PropTypes.func,
    value: PropTypes.object,
    onChangeValue: PropTypes.func.isRequired,
    onCreate: PropTypes.func.isRequired,
    autoFocus: PropTypes.bool,
    defaultValue: PropTypes.object,
    label: PropTypes.string,
    onInputChange: PropTypes.func,
    error: PropTypes.bool,
    invalidMessage: PropTypes.string,
    noOptionsMessage: PropTypes.func,
    required: PropTypes.bool,
    helper: PropTypes.string
};

export default MySelect;