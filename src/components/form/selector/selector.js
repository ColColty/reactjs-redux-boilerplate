import React from 'react';
import PropTypes from 'prop-types';

import { capitalize } from 'utils/utils';
import { LOADING_MESSAGE, REQUIRED_IDENTIFIER } from 'utils/texts';

import './selector.scss';

const Option = (props) => (
    <div className={"py-3 col text-center rounded " + (props.selected ? "bg-primary text-white" : "text-muted")} onClick={() => props.onSelection(props.data)}>
        {capitalize(props.data?.libellus)}
    </div>
)

const Selector = props => {
    const handleSelection = (data) => {
        if (props.onChange)
            props.onChange(data);
    }

    return (
        <div className="mb-1">
            {
                props.label &&
                <label>{props.label + (props.required ? REQUIRED_IDENTIFIER : "")}</label>
            }
            <div className="selector rounded d-flex justify-content-between align-items-center m-0 row">
                {
                    props.options ?
                    props.options?.map(el => <Option data={el} onSelection={handleSelection} selected={el.id === props.selection} key={el.id} />)
                    :
                    <p className="p-3">{LOADING_MESSAGE}</p>
                }
            </div>
            {
                props.error &&
                <small className="text-danger">{props.infoMessage}</small>
            }
        </div>
    );
};

Selector.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    onChange: PropTypes.func.isRequired,
    selection: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
    infoMessage: PropTypes.string,
    error: PropTypes.bool,
    required: PropTypes.bool
};

export default Selector;