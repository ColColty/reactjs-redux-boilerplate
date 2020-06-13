import React from 'react';
import PropTypes from 'prop-types';

import { Checkbox } from 'semantic-ui-react';
import uuidv4 from 'uuid/v4';

import { REQUIRED_IDENTIFIER } from 'utils/texts';

const MyCheckbox = props => {
    const classes = [
        props.classNames
    ].filter(el => el).join(" ");
    const id = props.id || uuidv4();

    const handleChange = (e, { checked }) => {
        if (props.onClick)
            props.onClick(checked);
    }

    return (
        <>
            <Checkbox
                className={classes}
                id={id}
                onChange={handleChange}
                value={props.selected}
                label={props.label + (props.required ? REQUIRED_IDENTIFIER : "")}
                defaultChecked={props.default}
            />
            {
                props.invalidMessage && props.error &&
                <p className="text-danger">{props.invalidMessage}</p>
            }
        </>
    );
};

MyCheckbox.propTypes = {
    classNames: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string,
    selected: PropTypes.bool,
    required: PropTypes.bool,
    default: PropTypes.bool,
    error: PropTypes.bool,
    invalidMessage: PropTypes.string
};

export default MyCheckbox;