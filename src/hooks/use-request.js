import React from 'react';

import { keysToSnake } from 'utils/utils';
import { BASE_URL } from 'utils/api';

const useRequest = (requestType, url, body = {}, headers = {}, cb, otherRequest = false) => {
    const [returnData, setReturnData] = React.useState({
        status: "Waiting",
        data: {}
    });

    const getType = (url, body, headers, otherRequest) => {
        if (!otherRequest)
            url = BASE_URL + url;
        return fetch(url, {
            method: 'GET',
            cache: 'default',
            headers: headers,
            mode: 'cors'
        });
    }

    const postType = (url, body, headers, otherRequest) => {
        if (!otherRequest)
            url = BASE_URL + url;
        return fetch(url, {
            method: 'POST',
            cache: 'default',
            body: body,
            headers: headers,
            mode: 'cors'
        });
    }

    const deleteType = (url, body, headers, otherRequest) => {
        if (!otherRequest)
            url = BASE_URL + url;
        return fetch(url, {
            method: 'DELETE',
            cache: 'default',
            body: body,
            headers: headers,
            mode: 'cors'
        });
    }

    const putType = (url, body, headers, otherRequest) => {
        if (!otherRequest)
            url = BASE_URL + url;
        return fetch(url, {
            method: 'PUT',
            cache: 'default',
            body: body,
            headers: headers,
            mode: 'cors'
        });
    }

    const functionTypes = {
        get: getType,
        post: postType,
        delete: deleteType,
        put: putType
    };

    const handleRequestType = React.useCallback((requestType, url, body = {}, headers = {}, cb, otherRequest = false,) => {
        setReturnData({status: "Loading", data: {}, ...requestType});
        // alert(JSON.stringify({
        //     'Content-type': 'application/json',
        //     ...headers.headers,
        // }))
        functionTypes[requestType](url, JSON.stringify(body), headers.headers, otherRequest)
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw res;
            }
        })
        .then(res => {
            const data = keysToSnake(res);
            setReturnData({
                ...returnData,
                status: "Done",
                data: data,
            });
            if (cb) {
                cb(data, "Done");
            }
        })
        .catch(errmsg => {
            const status = errmsg.status;
            errmsg.text && errmsg.text().then(err => {
                const errret = {
                    status: status,
                    text: err
                }
                console.log(errret);
                setReturnData({
                    ...returnData,
                    status: "Error",
                    data: errret,
                });
                if (cb) {
                    cb(errret, "Error");
                }
            })
        });
        // eslint-disable-next-line
    }, [functionTypes]);

    React.useEffect(() => {
        if (requestType && url)
            handleRequestType(requestType, url, body, headers, cb, otherRequest);
    }, [requestType, url, body, headers, otherRequest, handleRequestType, cb]);

    return [handleRequestType, returnData.status, returnData.data];
};

export default useRequest;