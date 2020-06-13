import React from 'react';
import PropTypes from 'prop-types';

import { NEED_TO_ADD_A_FILE } from 'utils/errorMessages';
import { REQUIRED_IDENTIFIER } from 'utils/texts';

const FileBrowser = props => {
    const [imageName, setImageName] = React.useState(props.labelText);
    const inputId = props.id || Math.random().toString(36).split(-8);

    const handleChange = async (e) => {
        const files = e.target.files;
        const getBase64 = file => new Promise((resolve, reject) => {
            const reader = new FileReader();
            setImageName(file.name);
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        })
        props.onChange(await getBase64(files[0]));
    }

    return (
        <div className="mb-2">
            <div className="custom-file mt-2 mb-3" style={{zIndex: 0}}>
                <input type="file" onChange={handleChange} className="custom-file-input" id={inputId} required={props.required} />
                <label class="custom-file-label" forhtml={inputId} data-browse={props.browseTitle}>{imageName + (props.required ? REQUIRED_IDENTIFIER : "")}</label>
            </div>
            {
                props.error &&
                <small className="text-danger mt-1">{props.onInvalidMessage || NEED_TO_ADD_A_FILE}</small>
            }
        </div>
    );
};

FileBrowser.propTypes = {
    id: PropTypes.string,
    browseTitle: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    onInvalidMessage: PropTypes.string,
    error: PropTypes.string
};

export default FileBrowser;