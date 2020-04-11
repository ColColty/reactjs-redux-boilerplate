import React from 'react';
import PropTypes from 'prop-types';

const FileBrowser = props => {
    const inputId = props.id || Math.random().toString(36).split(-8);

    return (
        <div class="custom-file">
            <input type="file" class="custom-file-input" id={inputId} />
            <label class="custom-file-label" for={inputId} data-browse={props.browseTitle}>{props.labelText}</label>
        </div>
    );
};

FileBrowser.propTypes = {
    id: PropTypes.string,
    browseTitle: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default FileBrowser;