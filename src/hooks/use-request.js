import React from 'react';

import Axios from 'axios';

import api from 'utils/api';

const useRequest = (requestType, url, body = {}, headers = {}, cb, otherRequest = false) => {
    const [returnData, setReturnData] = React.useState({
        status: "Loading",
        data: {}
    });

    const getType = (url, body, headers, otherRequest) => {
        if (otherRequest)
            return Axios.get(url, body, headers);
        return api.get(url, body, headers);
    }

    const postType = (url, body, headers, otherRequest) => {
        if (otherRequest)
            return Axios.post(url, body, headers);
        return api.post(url, body, headers);
    }

    const deleteType = (url, body, headers, otherRequest) => {
        if (otherRequest)
            return Axios.delete(url, body, headers);
        return api.delete(url, body, headers);
    }

    const putType = (url, body, headers, otherRequest) => {
        if (otherRequest)
            return Axios.put(url, body, headers);
        return api.put(url, body, headers);
    }

    const functionTypes = {
        get: getType,
        post: postType,
        delete: deleteType,
        update: putType
    };

    const handleRequestType = React.useCallback((requestType, url, body = {}, headers = {}, cb, otherRequest = false,) => {
        setReturnData(state => ({status: "Loading", ...state}));
        functionTypes[requestType](url, body, headers, otherRequest)
        .then(res => {
            setReturnData(state => ({
                status: "Done",
                data: res.data,
                ...state
            }));
            cb(res.data);
        })
        .catch(err => {
            setReturnData(state => ({
                status: "Error",
                data: err,
                ...state
            }));
            cb(err);
        });
    }, [functionTypes]);

    React.useEffect(() => {
        if (requestType && url)
            handleRequestType(requestType, url, body, headers, cb, otherRequest);
    }, [requestType, url, body, headers, otherRequest, handleRequestType, cb]);

    return [returnData.status, returnData.data, handleRequestType];
};

export default useRequest;