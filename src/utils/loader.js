import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { addToken } from 'actions/app-data';

const Loader = () => {
    const config = useSelector(state => state.data);
    const dispatch = useDispatch();

    React.useEffect(() => {
        if (!config.headers.Authorization) {
            console.log(localStorage.getItem("Authorization"))
            dispatch(addToken(localStorage.getItem("Authorization")));
        }
        // eslint-disable-next-line
    }, [])
    return (<></>)
};

export default Loader;