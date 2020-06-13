import React from 'react';
import PropTypes from 'prop-types';

import InputFiles from 'react-input-files';

import MdCreate from 'react-ionicons/lib/MdCreate';
import { Avatar } from '../avatar';

import './avatar-editable.scss';

const AvatarEditable = props => {
    const handleNewImage = async (files) => {
        const getBase64 = file => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        })
        props.onImage(await getBase64(files[0]));
    }

    return (
        <Avatar {...props} classNames="position-relative">
            <div className="editable">
                <InputFiles onChange={handleNewImage} style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
                    <MdCreate fontSize="28px" className="button-edit" />
                </InputFiles>
            </div>
        </Avatar>
    );
};

AvatarEditable.propTypes = {
    onImage: PropTypes.func.isRequired,
    classNamesParent: PropTypes.string,
    img: PropTypes.string,
    alt: PropTypes.string,
    size: PropTypes.oneOf(["sm", "md", "lg", "xl"])
};

export default AvatarEditable;