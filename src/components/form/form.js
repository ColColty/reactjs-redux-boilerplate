import React from 'react';
import PropTypes from 'prop-types';

const Form = props => {
    const classNames = [
        props.inline && "form-inline",
        props.needValidate && "needs-validation",
        props.classNames
    ].filter(el => el).join(" ");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.onSubmit)
            props.onSubmit();
    }

    return (
        <form onSubmit={handleSubmit} className={classNames} noValidate={props.needValidate}>
            {props.children}
        </form>
    );
};

Form.propTypes = {
    onSubmit: PropTypes.func,
    classNames: PropTypes.string,
    inline: PropTypes.bool,
    needValidate: PropTypes.bool
};

export default Form;