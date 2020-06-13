import React from 'react';
import PropTypes from 'prop-types';

import { Dropdown } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

const MyDropdown = props => {

    const handleBlur = () => {
        if (props.open)
            props.onBlur();
    }

    return (
        <Dropdown
            text={props.labelText}
            icon={props.icon}
            floating
            labeled={props.labelText}
            button={props.asButton}
            open={props.open}
            className={(props.classNames ? (" " + props.classNames) : "")}
            direction={props.direction}
            pointing={props.poiting}
            onBlur={handleBlur}
            clearable={props.clearable}
        >
            <Dropdown.Menu>
                {
                    props.dropdownTitle &&
                    <>
                        <Dropdown.Header content={props.dropdownTitle} />
                        <Dropdown.Divider />
                    </>
                }
                {
                    props.items?.map(el => <Dropdown.Item active={el.id === props.active} key={el.id} text={el.name} onClick={() => props.onSelect(el)} />)
                }
            </Dropdown.Menu>
        </Dropdown>
    );
};

MyDropdown.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    onSelect: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    asButton: PropTypes.bool,
    labelText: PropTypes.string,
    icon: PropTypes.node,
    open: PropTypes.bool,
    dropdownTitle: PropTypes.string,
    classNames: PropTypes.string,
    direction: PropTypes.string,
    clearable: PropTypes.bool,
    active: PropTypes.number,
    pointing: PropTypes.string
};

export default MyDropdown;