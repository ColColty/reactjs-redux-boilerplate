import React from 'react';
import PropTypes from 'prop-types';

import { Input } from '../input';

import IosSearch from 'react-ionicons/lib/IosSearch';

const SearchBar = props => {
    const [filter, setFilter] = React.useState("");

    React.useEffect(() => {
        if (props.value !== filter) {
            setFilter(props.value);
        }
        // eslint-disable-next-line
    }, [props.value])

    const handleFilter = (v) => {
        setFilter(v);
        props.onChange(v);
    }

    return (
        <Input value={filter} onChange={handleFilter} placeholder={props.placeholder} prepend={
            <IosSearch fontSize="22px" />
        } />
    );
};

SearchBar.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
};

export default SearchBar;