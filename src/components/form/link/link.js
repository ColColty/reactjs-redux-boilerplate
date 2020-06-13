import React from 'react';
import PropTypes from 'prop-types';

const Link = props => {
    const parentClassNames = [
        "text-" + (props.place || "left")
    ].filter(el => el).join(" ");
    const classNames = [
        "btn btn-link",
        "m-0",
        "text-" + (props.color || "primary"),
        props.classNames
    ].filter(el => el).join(" ");

    return (
        <div className={parentClassNames}>
            <p className={classNames} onClick={props.onClick} style={{cursor: 'pointer', ...props.style}}>{props.text}</p>
        </div>
    );
};

Link.propTypes = {
    onClick: PropTypes.func.isRequired,
    color: PropTypes.string,
    place: PropTypes.oneOf(["center", "left", "right"]),
    text: PropTypes.string.isRequired,
    classNames: PropTypes.string
};

export default Link;