import React from 'react';
import PropTypes from 'prop-types';

import './avatar.scss';

const Avatar = props => {
    const [img, setImg] = React.useState(props.img);
    const bgColor = props.bgColor && props.bgColor[0] !== "#" ? props.bgColor : false;
    const classNames = [
        "d-flex justify-content-center align-items-center",
        "avatar" + (props.size ? "-" + props.size : ""),
        props.border && "avatar-border",
        bgColor && "bg-" + bgColor,
        props.classNames
    ].filter(el => el).join(" ");

    const errorLoading = () => {
        setImg(undefined);
    }

    return (
        <div className={classNames} style={{backgroundColor: (bgColor ? undefined : props.bgColor)}}>
            {
                img ?
                <div className="avatar-img w-100" style={{backgroundImage: `url("${props.img}")`}} onError={errorLoading} alt={props.alt} />
                :
                <span className="avatar-text">{props.alt}</span>
            }
        </div>
    );
};

Avatar.propTypes = {
    size: PropTypes.oneOf(["sm", "lg"]),
    img: PropTypes.string,
    border: PropTypes.bool,
    alt: PropTypes.string,
    bgColor: PropTypes.string,
    classNames: PropTypes.string
};

export default Avatar;